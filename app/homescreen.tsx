import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const handleLogout = () => {
    router.replace("/"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SplitMate 🎉</Text>
      <Text style={styles.subtitle}>You are now logged in!</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1B14",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4D734C",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#A0A0A0",
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "#4D734C",
    padding: 15,
    borderRadius: 12,
    width: "60%",
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
