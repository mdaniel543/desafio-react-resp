import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiPhotos = createApi({
  reducerPath: "apiPhotos",
  baseQuery: fetchBaseQuery({ baseUrl: "https://picsum.photos/" }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
        query: () => "v2/list"
    })
  })
});

export const { useGetPhotosQuery } = apiPhotos;
