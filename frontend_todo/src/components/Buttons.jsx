import React from "react";

export default function Buttons({ name, color, ...otherProps }) {
  let bgColorClass = "";
  switch (color) {
    case "blue":
      bgColorClass = "bg-blue-500 hover:bg-blue-600";
      break;
    case "red":
      bgColorClass = "bg-red-500 hover:bg-red-600";
      break;
    case "green":
      bgColorClass = "bg-green-500 hover:bg-green-600";
      break;
    default:
      bgColorClass = "bg-gray-500 hover:bg-gray-600";
  }
  return (
    <>
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
        ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2
        mb-2 ${bgColorClass} text-white`}
        {...otherProps}
      >
        {name}
      </button>
    </>
  );
}
