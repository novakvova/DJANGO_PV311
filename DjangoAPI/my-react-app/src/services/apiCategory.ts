import {createApi} from "@reduxjs/toolkit/query/react";
import type {ICategoryItem} from "./types.ts";
import {createBaseQuery} from "../utils/createBaseQuery.ts";

export const apiCategory = createApi({
    reducerPath: "api",
    baseQuery: createBaseQuery('categories'),
    endpoints: (builder) => ({
        getAllCategories: builder.query<ICategoryItem[], void>({
            query: () => ''
        })
    })
});

export const { useGetAllCategoriesQuery } = apiCategory;