const RenderCanvas = function (event, coordinates) {
  const coordKey = {
    32: [coordinates[0] * 0.466666667, coordinates[1] * 0.88],
    65: [coordinates[0] * 0.146666667, coordinates[1] * 0.48],
    66: [coordinates[0] * 0.433333333, coordinates[1] * 0.704],
    67: [coordinates[0] * 0.277333333, coordinates[1] * 0.704],
    68: [coordinates[0] * 0.264, coordinates[1] * 0.48],
    69: [coordinates[0] * 0.337333333, coordinates[1] * 0.32],
    70: [coordinates[0] * 0.406666667, coordinates[1] * 0.48],
    71: [coordinates[0] * 0.465333333, coordinates[1] * 0.48],
    72: [coordinates[0] * 0.58, coordinates[1] * 0.48],
    73: [coordinates[0] * 0.533333333, coordinates[1] * 0.32],
    74: [coordinates[0] * 0.592, coordinates[1] * 0.48],
    75: [coordinates[0] * 0.66, coordinates[1] * 0.48],
    76: [coordinates[0] * 0.566666667, coordinates[1] * 0.48],
    77: [coordinates[0] * 0.5, coordinates[1] * 0.704],
    78: [coordinates[0] * 0.64, coordinates[1] * 0.704],
    79: [coordinates[0] * 0.705333333, coordinates[1] * 0.32],
    80: [coordinates[0] * 0.132, coordinates[1] * 0.32],
    81: [coordinates[0] * 0.326666667, coordinates[1] * 0.32],
    82: [coordinates[0] * 0.213333333, coordinates[1] * 0.32],
    83: [coordinates[0] * 0.386666667, coordinates[1] * 0.48],
    84: [coordinates[0] * 0.518666667, coordinates[1] * 0.32],
    85: [coordinates[0] * 0.373333333, coordinates[1] * 0.32],
    86: [coordinates[0] * 0.2, coordinates[1] * 0.704],
    87: [coordinates[0] * 0.246666667, coordinates[1] * 0.32],
    88: [coordinates[0] * 0.450666667, coordinates[1] * 0.704],
    89: [coordinates[0] * 0.185333333, coordinates[1] * 0.32],
    90: [coordinates[0] * 0.146666667, coordinates[1] * 0.704],
    97: [coordinates[0] * 0.433333333, coordinates[1] * 0.48],
    98: [coordinates[0] * 0.304, coordinates[1] * 0.704],
    99: [coordinates[0] * 0.277333333, coordinates[1] * 0.704],
    100: [coordinates[0] * 0.264, coordinates[1] * 0.48],
    101: [coordinates[0] * 0.337333333, coordinates[1] * 0.32],
    102: [coordinates[0] * 0.406666667, coordinates[1] * 0.48],
    103: [coordinates[0] * 0.045333333, coordinates[1] * 0.48],
    104: [coordinates[0] * 0.58, coordinates[1] * 0.48],
    105: [coordinates[0] * 0.053333333, coordinates[1] * 0.32],
    106: [coordinates[0] * 0.592, coordinates[1] * 0.48],
    107: [coordinates[0] * 0.065333333, coordinates[1] * 0.48],
    108: [coordinates[0] * 0.566666667, coordinates[1] * 0.48],
    109: [coordinates[0] * 0.5, coordinates[1] * 0.704],
    110: [coordinates[0] * 0.64, coordinates[1] * 0.704],
    111: [coordinates[0] * 0.705333333, coordinates[1] * 0.32],
    112: [coordinates[0] * 0.132, coordinates[1] * 0.32],
    113: [coordinates[0] * 0.326666667, coordinates[1] * 0.32],
    114: [coordinates[0] * 0.213333333, coordinates[1] * 0.32],
    115: [coordinates[0] * 0.386666667, coordinates[1] * 0.48],
    116: [coordinates[0] * 0.518666667, coordinates[1] * 0.32],
    117: [coordinates[0] * 0.373333333, coordinates[1] * 0.32],
    118: [coordinates[0] * 0.2, coordinates[1] * 0.704],
    119: [coordinates[0] * 0.246666667, coordinates[1] * 0.32],
    120: [coordinates[0] * 0.450666667, coordinates[1] * 0.704],
    121: [coordinates[0] * 0.185333333, coordinates[1] * 0.32],
    122: [coordinates[0] * 0.19172414, coordinates[1] * 0.704],
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
