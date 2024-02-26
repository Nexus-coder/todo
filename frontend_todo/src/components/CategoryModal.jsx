import React from "react";
import Buttons from "./Buttons";
import { useState } from "react";
import { createCategory } from "../fetch/crudCategoriesFunction";
import Compact from "@uiw/react-color-compact";

export default function CategoryModal({ change }) {
  const [newCategory, setNewCategory] = useState("");
  const [hex, setHex] = useState("#fff");
  console.log(hex);
  const handleCreateCategory = async () => {
    if (!newCategory.trim()) return; // Don't create empty todos
    const newCat = {
      name: newCategory,
      colour:hex
    };
    const createdCategory = await createCategory(newCat);
    console.log("Created todo is", createdCategory);

    // if (createdTodo) {
    //   setTodos((prevTodos) => [...prevTodos, createdTodo]); // Add the new todo to the list
    //   setNewTodoTitle(""); // Clear input field
    // }
  };
  return (
    <>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full bg-slate-100"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            CREATE CATEGORY
          </h3>
        </div>
        <div className="p-6">
          <form>
            <div className="mb-4 flex-col">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                placeholder="Category..."
              />
              <h2>Set you colour </h2>
              <Compact
                color={hex}
                style={{
                  boxShadow:
                    "rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",
                }}
                onChange={(color) => {
                  setHex(color.hex);
                }}
              />
            </div>
            <div className="mb-4"></div>
            <div className="items-center p-6 flex justify-center">
              <Buttons
                name={"Create Category"}
                onClick={handleCreateCategory}
              />
              <Buttons name={"Close"} onClick={() => change()} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
