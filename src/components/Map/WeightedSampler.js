class WeightedSampler {
    constructor(elements, weights) {
      this.total = 0;
      this.elements = Array.from(elements);
      this.cweights = weights.map(weight => this.total += weight);
    }
    get() {
      let random = Math.random() * this.total;
      return this.elements.find((element, index) => random < this.cweights[index]);
    }
  }

  export {WeightedSampler}