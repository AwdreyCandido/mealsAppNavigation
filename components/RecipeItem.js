import { View, Text, StyleSheet } from "react-native";

const RecipeItem = function ({ ingredient }) {
  return (
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientStyle}>{ingredient}</Text>
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  ingredientContainer: {
    padding: 4,
    backgroundColor: "#ffedcc",
    borderRadius: 8,
    marginVertical: 4,
  },
  ingredientStyle: {
    fontFamily: "Nunito",
    fontSize: 20,
  },
});
