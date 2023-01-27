import { configureStore } from "@reduxjs/toolkit";
import { apiPhotos } from "./apis/ApiPhotos";
import { apiServer } from "./apis/ApiServer";
import imageSlice from "./slices/ImageSlice";

export const store = configureStore({
  reducer: {
    image: imageSlice,
    [apiPhotos.reducerPath]: apiPhotos.reducer,
    [apiServer.reducerPath]: apiServer.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPhotos.middleware, apiServer.middleware),
});
