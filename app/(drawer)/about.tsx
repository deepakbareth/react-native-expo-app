import { useRouter } from "expo-router";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from "react-native";

export default function About() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ScrollView ensures content doesn't get cut off on small screens */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* 1. Header Image / Avatar */}
        <View style={styles.header}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>DB</Text>
          </View>
          <Text style={styles.name}>Deepak Baret</Text>
          <Text style={styles.role}>Frontend Developer</Text>
        </View>

        {/* 2. Info Cards */}
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>About Me</Text>
            <Text style={styles.cardValue}>
              I build beautiful apps with React Native and Expo. 
              Passionate about clean code and dark mode.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>Location</Text>
            <Text style={styles.cardValue}>Delhi, India</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>Skills</Text>
            <Text style={styles.cardValue}>React • React Native • Next.js</Text>
          </View>
        </View>

        {/* 3. Back Button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Safe Area takes the full screen and avoids the notch
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: StatusBar.currentHeight, // Fix for Android status bar
  },
  
  // ScrollView container handles the inner spacing
  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },

  // Header Section
  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#4facfe",
  },
  avatarText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  role: {
    fontSize: 16,
    color: "#888888",
    marginTop: 5,
  },

  // Content Section
  content: {
    width: "90%",
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  cardLabel: {
    color: "#4facfe",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  cardValue: {
    color: "#cccccc",
    fontSize: 16,
    lineHeight: 24,
  },

  // Button
  button: {
    marginTop: 20,
    backgroundColor: "#333",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 40, // Extra space at bottom for scrolling
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});