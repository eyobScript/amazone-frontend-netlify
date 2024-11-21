import React from 'react'
import classes from './category.module.css'
import { Link } from 'react-router-dom';
function CategoryCard({category}) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${category.name}`}>
        <span>
            <h2>{category.title}</h2>
        </span>
        <img src={category.imageLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  )
}

export default CategoryCard;
