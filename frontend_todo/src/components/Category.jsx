import React from "react";

export default function Category({ name, colour }) {
  let dynamicColor = `bg-[${colour}]`;
  const inlineStyle = {
    backgroundColor: colour,
  };
  return (
    <div
      style={inlineStyle}
      className={`flex justify-between items-center p-2 rounded-lg`}
    >
      {name}
    </div>
  );
}
