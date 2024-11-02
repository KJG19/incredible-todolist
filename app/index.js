import { StyleSheet, Text, View } from "react-native";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>To Do List</Text>
        <ToDoList tasks={tasks} />
        <ToDoForm />
      </View>
    </View>
  );
}

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
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
