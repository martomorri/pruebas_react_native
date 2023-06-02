import React from "react";
import { Text, StyleSheet } from "react-native";

const AguanteBoca = () => {
  return <Text style={styles.title}>Aguante Boca 💙💛💙</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 400,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 6,
    backgroundColor: "yellow",
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default AguanteBoca;