import { Link } from "expo-router";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Blog() {
  return (
    <View style={styles.container}>
      
      {/* 1. Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Hello, Deepak 👋</Text>
        <Text style={styles.subHeader}>Welcome to your blog.</Text>
      </View>

      {/* 2. Blog Posts (Scrollable) */}
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Post 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>My First Component</Text>
          <Text style={styles.cardText}>Today I learned how to style views in React Native.</Text>
        </View>

        {/* Post 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Design Tips</Text>
          <Text style={styles.cardText}>Using padding and margins makes everything look better.</Text>
        </View>

      </ScrollView>

      {/* 3. Footer Button */}
      <View style={styles.footer}>
        <Link href="/" style={styles.button}>
          Go to Home
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark background
    paddingTop: 60, // Space for status bar
  },
  content: {
    paddingHorizontal: 20,
  },
  
  // Header Text
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subHeader: {
    fontSize: 16,
    color: "#888888",
    marginTop: 5,
  },

  // Cards (The "Beautiful" part)
  card: {
    backgroundColor: "#1E1E1E", // Slightly lighter than background
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333", // Subtle border
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#cccccc",
    lineHeight: 20,
  },

  // Button
  footer: {
    padding: 20,
    alignItems: "center",
  },
  button: {
    overflow: "hidden", // Ensures borderRadius works on Link
    backgroundColor: "#4facfe", // Nice blue gradient-like color
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    textAlign: "center",
  },
});