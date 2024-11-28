import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import MainLayout from "../layouts/MainLayout";

function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <Text style={styles.title}>About</Text>
      <Text>Made By Kyle :D</Text>

      <View style={styles.button}>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home")}
          color="red"
        />
      </View>
    </MainLayout>
  );
}

export default AboutScreen;

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
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    marginTop: 20,
  },
});
