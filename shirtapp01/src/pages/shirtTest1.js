import React, {useState, useEffect} from "react";

export default function ShirtTest1() {
  console.log("Hey Now!");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  useEffect(()=>{
    function handleWidth(){ 
      setViewportWidth(window.innerWidth)
    }
  window.addEventListener("resize", handleWidth)
  })
  console.log(viewportWidth+" This is the viewportwidth variable")
  console.log(setViewportWidth+" This is the set viewportwidth variable" )
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-2">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            SIBLING COLUMN1
            <canvas id="myCanvas" width="200" height="100" style={{border:"1px solid #000000"}}>
</canvas>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            SIBLING COLUMN2
          </div>
        </dl>
      </div>
    </div>
  );
}
