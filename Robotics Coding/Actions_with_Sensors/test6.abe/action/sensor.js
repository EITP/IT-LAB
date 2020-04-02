Blockly.Blocks['sensor'] = {
  init: function () {
    this.jsonInit({
      "type": "sensor",
      "message0": "%{BKY_SENSOR} %1 %{BKY_SENSOR_PORT} %2 %{BKY_SENSOR_VAR} %3",
      "args0": [{
        "type": "input_dummy"
      },{
        "type": "field_dropdown",
        "name": "port",
        "options": [
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ]
        ]
      },{
        "type": "input_value",
        "name": "variable",
        "check": "Variable"
      }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#36B7F4',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['sensor'] = function (block){
  const variable = Blockly.Lua.valueToCode(block, "variable", Blockly.JavaScript.ORDER_NONE);
  const port = block.getFieldValue("port");
  return `${variable} = ReadGpio(${port})\n`;
}

