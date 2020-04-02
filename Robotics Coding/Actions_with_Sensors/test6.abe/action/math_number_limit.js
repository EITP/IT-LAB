Blockly.Blocks['math_number_limit'] = {
  init: function () {
    this.jsonInit({
      "type": "math_number_limit",
      "message0": "%1",
      "args0": [{
        "type": "field_number",
        "name": "NUM",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      }],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": '#FF5064',
      "helpUrl": "%{BKY_MATH_NUMBER_HELPURL}",
      "tooltip": "%{BKY_MATH_NUMBER_TOOLTIP}",
      "extensions": ["parent_tooltip_when_inline"]
    });
  }
};

Blockly.Lua['math_number_limit'] = undefined

