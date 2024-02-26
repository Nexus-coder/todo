import React from "react";

export default function Header({ name }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-white">{name}</h2>
    </>
  );
}
