import React from "react";

export default function ShirtTest1() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-2">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            SIBLING COLUMN1
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            SIBLING COLUMN2
          </div>
        </dl>
      </div>
    </div>
  );
}
