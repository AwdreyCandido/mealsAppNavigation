import { FlatList } from "react-native";
import { CATEGORIES } from "../data/mealsData";

import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = function ({ navigation }) {
  const renderCategoryItem = function (itemData) {
    const pressHandler = function () {
      navigation.navigate("MealsOverview", {
        categoryID: itemData.item.id,
      });
    };

    return (
      <CategoryItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
