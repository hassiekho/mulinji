import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FoodItem from "../components/FoodItem";

export default function App() {
  const foods = [
    {
      id: 1,
      name: "Apple",
      brand: "Orchard apple",
      cals: 43,
    },
    {
      id: 2,
      name: "Grapes",
      brand: "Sweet grape",
      cals: 34,
    },
    {
      id: 3,
      name: "Guava",
      brand: "White guava",
      cals: 23,
    },
  ];
  return (
    <View>
      <FlatList
        data={foods}
        renderItem={({ item }) => (
          <FoodItem
            brand={item.brand}
            cals={item.cals}
            name={item.name}
            key={item.id}
          />
        )}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </View>
  );
}
