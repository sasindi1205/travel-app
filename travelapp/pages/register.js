import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/logo.png")} // Replace with your logo path
          style={styles.logo}
        />
        <Text style={styles.logoText}>Vista Lanka</Text>
      </View>

      {/* Google Sign-In */}
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#fff" />
        <Text style={styles.googleText}>Sign up with Google</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#555"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#555"
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Login Redirect */}
      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF2E9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EA4335",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    justifyContent: "center",
    marginBottom: 20,
  },
  googleText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  divider: {
    height: 1,
    width: "80%",
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "#FDEFE4",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  registerButton: {
    backgroundColor: "#F39C12",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    color: "#555",
    marginTop: 20,
  },
  loginLink: {
    color: "#3498DB",
    fontWeight: "bold",
  },
});
