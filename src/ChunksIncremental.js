// Instances of the class "ChunksIncremental" manage
// sending data and re-creating any closed websocket connections.

export class ChunksIncremental {
    constructor(url, msg_callback, err_callback) {
        this.wso = null;
        this.url = url;
        this.sentChunks = 0;
        this.completedChunks = 0;
        this.messageCallback = msg_callback;
        this.errorCallback = err_callback;
        this.wsError = false;
        this.msgs = [];
        this.buildWs();
    }
    
    buildWs() {
        this.wso = new WebSocket(this.url);
        // We want to send any messages that accumulated while the // connection might have been down.
        this.wso.onopen = () => this.sendAll();
        this.wso.onmessage = event => {
            // If we are just printing, don't deserialize via JSON.parse
            const message = event.data;
            if (message.status == "SUCCESS") {
                this.completedChunks += 1;
            }
            this.messageCallback(
                this.sentChunks - this.completedChunks,
                this.wsError,
                message
            );
        };

        this.wso.onerror = error => {
            console.error(`Websocket error detected: ${JSON.stringify(error)}`);
            this.wsError = true;
            this.errorCallback(error);
        };
        this.wso.onclose = () => {
            console.error("Ws closed; re-creating");
            this.wso = null;
            setTimeout(this.buildWs(), 4000);
        };
    }
    
    sendChunk(dataChunk) {
        const {experimentId, sessionId} = dataChunk;
        if (experimentId === null || sessionId == null) {
            console.log("Reguires session and experiment id.");
        }
        const dataStr = JSON.stringify(dataChunk);
        if (this.wso.readyState !== 1) {
            this.msgs = [...this.msgs, dataStr];
        } else {
            this.wso.send(dataStr);
            this.sentChunks += 1;
        }
    }
    
    sendAll() { // less validation than sendChunk. Used to clear message backlog.
        while (this.wso.readyState == 1 && this.msgs.length > 0) {
            this.wso.send(this.msgs.pop());
            this.sentChunks += 1; }
        if (this.msgs.length > 0) {
            console.error("Did not send all messages, remaining: " + this.msgs.length)
        }
    }
}
