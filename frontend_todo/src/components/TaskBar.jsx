import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchTodos } from "../fetch/crudTodoFunctions";

import Buttons from "./Buttons";
import Header from "./Header";
import Task from "./Task";

export default function TaskBar({ children }) {
  const { data, isLoading } = useQuery("todos", fetchTodos);
  let todos = data;

  // Render loading indicator while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="col-span-2 bg-[#54BAB9] p-4 rounded-lg box">
      <div className="space-y-2">
        {todos.map((todo) => (
          <Task
            key={todo._id}
            name={todo.title}
            category={todo.category?.name}
            colour={todo.category?.colour}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <Buttons color={"red"} name={"Active"} />
        <Buttons name={"All"} />
        <Buttons name={"Completed"} />
      </div>
    </div>
  );
}
