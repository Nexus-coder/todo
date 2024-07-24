import React, { useRef } from "react";
import Draggable from 'react-draggable'
const DraggableElement = () => {
  const dragRef = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", dragRef.current.id);
    dragRef.current.classList.add("opacity-100");
  };

  const handleDragEnd = () => {
    dragRef.current.classList.remove("opacity-100");
  };

  return (
    <div
      id="draggable"
      ref={dragRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="w-24 h-24 bg-blue-500 rounded-lg text-white flex items-center justify-center"
    >
      Drag me!
    </div>
  );
};

const DropZone = () => {
  const dropRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(data);
    dropRef.current.appendChild(draggableElement);
  };

  return (
    <div
      ref={dropRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-64 h-64 border-2 border-gray-400 rounded-lg flex items-center justify-center"
    >
      Drop Zone
    </div>
  );
};

const Apps = () => {
    return (
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
      );
};

export default Apps;
