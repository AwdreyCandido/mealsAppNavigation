import { MEALS } from "../data/mealsData";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favoritesContext";

import MealsList from "../components/mealsLists/MealsList";

const FavoriteMealsScreen = function () {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((favorites) =>
    favoriteMealsContext.ids.includes(favorites.id)
  );

  return <MealsList items={favoriteMeals} />;
};

export default FavoriteMealsScreen;
