Blockly.Blocks['Left_hand_up'] = {
  init: function () {
    this.jsonInit({
      type: "Left_hand_up",
      message0: "%{BKY_LEFT_HAND_UP}",
      previousStatement: null,
      nextStatement: null,
      colour: "#48BCBC",
      toolip: "",
      helpUrl: ""
    });
  }
};

Blockly.Lua['Left_hand_up'] = function (block) {
  const code = [
    "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)",
    "MOTOsetspeed(35)",
    "MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)",
    "MOTOwait()",
    "MOTOsetspeed(10)",
    "MOTOmove16(80, 40, 100, 102, 93, 54, 124, 107, 120, 160, 100, 110, 109, 152, 71, 118)",
    "MOTOwait()",
    "MOTOsetspeed(46)",
    "MOTOmove16(156, 114, 100, 102, 93, 54, 128, 108, 160, 157, 59, 111, 99, 132, 83, 121)",
    "MOTOwait()",
    "DelayMs(400)",
    "MOTOsetspeed(35)",
    "MOTOmove16(30, 62, 100, 94, 93, 54, 124, 96, 160, 157, 59, 104, 107, 144, 76, 104)",
    "MOTOwait()",
    "DelayMs(100)",
    "MOTOmove16(79, 30, 100, 97, 82, 65, 100, 94, 182, 179, 19, 107, 92, 133, 68, 108)",
    "MOTOwait()",
    "DelayMs(100)",
    "MOTOmove16(80, 30, 100, 100, 93, 56, 124, 100, 120, 157, 100, 100, 107, 146, 76, 101)",
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

