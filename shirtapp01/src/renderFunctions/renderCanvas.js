import showKeyImage from "./showKeyImage";

//import showKeyImage from "./RenderFunctions/showKeyImage";
function renderCanvas(e, curLetter, coordinates) {
  //const [letters, setLetters] = useEffect([]);

  //console.log(curLetter);

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d", { alpha: true });
  //var canvas = ctx.canvas;

  //setLetters(event);
  const coordKey = {
    " ": [coordinates[0] * 0.38275862, coordinates[1] * 0.88],
    a: [coordinates[0] * 0.08, coordinates[1] * 0.38],
    b: [coordinates[0] * 0.53, coordinates[1] * 0.65],
    c: [coordinates[0] * 0.33, coordinates[1] * 0.65],
    d: [coordinates[0] * 0.27, coordinates[1] * 0.38],
    e: [coordinates[0] * 0.25, coordinates[1] * 0.13],
    f: [coordinates[0] * 0.37, coordinates[1] * 0.38],
    g: [coordinates[0] * 0.47, coordinates[1] * 0.38],
    h: [coordinates[0] * 0.58, coordinates[1] * 0.38],
    i: [coordinates[0] * 0.75, coordinates[1] * 0.13],
    j: [coordinates[0] * 0.67, coordinates[1] * 0.38],
    k: [coordinates[0] * 0.77, coordinates[1] * 0.38],
    l: [coordinates[0] * 0.88, coordinates[1] * 0.38],
    m: [coordinates[0] * 0.73, coordinates[1] * 0.65],
    n: [coordinates[0] * 0.63, coordinates[1] * 0.65],
    o: [coordinates[0] * 0.85, coordinates[1] * 0.13],
    p: [coordinates[0] * 0.95, coordinates[1] * 0.13],
    q: [coordinates[0] * 0.05, coordinates[1] * 0.13],
    r: [coordinates[0] * 0.35, coordinates[1] * 0.13],
    s: [coordinates[0] * 0.17, coordinates[1] * 0.38],
    t: [coordinates[0] * 0.45, coordinates[1] * 0.13],
    u: [coordinates[0] * 0.65, coordinates[1] * 0.13],
    v: [coordinates[0] * 0.43, coordinates[1] * 0.65],
    w: [coordinates[0] * 0.15, coordinates[1] * 0.13],
    x: [coordinates[0] * 0.23, coordinates[1] * 0.65],
    y: [coordinates[0] * 0.55, coordinates[1] * 0.13],
    z: [coordinates[0] * 0.13, coordinates[1] * 0.65],
  };

  ctx.beginPath();
  ctx.moveTo(coordKey[curLetter[0]][0], coordKey[curLetter[0]][1]);

  if (e === "canvasResize" && curLetter.length > 1) {
    //console.log("first coordinate: " + coordinates[0]);
    //console.log("second coordinate: " + coordinates[1]);
    //setTimeout(ctx.clearRect(0, 0, coordinates[0], coordinates[1]), 500);
    //showKeyImage();

    //ctx.moveTo(coordKey[curLetter[i - 1]][0], coordKey[curLetter[i - 1]][1]);
    ctx.clearRect(0, 0, coordinates[0], coordinates[1]);

    for (var i = 1; i < curLetter.length; i++) {
      //console.log("Drawing due to Canvas Change ");
      //console.log(curLetter);

      ctx.lineTo(coordKey[curLetter[i]][0], coordKey[curLetter[i]][1]);
    }

    ctx.stroke();
  } else if (curLetter.length > 1 && e === "typing") {
    // ctx.clearRect(0, 0, coordinates[0], coordinates[1]);

    //showKeyImage();
    ctx.clearRect(0, 0, coordinates[0], coordinates[1]);
    for (let i = 1; i < curLetter.length; i++) {
      console.log("This should run on the 2nd keystroke");
      ctx.lineTo(coordKey[curLetter[i]][0], coordKey[curLetter[i]][1]);
    }
    console.log("STROKe COMMAN not called?");

    ctx.stroke();
  } else if (curLetter.length < 2) {
    ctx.clearRect(0, 0, coordinates[0], coordinates[1]);
    return;
  }
}

export default renderCanvas;
