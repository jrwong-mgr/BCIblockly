goog.require('Blockly.JavaScript');
//This code requires definitions from BCIDevice.build.js
//I am working on a way to implement this code into the plugin

Blockly.JavaScript['bci_init'] = function(block) {
    //connects the muse device
    var code = "let device = new Blue.BCIDevice((sample) => {let { electrode, data } = sample;console.log(sample);}); device.connect();";
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
Blockly.JavaScript['bci_variable'] = function(block) {
    // Search the text for a substring.
    var code = "let { electrode, data } = sample;";
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

