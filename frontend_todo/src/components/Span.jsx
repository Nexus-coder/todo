import React from "react";

export default function Span({ name, colour }) {
  const inlineStyle = {
    backgroundColor: colour,
  };
  return (
    <>
      <button
        style={inlineStyle}
        className={`inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-white`}
      >
        {name}
      </button>
    </>
  );
}
