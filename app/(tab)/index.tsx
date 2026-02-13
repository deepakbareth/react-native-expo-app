import { Link, useRouter } from "expo-router";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Image
} from "react-native";
// We use Ionicons for professional-looking icons
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 1. Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Afternoon,</Text>
            <Text style={styles.username}>Deepak Baret</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/")}>
            <View style={styles.avatar}>
               <Text style={styles.avatarText}>DB</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 2. Dashboard Stats (Overview) */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: "#3A86FF" }]}>
            <Ionicons name="code-slash" size={24} color="white" />
            <Text style={styles.statNumber}>5.2h</Text>
            <Text style={styles.statLabel}>Coding Time</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: "#8338EC" }]}>
            <Ionicons name="checkmark-circle-outline" size={24} color="white" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </View>
        </View>

        {/* 3. Quick Actions Grid */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.gridContainer}>
          {/* Link to Blog */}
          <Link href="/blog" asChild>
            <TouchableOpacity style={styles.gridButton}>
              <View style={styles.iconCircle}>
                <Ionicons name="newspaper" size={24} color="#FF006E" />
              </View>
              <Text style={styles.gridLabel}>Read Blog</Text>
            </TouchableOpacity>
          </Link>

          {/* Link to Profile */}
          <Link href="/" asChild>
            <TouchableOpacity style={styles.gridButton}>
              <View style={styles.iconCircle}>
                <Ionicons name="person" size={24} color="#3A86FF" />
              </View>
              <Text style={styles.gridLabel}>My Profile</Text>
            </TouchableOpacity>
          </Link>

          {/* Dummy Link 1 */}
          <TouchableOpacity style={styles.gridButton}>
            <View style={styles.iconCircle}>
              <Ionicons name="folder-open" size={24} color="#FB5607" />
            </View>
            <Text style={styles.gridLabel}>Projects</Text>
          </TouchableOpacity>

          {/* Dummy Link 2 */}
          <TouchableOpacity style={styles.gridButton}>
            <View style={styles.iconCircle}>
              <Ionicons name="settings" size={24} color="#FFBE0B" />
            </View>
            <Text style={styles.gridLabel}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* 4. Horizontal Scroll: Recent Projects */}
        <Text style={styles.sectionTitle}>Recent Projects</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Portfolio Website</Text>
            <Text style={styles.projectTech}>Next.js • React</Text>
          </View>
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>E-Commerce App</Text>
            <Text style={styles.projectTech}>React Native</Text>
          </View>
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Task Manager</Text>
            <Text style={styles.projectTech}>Node.js</Text>
          </View>
        </ScrollView>

        {/* 5. Daily Goal Section */}
        <Text style={styles.sectionTitle}>Daily Goal</Text>
        <View style={styles.goalCard}>
          <View style={styles.goalInfo}>
            <Text style={styles.goalTitle}>Master React Native</Text>
            <Text style={styles.goalProgress}>70% Completed</Text>
          </View>
          <Ionicons name="play-circle" size={40} color="#3A86FF" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: StatusBar.currentHeight, // Safe area fix
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 50,
  },
  
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  greeting: {
    color: "#AAAAAA",
    fontSize: 16,
  },
  username: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#555",
  },
  avatarText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  // Stats
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCard: {
    width: "48%",
    padding: 15,
    borderRadius: 15,
    alignItems: "flex-start",
  },
  statNumber: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  statLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
  },

  // Section Titles
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  // Grid
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  gridButton: {
    width: "48%",
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2C2C2C",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  gridLabel: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },

  // Horizontal Projects
  horizontalScroll: {
    marginBottom: 30,
  },
  projectCard: {
    width: 160,
    height: 100,
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    justifyContent: "flex-end",
  },
  projectTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  projectTech: {
    color: "#888",
    fontSize: 12,
    marginTop: 4,
  },

  // Goal Card
  goalCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#333",
  },
  goalInfo: {
    flex: 1,
  },
  goalTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  goalProgress: {
    color: "#4facfe",
    fontSize: 12,
  },
});