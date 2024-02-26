import React from "react";
import { useState, useEffect } from "react";

import Category from "./Category";
import Modal from "./ModalComponent";
import CategoryModal from "./CategoryModal";
import Buttons from "./Buttons";
import Header from "./Header";
import { fetchCategories } from "../fetch/crudCategoriesFunction";

export default function CategoriesBar({}) {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function waitCategories() {
      const res = await fetchCategories();
      console.log(res);
      setCategories(res);
    }
    waitCategories();
  }, []);
  return (
    <section className="col-span-1 bg-[#54BAB9] p-4 rounded-lg">
      <Header name={"Categories"} />
      <div className="flex flex-col gap-2 mb-4">
        {categories.map((category) => (
          <Category
            key={category._id}
            name={category.name}
            colour={category.colour}
          />
        ))}
      </div>
      <Buttons name={"Andrew"} />
      <Buttons
        name={"Add New"}
        onClick={() => {
          setShowModal(true);
        }}
      />
      {showModal ? (
        <Modal>
          <CategoryModal change={setShowModal} />
        </Modal>
      ) : null}
    </section>
  );
}
