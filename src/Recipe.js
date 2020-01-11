import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, totaltime }) => {
    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt="" />
            <h1 className={style.title}>{title}</h1>
            <p className={style.totaltime}>{totaltime} min</p>
            <ol>
                {ingredients.map(ingredients => (
                    <li className={style.text}>{ingredients.text}</li>
                ))}
            </ol>
            <p className={style.calories}>{calories.toFixed(0)} calories</p>
            
        </div>
    );
}



export default Recipe;