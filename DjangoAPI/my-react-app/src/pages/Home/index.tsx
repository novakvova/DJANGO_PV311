import * as React from "react";
import {useGetAllCategoriesQuery} from "../../services/apiCategory.ts";


const HomePage: React.FC = () => {

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
            <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Категорії</h1>
                </div>
            </header>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Slug
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Опис
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Дії
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {list?.map(category => (
                        <tr key={category.id}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {category.id}
                            </th>
                            <td className="px-6 py-4">
                                {category.name}
                            </td>
                            <td className="px-6 py-4">
                                {category.slug}
                            </td>
                            <td className="px-6 py-4">
                                {category.description}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>

                    ))}


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default HomePage;