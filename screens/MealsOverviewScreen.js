import { MEALS } from "../data/mealsData";
import MealsList from "../components/mealsLists/MealsList";

const MealsOverviewScreen = function ({ route, navigation }) {
  const ID = route.params.categoryID;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(ID) >= 0;
  });

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
