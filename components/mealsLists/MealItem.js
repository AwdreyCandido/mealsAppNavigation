import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const MealItem = function ({
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  id,
  ingredients,
  steps,
}) {
  const navigation = useNavigation();

  const pressHandler = function () {
    navigation.navigate("MealDetails", {
      mealId: id,
      mealTitle: title,
      mealIngredients: ingredients,
      mealImage: imageUrl,
      recipeSteps: steps,
    });
  };

  return (
    <View style={styles.MealItem}>
      <Pressable android_ripple={{ color: "#d6d6d6" }} onPress={pressHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{duration}m</Text>
          <Text style={styles.infoText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.infoText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f7f7f7",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "Nunito-Bold",
    textAlign: "center",
    marginVertical: 8,
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 4,
  },
  infoText: {
    fontFamily: "Nunito",
    textAlign: "center",
  },
});
