import Keyboard01 from "../assets/Keyboard01.png";

function showKeyImage() {
  const c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");

  console.log("Trying to draw keyboard image");
  var canvas = ctx.canvas;
  var imageObj1 = new Image();
  imageObj1.src = Keyboard01;
  imageObj1.onload = function () {
    var hRatio = canvas.width / imageObj1.width;
    var vRatio = canvas.height / imageObj1.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - imageObj1.width * ratio) / 2;
    var centerShift_y = (canvas.height - imageObj1.height * ratio) / 2;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      imageObj1,
      0,
      0,
      imageObj1.width,
      imageObj1.height,
      centerShift_x,
      centerShift_y,
      imageObj1.width * ratio,
      imageObj1.height * ratio
    );
  };
}
export default showKeyImage;
