import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiServer = createApi({
  reducerPath: "apiServer",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["todos"],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: "/todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: "/todos/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const { useAddTodoMutation, useGetTodosQuery, useDeleteTodoMutation } =
  apiServer;
