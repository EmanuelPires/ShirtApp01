import React, { useState, useEffect } from "react";
import RenderCanvas from "../components/RenderCanvas";

export default function ShirtTest1() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [drawName, setDrawName] = useState("");
  //const [nameArray, setNameArray] = useState([]);

  const [canvasArray, setCanvasArray] = useState();

  let canvasWidth = viewportWidth * 0.75;
  let canvasHeight = canvasWidth * 0.34482759;

  function nameChange(event) {
    let curLetter = event.toLowerCase().split("");
    console.log(event);
    if (curLetter.length >= 2) {
      RenderCanvas(curLetter, canvasArray);
    } else if (curLetter.length < 2) {
      console.log("1 letter in Array");
      console.log(curLetter);
    }
  }

  useEffect(() => {
    function handleWidth() {
      setViewportWidth(window.innerWidth);
      //console.log("is the firing on change?");

      setCanvasArray([canvasWidth, canvasHeight]);
      //nameChange(drawName);
    }
    handleWidth();
    //console.log(drawName);

    window.addEventListener("resize", handleWidth);
    nameChange(drawName);
  }, [drawName, viewportWidth]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-2">
          <div className=" flex  flex-col ">
            SIBLING COLUMN1
            <canvas
              id="myCanvas"
              width={canvasWidth}
              height={canvasHeight}
              style={{ border: "1px solid #000000" }}
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
                // onKeyUp={(e) => {
                //   setNameArray((current) => [...current, e.key]);
                // }}
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
