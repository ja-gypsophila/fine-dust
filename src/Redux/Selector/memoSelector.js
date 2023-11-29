import { createSelector } from "@reduxjs/toolkit";

const search = (state) =>
  state.persistedReducer.station?.data?.response?.body?.items || [];

const favorites = (state) => state.persistedReducer.favorites.myFavorite;

export const selectFavoritesSelector = createSelector(
  [favorites],
  (favorites) => favorites
);

export const selectSearchSelector = createSelector(
  [search],
  (search) => search
);
