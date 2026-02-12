import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <Drawer>
    
  <Drawer.Screen name="index" options={{ title: "Home"}} />
  <Drawer.Screen name="settings" options={{ title: "Settings" }} />


        {/* <Drawer.Screen options={{}}/>
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="about"
        options={{
          title: "About",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="blog"
        options={{
          title: "Blog",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      /> */}
    </Drawer>
  );
}
