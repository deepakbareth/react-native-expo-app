import { Stack } from "expo-router";
import AboutHeader from "../components/AboutHeader";

export default function RootLayout() {
  return (
   <Stack
  screenOptions={{
    headerShown: false,
    headerStyle: { backgroundColor: "blue" },
    headerTintColor: "white",
  }}
>
<Stack.Screen name="(drawer)"/>
  <Stack.Screen name="index" />
  <Stack.Screen name="(tab)" options={{headerShown: false }}/>
  <Stack.Screen
    name="about"
    options={{
     header:() => <AboutHeader />
    }}
  />
</Stack>

  );
}
