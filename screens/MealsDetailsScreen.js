import { useLayoutEffect, useContext } from "react";
import { FavoritesContext } from "../store/context/favoritesContext";

import MealDetails from "../components/MealDetail";
import FavoriteButton from "../components/buttons/FavoriteButton";

const MealsDetailsScreen = function ({ route, navigation }) {
  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;
  const mealIngredients = route.params.mealIngredients;
  const mealImage = route.params.mealImage;
  const recipeSteps = route.params.recipeSteps;

  const favoriteMealsContext = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

  const handlerFavoriteMeal = function () {
    if (mealIsFavorite) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <FavoriteButton
            icon={mealIsFavorite ? "md-star" : "star-outline"}
            onPress={handlerFavoriteMeal}
          />
        );
      },
    });
  }, [navigation, handlerFavoriteMeal]);

  return (
    <MealDetails
      mealTitle={mealTitle}
      mealIngredients={mealIngredients}
      mealImage={mealImage}
      recipeSteps={recipeSteps}
    />
  );
};

export default MealsDetailsScreen;
