import React from 'react';
import './RecipeList.css'
import {Link} from "react-router-dom";

function RecipeList({recipes}) {
    return (
        <div className={"recipe-list"}>
            {recipes.map((recipe) => (
                <div key={recipe.id} className={"card"}>
                    <h3 key={recipe.id}>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>
                        {recipe.method.substring(0, 100)}...
                        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;