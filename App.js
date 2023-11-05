import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

export default function App() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [likeCoffee, setLikeCoffee] = useState("Yes");

  const handleSubmit = () => {
    const message = `My name is ${name}. I am ${age} years old. I ${
      likeCoffee === "Yes" ? "like" : "don't like"
    } coffee.`;
    Alert.alert("Summary", message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Simple React Native Form</Text>

      <Text style={styles.label}>Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="green"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Your Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        placeholderTextColor="green"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric" // To show a numeric keyboard
      />

      <Text style={styles.label}>Like Coffee?</Text>
      <RadioButton.Group
        onValueChange={(value) => setLikeCoffee(value)}
        value={likeCoffee}
      >
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item
            label="Yes"
            value="Yes"
            color="green"
            labelStyle={{ color: "green" }}
            position="leading"
            placeholderTextColor="green"
          />
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item
            label="No"
            value="No"
            color="green"
            labelStyle={{ color: "green" }}
            position="leading"
          />
        </View>
      </RadioButton.Group>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 40,
  },
  label: {
    color: "green",
    fontSize: 25,
    flexWrap: "wrap",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 1,
    borderColor: "green", // Green border
    color: "green",
    fontStyle: "italic", // Italic style
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
