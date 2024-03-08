import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import FoodItem from "../components/FoodItem";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
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

  const perfomSearch =async () => {
    console.log("first")
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search..."
        style={styles.input}
      />
      {searchTerm && <Button title="Search" onPress={perfomSearch}/>}
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
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
  },
});
