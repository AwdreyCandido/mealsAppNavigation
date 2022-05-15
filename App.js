import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import FavoriteMealsScreen from "./screens/FavoriteMealsScreen";
import FavoritesContextProvider from "./store/context/favoritesContext";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = function () {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#e69500" },
          sceneContainerStyle: {
            backgroundColor: "#fff6e6",
          },
          drawerContentStyle: {
            backgroundColor: "#ffedcc",
          },
          drawerLabelStyle: {
            fontFamily: "Nunito-Bold",
            fontSize: 16,
            color: "#333",
          },
          drawerActiveBackgroundColor: "#ffc04d",
          drawerActiveTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoriteMealsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#e69500" },
              contentStyle: {
                backgroundColor: "#fff6e6",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
