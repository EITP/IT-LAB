Blockly.Blocks['Left_flank_kick'] = {
  init: function () {
    this.jsonInit({
      type: "Left_flank_kick",
      message0: "%{BKY_LEFT_FLANK_KICK}",
      previousStatement: null,
      nextStatement: null,
      colour: "#7148F5",
      toolip: "",
      helpUrl: ""
    });
  }
};

Blockly.Lua['Left_flank_kick'] = function (block) {
  const code = [
    "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)",
    "MOTOsetspeed(15)",
    "MOTOmove16(80, 30, 100, 97, 93, 55, 124, 97, 120, 170, 100, 97, 107, 145, 76, 97)",
    "MOTOwait()",
    "MOTOmove16(80, 40, 100, 90, 91, 48, 129, 88, 120, 160, 100, 95, 107, 146, 76, 95)",
    "MOTOwait()",
    "MOTOmove16(80, 40, 100, 90, 91, 48, 129, 88, 120, 160, 100, 95, 107, 146, 76, 90)",
    "MOTOwait()",
    "MOTOsetspeed(65)",
    "MOTOmove16(80, 60, 100, 60, 105, 85, 105, 80, 120, 140, 100, 95, 107, 145, 76, 86)",
    "MOTOwait()",
    "DelayMs(50)",
    "MOTOsetspeed(36)",
    "MOTOmove16(80, 35, 100, 90, 93, 55, 124, 88, 120, 165, 100, 96, 107, 146, 76, 100)",
    "MOTOwait()",
    "MOTOsetspeed(12)",
    "MOTOmove16(80, 30, 100, 100, 93, 55, 124, 95, 120, 170, 100, 100, 107, 145, 76, 105)",
    "MOTOwait()",
    ""
  ];
  return code.join("\n");
}

