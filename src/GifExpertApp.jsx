import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = (newCategory) => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // console.log(newCategory);
  };
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
