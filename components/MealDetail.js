import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import RecipeItem from "./RecipeItem";
import RecipeStep from "./RecipeStep";

const MealDetails = function ({
  mealId,
  mealTitle,
  mealIngredients,
  mealImage,
  recipeSteps,
}) {
  return (
    <ScrollView>
      <View style={styles.mealDetailContainer}>
        <Text style={styles.ingredientTitle}>{mealTitle}</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: mealImage }} style={styles.image} />
        </View>
        <View style={styles.recipeContainer}>
          <Text style={styles.ingredientTitle}>Ingredients</Text>
          {mealIngredients.map((ingredient) => {
            return <RecipeItem key={ingredient} ingredient={ingredient} />;
          })}
        </View>

        <View style={styles.recipeContainer}>
          <Text style={styles.ingredientTitle}>Recipe</Text>
          {recipeSteps.map((step) => {
            return <RecipeStep key={step} step={step} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  mealDetailContainer: {
    padding: 24,
  },
  ingredientTitle: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 200,
    marginVertical: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ffc966",
  },
  recipeContainer: {
    marginVertical: 16,
    borderWidth: 2,
    borderColor: "#ffc966",
    borderRadius: 8,
    padding: 8,
  },
});
