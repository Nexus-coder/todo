import React from "react";
import Span from "./Span";
import { useRef } from "react";

export default function Task({ name, category, colour }) {
  const dragRef = useRef(null);
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", dragRef.current.id);
    dragRef.current.classList.add("opacity-100");
  };
  return (
    <>
      <div
        id="draggable"
        ref={dragRef}
        draggable
        onDragStart={handleDragStart}
        className="flex justify-between items-center bg-white p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#4CAF50] w-6 h-6"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <p className="flex-1 ml-4">{name}</p>
        <Span name={category ?? "Urgency"} colour={colour} />
      </div>
    </>
  );
}
