import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  name: string;
  brand: string;
  cals: number;
};

export default function FoodItem({ name, brand, cals }: Props) {
 
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
        <Text style={{ color: "dimgray" }}>
          {cals} cal, {brand}
        </Text>
      </View>
      <AntDesign name="pluscircle" size={24} color="royalblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
