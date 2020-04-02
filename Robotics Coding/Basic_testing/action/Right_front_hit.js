Blockly.Blocks['Right_front_hit'] = {
  init: function () {
    this.jsonInit({
      type: "Right_front_hit",
      message0: "%{BKY_RIGHT_FRONT_HIT}",
      previousStatement: null,
      nextStatement: null,
      colour: "#377DFD",
      toolip: "",
      helpUrl: ""
    });
  }
};

Blockly.Lua['Right_front_hit'] = function (block) {
  const code = [
    "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)",
    "MOTOsetspeed(45)",
    "MOTOmove16(80, 40, 50, 108, 93, 54, 124, 108, 180, 120, 15, 110, 109, 152, 71, 112)",
    "MOTOwait()",
    "MOTOsetspeed(35)",
    "MOTOmove16(80, 40, 50, 102, 93, 54, 124, 112, 180, 120, 15, 114, 105, 140, 80, 115)",
    "MOTOwait()",
    "MOTOsetspeed(60)",
    "MOTOmove16(80, 40, 50, 86, 69, 64, 90, 87, 120, 170, 11, 105, 74, 105, 84, 105)",
    "MOTOwait()",
    "DelayMs(1000)",
    "MOTOsetspeed(35)",
    "MOTOmove16(80, 40, 100, 95, 110, 70, 120, 93, 120, 160, 100, 105, 90, 130, 80, 107)",
    "MOTOwait()",
    "MOTOsetspeed(21)",
    "MOTOmove16(80, 40, 100, 102, 110, 70, 120, 101, 120, 160, 100, 98, 90, 130, 80, 99)",
    "MOTOwait()",
    "MOTOsetspeed(35)",
    "MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)",
    "MOTOwait()",
    ""
  ];
  return code.join("\n");
}

