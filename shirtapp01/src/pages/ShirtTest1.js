import React, { useState, useEffect, useRef } from "react";
import renderCanvas from "../RenderFunctions/renderCanvas";
import showKeyImage from "../RenderFunctions/showKeyImage";
import Keyboard01 from "../assets/Keyboard01.png";

export default function ShirtTest1() {
  //const ref = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [drawName, setDrawName] = useState("");
  const isMounted = useRef(false);
  const [canIsVisible, setCanIsVisible] = useState(true);
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

  function toggleCanBackground() {
    if (canIsVisible) {
      document.getElementById("canBackground").style.visibility = "hidden";
      setCanIsVisible(false);
    } else {
      document.getElementById("canBackground").style.visibility = "visible";
      setCanIsVisible(true);
    }
  }
  useEffect(() => {
    //SETTING THE INITIAL DIMENSIONS FOR CANVAS ELEMENT
    function initialDimensions() {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
      let width = document.getElementById("canDiv").offsetWidth;
      console.log("Width of Div! " + width);
      setCanvasWidth(width);
      setCanvasHeight(width * 0.4);
      setCanvasArray([width, width * 0.4]);
      setDrawName(document.getElementById("drawName").value);
      console.log("MISSING DRAWNAME " + drawName);

      let nonEvent = "canvasResize";

      nameChange(nonEvent, drawName);
    }

    setDrawName(document.getElementById("drawName").value);
    showKeyImage();

    initialDimensions();
    //setTimeout(setEmptyDivHeight, 1000);
    document.getElementById("canWrapper").style.height = `${canvasHeight}px`;
    window.addEventListener("resize", initialDimensions);
  }, [viewportWidth, viewportHeight]);

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

  useEffect(() => {
    showKeyImage();
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-2 relative">
          <div className="flex-col " id="canDiv">
            <p>SIBLING COLUMN</p>

            <div className="relative" id="canWrapper">
              <canvas
                className="absolute z-10 "
                id="myCanvas"
                width={canvasWidth}
                height={canvasHeight}
                style={{
                  zIndex: 2,
                  border: "1px solid #000000",
                  // background: "../assets/Keyboard01",
                  //position: "absolute",
                }}
              ></canvas>

              <canvas
                className="absolute z-0"
                id="canBackground"
                width={canvasWidth}
                height={canvasHeight}
                style={{
                  border: "1px solid #000000",
                  //background: "../assets/Keyboard01",
                  //position: "absolute",
                }}
              ></canvas>
              {/* <div className=" "></div> */}
            </div>
          </div>
          <div className="   flex-col  ">
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
            <button
              onClick={() => {
                toggleCanBackground();
              }}
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
            >
              Toggle Keyboard Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
