import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
     <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="about" options={{}} />
      <Stack.Screen name="blog" options={{}} />
    </Stack>
    
    </>
  )
}
