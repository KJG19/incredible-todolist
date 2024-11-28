import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <Text style={styles.title}>TODO List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <View style={styles.button}>
        <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate("About")}
          color="red"
        />
      </View>
    </MainLayout>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    alignContent: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    marginTop: 20,
  },
});
