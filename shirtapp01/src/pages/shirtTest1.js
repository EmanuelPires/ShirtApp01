import React, { useState, useEffect } from "react";

export default function ShirtTest1() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  let canvasWidth = viewportWidth * 0.6;
  let canvasHeight = canvasWidth * 0.3;

  //const leftSideRef = useRef();
  //console.log(leftSideRef.current + "left Ref");
  //console.log(leftDivWidth.toString() + "left Div Width");

  // useLayoutEffect(() => {
  //   if (leftSideRef.current) {
  //     setLeftDivWidth(leftSideRef.current.offsetWidth);
  //   }
  // }, []);

  useEffect(() => {
    function handleWidth() {
      setViewportWidth(window.innerWidth);
      console.log("Window size is " + viewportWidth);
      console.log("canvas width is " + canvasWidth);
      console.log("canvas height is " + canvasHeight);
    }
    window.addEventListener("resize", handleWidth);
  });

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-2">
          <div className="mx-auto flex max-w-xs flex-col ">
            SIBLING COLUMN1
            <canvas
              id="myCanvas"
              width={canvasWidth}
              height="100"
              style={{ border: "1px solid #000000" }}
            ></canvas>
          </div>
          <div className="mx-auto flex max-w-xs flex-col ">SIBLING COLUMN2</div>
        </dl>
      </div>
    </div>
  );
}
