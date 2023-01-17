import './Navbar.css'

import React from 'react';
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar(props) {
    return (
        <div className={"navbar"}>
            <nav>
                <Link to={"/"} className={"brand"}>
                    <h1>Cooking Recipes</h1>
                </Link>
                <SearchBar/>
                <Link to={"/create"}>Create Recipe</Link>
            </nav>
        </div>
    );
}

export default Navbar;