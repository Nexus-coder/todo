import { useQuery } from "react-query";
import { useState } from "react";
//Fetch components
import TaskBar from "./components/TaskBar";
import CategoriesBar from "./components/CategoriesBar";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./ui/Loading";
import Modal from "./components/ModalComponent";
import ModalCreateNew from "./components/Modal";
import Apps from "./components/Drop";
//Fetch functions
import { fetchCategories } from "./fetch/crudCategoriesFunction";
import { fetchTodos } from "./fetch/crudTodoFunctions";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading } = useQuery("todos", fetchTodos);
  const category = useQuery("categories", fetchCategories);

  // Render loading indicator while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  let todos = data;
  let categories = category.data;
  return (
    <>
      <main className="bg-[#F7ECDE] min-h-screen p-8 flex justify-center">
        <div className="w-[920px]">
          <header className="flex justify-center items-center mb-10">
            <h1
              style={{ fontFamily: '"Open Sans", sans-serif' }}
              className="text-3xl font-bold text-[#E9C597]"
            >
              PERSONAL TASK MANAGER
            </h1>
          </header>
          <section className="grid grid-cols-3 gap-3 border-2 border-red-200">
            <CategoriesBar />
            <section className="col-span-2">
              <Navbar todos={todos} setShowModal={setShowModal} />
              <TaskBar />
            </section>
          </section>
        </div>
      </main>
      {showModal ? (
        <Modal>
          <ModalCreateNew categories={categories} change={setShowModal} />
        </Modal>
      ) : null}
    </>
  );
}
