import React from "react"
import style from "./recipe.module.css"

const Recipe = ({ ingredients, title, link, image }) => {
  return (
        // or className="item"
        <div className="item fitness-card" >
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a className="a" href={link}>Cooking Instructions</a>
            <img className={style.image} src={image} alt={title} />

        </div>

  )
}

export default Recipe
