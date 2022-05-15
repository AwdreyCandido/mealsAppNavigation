import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = function (id) {
    setFavoriteMealsIds((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = function (id) {
    setFavoriteMealsIds((currentIds) =>
      currentIds.filter((mealsIds) => mealsIds !== id)
    );
  };

  const value ={
      ids: favoriteMealsIds,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
