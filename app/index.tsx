import { useRouter } from 'expo-router';
import { Button } from 'react-native';

import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  const router = useRouter();
  
  return (
    <View
      style={style.container}
    >
    
      <Button title="Go to About" onPress={() => router.navigate('/about')} />

      {/* <Link href="/about" style={style.button}>About</Link> */}
      <Link href="/blog" style={style.button}>Blog</Link>
      <Link href="/blog" style={style.button}>Profile</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white"
  },
  button: {
    margin: 30,
    fontSize: 30,
    textDecorationLine: "underline",
    color: "white",
  }

})
