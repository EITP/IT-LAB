Blockly.Blocks['Right_move'] = {
  init: function () {
    this.jsonInit({
      type: "Right_move",
      message0: "%{BKY_RIGHT_MOVE}",
      previousStatement: null, 
      nextStatement: null,
      colour: "#48BCBC",
      toolip: "",
      helpUrl: ""
    });
  }
};

Blockly.Lua['Right_move'] = function (block) {
  const code = [
    "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)",
    "MOTOsetspeed(65)",
    "MOTOmove16(80, 40, 100, 90, 93, 54, 124, 100, 120, 160, 100, 115, 88, 110, 95, 110)",
    "MOTOwait()",
    "DelayMs(50)",
    "MOTOsetspeed(75)",
    "MOTOmove16(80, 45, 100, 80, 84, 40, 132, 70, 120, 170, 100, 105, 107, 147, 79, 95)",
    "MOTOwait()",
    "MOTOsetspeed(65)",
    "MOTOmove16(80, 30, 100, 97, 93, 54, 124, 95, 120, 170, 100, 100, 107, 146, 76, 102)",
    "MOTOwait()",
    "MOTOsetspeed(20)",
    "MOTOmove16(80, 30, 100, 100, 93, 55, 124, 95, 120, 170, 100, 100, 107, 145, 76, 105)",
    "MOTOwait()",
    "DelayMs(50)",
    "MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)",
    "MOTOwait()",
    ""
  ];
  return code.join("\n");
}

