const RenderCanvas = function (event, coordinates) {
  const coordKey = {
    32: [coordinates[0] * 0.466666667, coordinates[1]],
    65: [coordinates[0] * 0.146666667, coordinates[1]],
    66: [coordinates[0] * 0.433333333, coordinates[1]],
    67: [coordinates[0] * 0.277333333, coordinates[1]],
    68: [coordinates[0] * 0.264, coordinates[1]],
    69: [coordinates[0] * 0.337333333, coordinates[1]],
    70: [coordinates[0] * 0.406666667, coordinates[1]],
    71: [coordinates[0] * 0.465333333, coordinates[1]],
    72: [coordinates[0] * 0.58, coordinates[1]],
    73: [coordinates[0] * 0.533333333, coordinates[1]],
    74: [coordinates[0] * 0.592, coordinates[1]],
    75: [coordinates[0] * 0.66, coordinates[1]],
    76: [coordinates[0] * 0.566666667, coordinates[1]],
    77: [coordinates[0] * 0.5, coordinates[1]],
    78: [coordinates[0] * 0.64, coordinates[1]],
    79: [coordinates[0] * 0.705333333, coordinates[1]],
    80: [coordinates[0] * 0.132, coordinates[1]],
    81: [coordinates[0] * 0.326666667, coordinates[1]],
    82: [coordinates[0] * 0.213333333, coordinates[1]],
    83: [coordinates[0] * 0.386666667, coordinates[1]],
    84: [coordinates[0] * 0.518666667, coordinates[1]],
    85: [coordinates[0] * 0.373333333, coordinates[1]],
    86: [coordinates[0] * 0.2, coordinates[1]],
    87: [coordinates[0] * 0.246666667, coordinates[1]],
    88: [coordinates[0] * 0.450666667, coordinates[1]],
    89: [coordinates[0] * 0.185333333, coordinates[1]],
    90: [coordinates[0] * 0.146666667, coordinates[1]],
    97: [coordinates[0] * 0.433333333, coordinates[1]],
    98: [coordinates[0] * 0.304, coordinates[1]],
    99: [coordinates[0] * 0.277333333, coordinates[1]],
    100: [coordinates[0] * 0.264, coordinates[1]],
    101: [coordinates[0] * 0.337333333, coordinates[1]],
    102: [coordinates[0] * 0.406666667, coordinates[1]],
    103: [coordinates[0] * 0.045333333, coordinates[1]],
    104: [coordinates[0] * 0.58, coordinates[1]],
    105: [coordinates[0] * 0.053333333, coordinates[1]],
    106: [coordinates[0] * 0.592, coordinates[1]],
    107: [coordinates[0] * 0.065333333, coordinates[1]],
    108: [coordinates[0] * 0.566666667, coordinates[1]],
    109: [coordinates[0] * 0.5, coordinates[1]],
    110: [coordinates[0] * 0.64, coordinates[1]],
    111: [coordinates[0] * 0.705333333, coordinates[1]],
    112: [coordinates[0] * 0.132, coordinates[1]],
    113: [coordinates[0] * 0.326666667, coordinates[1]],
    114: [coordinates[0] * 0.213333333, coordinates[1]],
    115: [coordinates[0] * 0.386666667, coordinates[1]],
    116: [coordinates[0] * 0.518666667, coordinates[1]],
    117: [coordinates[0] * 0.373333333, coordinates[1]],
    118: [coordinates[0] * 0.2, coordinates[1]],
    119: [coordinates[0] * 0.246666667, coordinates[1]],
    120: [coordinates[0] * 0.450666667, coordinates[1]],
    121: [coordinates[0] * 0.185333333, coordinates[1]],
    122: [coordinates[0] * 0.19172414, coordinates[1]],
  };
  console.log(coordinates[0] + " x axis");
  console.log(coordinates[1] + " y axis");
  console.log(event);

  if (event.length >= 2) {
    for (var i = 1; i < event.length; i++) {
      console.log("are in the for loop? " + event[i - 1]);
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(coordKey[event[i - 1]][0], coordKey[event[i - 1]][1]);
      ctx.lineTo(coordKey[event[i]][0], coordKey[event[i]][1]);
      ctx.stroke();
    }
  }
};

export default RenderCanvas;
