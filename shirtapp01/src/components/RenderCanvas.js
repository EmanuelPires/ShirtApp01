const RenderCanvas = function (event, coordinates) {
  console.log(coordinates[0] + " x axis");
  console.log(coordinates[1] + " y axis");
  console.log(event);

  //setLetterArray((current) => [...current, event.which]);

  //   if (letterArray[0] == 0) {
  //     console.log("Array contains 1 letter " + letterArray[0]);
  //   } else {
  //     console.log("Array has more than 1 letter");
  //     console.log(letterArray);
  //   }
  const coordKey = {
    32: [coordinates[0], 220],
    65: [coordinates[0], 120],
    66: [coordinates[0], 176],
    67: [coordinates[0], 176],
    68: [coordinates[0], 120],
    69: [coordinates[0], 80],
    70: [coordinates[0], 120],
    71: [coordinates[0], 120],
    72: [coordinates[0], 120],
    73: [coordinates[0], 80],
    74: [coordinates[0], 120],
    75: [coordinates[0], 120],
    76: [coordinates[0], 120],
    77: [coordinates[0], 176],
    78: [coordinates[0], 176],
    79: [coordinates[0], 80],
    80: [coordinates[0], 80],
    81: [99, 80],
    82: [245, 80],
    83: [160, 120],
    84: [290, 80],
    85: [389, 80],
    86: [280, 176],
    87: [150, 80],
    88: [185, 176],
    89: [338, 80],
    90: [139, 176],
    97: [110, 120],
    98: [325, 176],
    99: [228, 176],
    100: [208, 120],
    101: [198, 80],
    102: [253, 120],
    103: [305, 120],
    104: [349, 120],
    105: [435, 80],
    106: [400, 120],
    107: [444, 120],
    108: [495, 120],
    109: [425, 176],
    110: [375, 176],
    111: [480, 80],
    112: [529, 80],
    113: [99, 80],
    114: [245, 80],
    115: [160, 120],
    116: [290, 80],
    117: [389, 80],
    118: [280, 176],
    119: [150, 80],
    120: [185, 176],
    121: [338, 80],
    122: [139, 176],
  };
};

export default RenderCanvas;
