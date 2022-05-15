import { View, Text, StyleSheet } from "react-native";

const RecipeStep = function ({ step }) {
  return (
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientStyle}>{step}</Text>
    </View>
  );
};

export default RecipeStep;

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
