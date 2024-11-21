import React from "react";
import { categoryInfo } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
      <section className={classes.category_container}>
        {categoryInfo.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </section>
  );
}

export default Category;
