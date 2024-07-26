import * as React from "react";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealsScreen from "../screens/MealsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
      </Stack.Navigator>
    </>
  );
}
