import React from "react";

export default function DeleteCanvas(e, drawName, coordinates) {
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  const coordKey = {
    " ": [coordinates[0] * 0.48275862, coordinates[1] * 0.88],
    a: [coordinates[0] * 0.15172414, coordinates[1] * 0.48],
    b: [coordinates[0] * 0.44827586, coordinates[1] * 0.704],
    c: [coordinates[0] * 0.31448276, coordinates[1] * 0.704],
    d: [coordinates[0] * 0.28689655, coordinates[1] * 0.48],
    e: [coordinates[0] * 0.337333333, coordinates[1] * 0.32],
    f: [coordinates[0] * 0.406666667, coordinates[1] * 0.48],
    g: [coordinates[0] * 0.465333333, coordinates[1] * 0.48],
    h: [coordinates[0] * 0.58, coordinates[1] * 0.48],
    i: [coordinates[0] * 0.533333333, coordinates[1] * 0.32],
    j: [coordinates[0] * 0.592, coordinates[1] * 0.48],
    k: [coordinates[0] * 0.66, coordinates[1] * 0.48],
    l: [coordinates[0] * 0.566666667, coordinates[1] * 0.48],
    m: [coordinates[0] * 0.5, coordinates[1] * 0.704],
    n: [coordinates[0] * 0.64, coordinates[1] * 0.704],
    o: [coordinates[0] * 0.705333333, coordinates[1] * 0.32],
    p: [coordinates[0] * 0.132, coordinates[1] * 0.32],
    q: [coordinates[0] * 0.326666667, coordinates[1] * 0.32],
    r: [coordinates[0] * 0.213333333, coordinates[1] * 0.32],
    s: [coordinates[0] * 0.386666667, coordinates[1] * 0.48],
    t: [coordinates[0] * 0.518666667, coordinates[1] * 0.32],
    u: [coordinates[0] * 0.373333333, coordinates[1] * 0.32],
    v: [coordinates[0] * 0.2, coordinates[1] * 0.704],
    w: [coordinates[0] * 0.246666667, coordinates[1] * 0.32],
    x: [coordinates[0] * 0.450666667, coordinates[1] * 0.704],
    y: [coordinates[0] * 0.185333333, coordinates[1] * 0.32],
    z: [coordinates[0] * 0.146666667, coordinates[1] * 0.704],
    // 97: [coordinates[0] * 0.433333333, coordinates[1] * 0.48],
    // 98: [coordinates[0] * 0.304, coordinates[1] * 0.704],
    // 99: [coordinates[0] * 0.277333333, coordinates[1] * 0.704],
    // 100: [coordinates[0] * 0.264, coordinates[1] * 0.48],
    // 101: [coordinates[0] * 0.337333333, coordinates[1] * 0.32],
    // 102: [coordinates[0] * 0.406666667, coordinates[1] * 0.48],
    // 103: [coordinates[0] * 0.045333333, coordinates[1] * 0.48],
    // 104: [coordinates[0] * 0.58, coordinates[1] * 0.48],
    // 105: [coordinates[0] * 0.053333333, coordinates[1] * 0.32],
    // 106: [coordinates[0] * 0.592, coordinates[1] * 0.48],
    // 107: [coordinates[0] * 0.065333333, coordinates[1] * 0.48],
    // 108: [coordinates[0] * 0.566666667, coordinates[1] * 0.48],
    // 109: [coordinates[0] * 0.5, coordinates[1] * 0.704],
    // 110: [coordinates[0] * 0.64, coordinates[1] * 0.704],
    // 111: [coordinates[0] * 0.705333333, coordinates[1] * 0.32],
    // 112: [coordinates[0] * 0.132, coordinates[1] * 0.32],
    // 113: [coordinates[0] * 0.326666667, coordinates[1] * 0.32],
    // 114: [coordinates[0] * 0.213333333, coordinates[1] * 0.32],
    // 115: [coordinates[0] * 0.386666667, coordinates[1] * 0.48],
    // 116: [coordinates[0] * 0.518666667, coordinates[1] * 0.32],
    // 117: [coordinates[0] * 0.373333333, coordinates[1] * 0.32],
    // 118: [coordinates[0] * 0.2, coordinates[1] * 0.704],
    // 119: [coordinates[0] * 0.246666667, coordinates[1] * 0.32],
    // 120: [coordinates[0] * 0.450666667, coordinates[1] * 0.704],
    // 121: [coordinates[0] * 0.185333333, coordinates[1] * 0.32],
    // 122: [coordinates[0] * 0.19172414, coordinates[1] * 0.704],
  };
  let curLetter = drawName.toLowerCase().split("");
  if (e.keyCode === 8 && curLetter.length >= 2) {
    for (let i = 1; i < curLetter.length; i++) {
      console.log(
        "Delete was hit \n" + "current array of letters " + curLetter
      );

      ctx.clearRect(0, 0, coordinates[0], coordinates[1]);

      debugger;

      ctx.beginPath();
      ctx.moveTo(coordKey[curLetter[i - 1]][0], coordKey[curLetter[i - 1]][1]);
      ctx.lineTo(coordKey[curLetter[i]][0], coordKey[curLetter[i]][1]);
      ctx.stroke();
    }
  } else if (e.keyCode === 8 && curLetter.length == 1) {
    ctx.clearRect(0, 0, coordinates[0], coordinates[1]);
  }
}
