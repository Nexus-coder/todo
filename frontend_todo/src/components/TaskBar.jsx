import React from "react";
import { useState } from "react";
export default function TaskBar({ children }) {
  return (
    <div className="col-span-2 bg-[#54BAB9] p-4 rounded-lg">{children}</div>
  );
}
