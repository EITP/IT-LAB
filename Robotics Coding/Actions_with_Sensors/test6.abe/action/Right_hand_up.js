Blockly.Blocks['Right_hand_up'] = {
  init: function () {
    this.jsonInit({
      type: "Right_hand_up",
      message0: "%{BKY_RIGHT_HAND_UP}",
      previousStatement: null,
      nextStatement: null,
      colour: "#48BCBC",
      toolip: "",
      helpUrl: ""
    });
  }
};

Blockly.Lua['Right_hand_up'] = function (block) {
  const code = [
    "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)",
    "MOTOsetspeed(35)",
    "MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)",
    "MOTOwait()",
    "MOTOsetspeed(10)",
    "MOTOmove16(80, 40, 100, 90, 91, 48, 129, 76, 120, 160, 100, 98, 107, 146, 76, 92)",
    "MOTOwait()",
    "MOTOsetspeed(46)",
    "MOTOmove16(40, 43, 141, 90, 101, 71, 112, 69, 44, 86, 100, 98, 107, 146, 76, 92)",
    "MOTOwait()",
    "DelayMs(400)",
    "MOTOsetspeed(35)",
    "MOTOmove16(40, 43, 141, 96, 93, 56, 124, 96, 170, 138, 100, 106, 107, 146, 76, 104)",
    "MOTOwait()",
    "DelayMs(100)",
    "MOTOmove16(18, 21, 181, 93, 108, 67, 132, 92, 121, 170, 100, 103, 118, 135, 100, 106)",
    "MOTOwait()",
    "DelayMs(100)",
    "MOTOmove16(80, 43, 100, 100, 93, 56, 124, 100, 120, 170, 100, 100, 107, 146, 76, 101)",
    "MOTOwait()",
    "MOTOmove16(81, 31, 100, 100, 93, 56, 124, 100, 121, 170, 100, 100, 107, 146, 76, 101)",
    "MOTOwait()",
    "MOTOsetspeed(35)",
    "MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)",
    "MOTOwait()",
    ""
  ];
  return code.join("\n");
}

