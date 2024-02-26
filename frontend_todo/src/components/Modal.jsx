import React from "react";
import Span from "./Span";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";
import { createTodo } from "../fetch/crudTodoFunctions";

export default function ModalCreateNew({ change, categories }) {

  const handleCreateTodo = async (e) => {
    const formData = new FormData(e.target);

    const newTo = {
      title: formData.get("title") ?? "",
      description: formData.get("description") ?? "",
      category: formData.get("category"),
      dueDate: "February 29, 2022",
    };

    console.log("Formed to do", newTo);

    const createdTodo = await createTodo(newTo);
    console.log("Created todo is", createdTodo);

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
            CREATE TASK
          </h3>
        </div>
        <div className="p-6">
          <form onSubmit={handleCreateTodo}>
            <div className="mb-4 flex-col">
              <input
                type="text"
                name="title"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Title..."
              />
              <input
                type="text"
                name="description"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Task description..."
              />
            </div>
            <div className="mb-4">
              <div className="mb-2 text-sm font-medium">Set Categories</div>
              <select name="category" id="category">
                <option />
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {/* <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <input
                    type="text"
                    name="category"
                    value={category._id}
                    className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-red-500 text-white"
                  />
                ))}
              </div> */}
            </div>
            <div className="items-center p-6 flex justify-center">
              <Buttons name={"Submit Task"} type="Submit" />
              <Buttons name={"Close"} onClick={() => change(false)} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
