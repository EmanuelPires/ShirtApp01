import React, { useState, useEffect, useRef } from "react";
import renderCanvas from "../RenderFunctions/renderCanvas";
import Keyboard01 from "../assets/Keyboard01.png";

export default function ShirtTest1() {
  //const ref = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [drawName, setDrawName] = useState("");
  const isMounted = useRef(false);
  const [canvasArray, setCanvasArray] = useState();

  function nameChange(e, drawName) {
    console.log("nameChange Caled DRAWNAME: " + drawName);
    console.log("EVENTVALUE: " + e);
    let curLetter = drawName.toLowerCase().split("");

    if (drawName === "") {
      console.log("Draw Name undefined");
      return;
    }

    renderCanvas(e, curLetter, canvasArray);
  }

  useEffect(() => {
    //SETTING THE INITIAL DIMENSIONS FOR CANVAS ELEMENT
    function initialDimensions() {
      setViewportWidth(window.innerWidth);

      let width = document.getElementById("canDiv").offsetWidth;
      console.log("Width of Div! " + width);
      setCanvasWidth(width);
      setCanvasHeight(width * 0.4);
      setCanvasArray([width, width * 0.4]);
      console.log("MISSING DRAWNAME " + drawName);

      let nonEvent = "canvasResize";
      nameChange(nonEvent, drawName);
    }

    setDrawName(document.getElementById("drawName").value);
    initialDimensions();

    window.addEventListener("resize", initialDimensions);
  }, [viewportWidth]);

  useEffect(() => {
    function drawFromTyping() {
      if (isMounted.current) {
        let e = "typing";
        nameChange(e, drawName);
      } else {
        isMounted.current = true;
      }
    }
    drawFromTyping();
  }, [drawName]);

  // useEffect(() => {
  //   var c = document.getElementById("myCanvas");
  //   var ctx = c.getContext("2d");
  //   var canvas = ctx.canvas;
  //   var imageObj1 = new Image();
  //   imageObj1.src = Keyboard01;
  //   imageObj1.onload = function () {
  //     ctx.drawImage(imageObj1, 0, 0);
  //     var hRatio = canvas.width / imageObj1.width;
  //     var vRatio = canvas.height / imageObj1.height;
  //     var ratio = Math.min(hRatio, vRatio);
  //     var centerShift_x = (canvas.width - imageObj1.width * ratio) / 2;
  //     var centerShift_y = (canvas.height - imageObj1.height * ratio) / 2;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     ctx.drawImage(
  //       imageObj1,
  //       0,
  //       0,
  //       imageObj1.width,
  //       imageObj1.height,
  //       centerShift_x,
  //       centerShift_y,
  //       imageObj1.width * ratio,
  //       imageObj1.height * ratio
  //     );
  //   };
  // }, []);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-2">
          <div className=" flex  flex-col " id="canDiv">
            SIBLING COLUMN1
            <canvas
              id="myCanvas"
              width={canvasWidth}
              height={canvasHeight}
              style={{
                border: "1px solid #000000",
                // background: "../assets/Keyboard01",
              }}
            ></canvas>
          </div>
          <div className=" flex  flex-col ">
            SIBLING COLUMN2
            <form>
              <input
                type="text"
                name="drawName"
                id="drawName"
                placeholder="TYPE YOUR NAME"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setDrawName(e.target.value);
                }}
              />
            </form>
          </div>
        </dl>
      </div>
    </div>
  );
}
