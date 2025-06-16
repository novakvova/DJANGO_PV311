import './App.css'
import {useGetAllCategoriesQuery} from "./services/apiCategory.ts";

const App = () => {

    const {data: list, isLoading, error} = useGetAllCategoriesQuery();

    console.log("list", list);
    console.log("error", error);
    console.log("isLoading", isLoading);

    if (isLoading) {
        return "Loading...";
    }
    if (error) return "<span>У нас проблеми хюстон</span>";

    return (
        <>
            <h1>Список категорій</h1>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>slug</th>
                    <th>description</th>
                </tr>
                </thead>
                <tbody>
                {list?.map(category => (
                    <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>{category.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default App
