import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavoriteButton = function ({ onPress, icon }) {
  return (
      <Pressable onPress={onPress} style={({pressed})=> pressed && styles.iconContainer}>
        <Ionicons name={icon} size={24} color="white" />
      </Pressable>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  iconContainer: {
    opacity: 0.5,
  },
});
