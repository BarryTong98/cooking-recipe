import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./component/Navbar";
import ThemeSelector from "./component/ThemeSelector";
import {useTheme} from "./hooks/useTheme";

function App() {
    const {mode}  = useTheme()

    return (
        <div className={`App ${mode}`}>
            <BrowserRouter>
                <Navbar/>
                <ThemeSelector />
                <Routes>
                    <Route exact path={"/"} element={<Home/>}>
                    </Route>
                    <Route path={"/create"} element={<Create/>}>
                    </Route>
                    <Route path={"search"} element={<Search/>}>
                    </Route>
                    <Route path={"/recipes/:id"} element={<Recipe/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App