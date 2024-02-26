import React from "react";

export default function Buttons({ name, ...otherProps }) {
  return (
    <>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-500 h-10 px-4 py-2
    mb-2 bg-[#4CAF50] text-white"
        {...otherProps}
      >
        {name}
      </button>
    </>
  );
}
