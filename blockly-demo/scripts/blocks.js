'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
//Make sure to tag BCI.js (generator) in script tags within the workspace

Blockly.defineBlocksWithJsonArray([
  {
    "type": "bci_init",
    "message0": "BCI Initialize",
    "nextStatement": null,
    "colour": 230,
    "tooltip": "put at the top of code to initialize the BCI device",
    "helpUrl": ""
  },
  {
    "type": "bci_variable",
    "message0": "Brain Waves level %1 %2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  ]);