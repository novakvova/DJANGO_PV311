import './App.css'
import HomePage from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import CategoryCreatePage from "./pages/categories/Create";

const App = () => {



    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>} />

                    <Route path={"categories"}>
                        <Route path={"create"} element={<CategoryCreatePage/>}/>
                    </Route>
                </Route>

            </Routes>

        </>
    )
}

export default App
