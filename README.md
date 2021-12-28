## Abstract

[Compose.io](https://compose-io.netlify.app/) is a customizable browser game designed for large-scale behavioral data collection on symbolic rule learning and generalization. Each level in the game consists of a survival phase where the player has to gather and use items to stay alive, and a crafting phase where items can be combined to produce stronger items. By setting their own custom crafting rules, researchers can study how humans learn the underlying rule system through trial and error. By chaining custom levels with different rulesets one after another, researchers can also study how humans generalize from one rule system to another. 

---

## 1. Introduction

1. Symbolic rule learning. Trial and error as opposed to symbolic translation on a fixed training/test dataset. 


2. Games allow us to 
    - Study rule learning over time, through trial and error. By interacting with a complex environment. (Cite developmental literature)
    - Entertainment as a natural incentive. Collect data for free. (How to justify?)
    - Has the potential to go viral, resulting in a large behavioral dataset.  

---
## 2. Game Design 

 
---
## 3. Experiments

### Groups

| Group   |      Training      |  Testing |
|----------|:-------------:|------:|
| 1 |  Permissible | Permissible |
| 2 |    Strict   |   Strict |
| 3 | Permissible |    Strict |
| 4 |  Strict | Permissible |

### Hypothesis 1

> Exposure to a strict system prior to a flexible system causes participants to be more conservative when learning the new system. 



### Hypothesis 2
> Exposure to a flexible system prior to a strict system will cause participants to have a higher failure rate during testing.

---

## Discussion 
The framework would be useful for researchers studying how humans learn to apply rules \& functions, generalize to novel inputs and even compose multiple learned functions together. By treating symbolic rule learning as a tria-and-error learning task, we collect a dataset of learning attempts over time. 

For example the acquisition of the _fep_ function from [1](https://arxiv.org/pdf/1901.04587.pdf) can be studied by adding it into the config file as a function object with a ruleset defining its behavior. Similarly the data from the acquisition of _copy_ and _blicket_ functions from [2](https://arxiv.org/abs/1908.08351) would allow direct comparison with neural models.


This could easily be done through our configuration file by (1) adding the function to the configuration file and (2) adding the rules for that function into the ruleset. We display some example rules in Figure 6.1, which are direct replications of the experiments from human few-shot learning of compositional instructions [20] within our framework

![](functions1.png)
