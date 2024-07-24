import { useQuery } from "react-query";

import React from "react";
import { useState, useEffect } from "react";

import Category from "./Category";
import Modal from "./ModalComponent";
import CategoryModal from "./CategoryModal";
import Buttons from "./Buttons";
import Header from "./Header";
import LoadingSpinner from "../ui/Loading";
import { fetchCategories } from "../fetch/crudCategoriesFunction";

export default function CategoriesBar({ categoriesss }) {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: "categories",
    queryFn: fetchCategories,
  });
  console.log(data);

  if (isLoading) return <LoadingSpinner/>;
  let categories = data;
  //Fetches the categories to populate categories section

  return (
    <section className="col-span-1 bg-[#54BAB9] p-4 rounded-lg box">
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
