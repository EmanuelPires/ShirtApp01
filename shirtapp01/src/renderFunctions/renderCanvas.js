import showKeyImage from "./renderFunctions/showKeyImage";
function renderCanvas(e, curLetter, coordinates) {
  //const [letters, setLetters] = useEffect([]);

  //console.log(curLetter);

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d", { alpha: true });
  var canvas = ctx.canvas;

  //setLetters(event);
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
    p: [coordinates[0] * 0.98, coordinates[1] * 0.32],
    q: [coordinates[0] * 0.09, coordinates[1] * 0.15],
    r: [coordinates[0] * 0.213333333, coordinates[1] * 0.32],
    s: [coordinates[0] * 0.386666667, coordinates[1] * 0.48],
    t: [coordinates[0] * 0.518666667, coordinates[1] * 0.32],
    u: [coordinates[0] * 0.373333333, coordinates[1] * 0.32],
    v: [coordinates[0] * 0.2, coordinates[1] * 0.704],
    w: [coordinates[0] * 0.246666667, coordinates[1] * 0.32],
    x: [coordinates[0] * 0.450666667, coordinates[1] * 0.704],
    y: [coordinates[0] * 0.185333333, coordinates[1] * 0.32],
    z: [coordinates[0] * 0.146666667, coordinates[1] * 0.704],
  };

  if (e === "canvasResize" && curLetter.length > 1) {
    console.log("first coordinate: " + coordinates[0]);
    console.log("second coordinate: " + coordinates[1]);
    setTimeout(ctx.clearRect(0, 0, coordinates[0], coordinates[1]), 500);
    //showKeyImage();
    ctx.beginPath();
    ctx.moveTo(coordKey[curLetter[i - 1]][0], coordKey[curLetter[i - 1]][1]);
    for (var i = 1; i < curLetter.length; i++) {
      console.log("Drawing due to Canvas Change ");
      console.log(curLetter);

      //ctx.moveTo(coordKey[curLetter[i - 1]][0], coordKey[curLetter[i - 1]][1]);
      ctx.lineTo(coordKey[curLetter[i]][0], coordKey[curLetter[i]][1]);
      ctx.stroke();
    }
  } else if (curLetter.length > 1) {
    ctx.clearRect(0, 0, coordinates[0], coordinates[1]);
    //showKeyImage();
    for (i = 1; i < curLetter.length; i++) {
      ctx.beginPath();
      ctx.moveTo(coordKey[curLetter[i - 1]][0], coordKey[curLetter[i - 1]][1]);
      ctx.lineTo(coordKey[curLetter[i]][0], coordKey[curLetter[i]][1]);
      ctx.stroke();
    }
  } else if (curLetter.length < 2) {
    ctx.clearRect(0, 0, coordinates[0], coordinates[1]);
  }
}

export default renderCanvas;
