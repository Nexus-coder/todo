import React from "react";
import Header from "./Header";
import Buttons from "./Buttons";

export default function Navbar({ todos, setShowModal }) {
  return (
    <>
      <div className="box flex justify-between items-center mb-4 bg-[#54BAB9]  p-4 rounded-lg">
        <Header name={`${todos.length} Tasks`} />
        <Buttons
          onClick={() => {
            setShowModal(true);
          }}
          name={"Add New Task"}
        />
        <Buttons name={"Clear Completed"} />
      </div>
    </>
  );
}
