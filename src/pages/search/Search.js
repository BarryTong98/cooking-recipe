import './Search.css'

import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {useFetch} from "../../hook/useFetch";
import RecipeList from "../component/RecipeList";

function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/recipes?q=' + query
    var {error, isPending, data} = useFetch(url);

    return (
        <div>
            <h2 className={"page-title"}>Recipes including "{query}"</h2>
            {error && (<p className={"error"}>{error}</p>)}
            {isPending && <p className={"loading"}>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
}

export default Search;