import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Meals");
  };

  // This function can be defined outside the code because it doesn't need to get recreated

  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
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
