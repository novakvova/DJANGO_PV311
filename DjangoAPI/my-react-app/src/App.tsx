import './App.css'
import HomePage from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import CategoryCreatePage from "./pages/categories/Create";
import AdminLayout from "./layout/admin/AdminLayout.tsx";
import AdminDashboardPage from "./pages/admin/Dashboard";
import AdminNotFoundPage from "./pages/admin/NotFound";

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

                <Route path={"admin"} element={<AdminLayout />}>

                    <Route path="home" element={<AdminDashboardPage />}/>

                </Route>

                <Route path="*" element={<AdminNotFoundPage />} />

            </Routes>

        </>
    )
}

export default App
