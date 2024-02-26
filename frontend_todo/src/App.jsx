import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskBar from "./components/TaskBar";
import CategoriesBar from "./components/CategoriesBar";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import Modal from "./components/ModalComponent";
import ModalCreateNew from "./components/Modal";

import { fetchCategories } from "./fetch/crudCategoriesFunction";
import { fetchTodos } from "./fetch/crudTodoFunctions";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function waitTodos() {
      setLoading(true);
      const res = await fetchTodos();
      setLoading(false);
      console.log(res[0]);
      setTodos(res);
    }
    waitTodos();

    async function waitCategories() {
      if (!loading) setLoading(true);
      const res = await fetchCategories();
      console.log("From the modal", res);
      setCategories(res);
    }
    waitCategories();
    
  }, []);

  // Render loading indicator while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className="bg-[#F4F7F6] min-h-screen p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-[#333333]">
            PERSONAL TASK MANAGER
          </h1>
        </header>
        <section className="grid grid-cols-3 gap-3 border-2 border-red-200">
          <CategoriesBar />
          <section className="col-span-2">
            <Navbar todos={todos} setShowModal={setShowModal} />
            <TaskBar>
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
                <Buttons name={"Active"} />
                <Buttons name={"All"} />
                <Buttons name={"Completed"} />
              </div>
            </TaskBar>
          </section>
        </section>
      </main>
      {showModal ? (
        <Modal>
          <ModalCreateNew categories={categories} change={setShowModal} />
        </Modal>
      ) : null}
    </>
  );
}
