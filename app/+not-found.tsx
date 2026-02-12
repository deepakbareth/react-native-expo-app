
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
export default function NotFound() {
  return (

    <>
      <Stack.Screen options={{title:"Oops! Not Found"}}/>
    <View
      style={style.container}
    >      
      <Link href="/" style={style.button}>go back to home page </Link>
      
    </View>
    </>
  
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
  button:{
    margin:30,
  fontSize:30,
  textDecorationLine: "underline",
  color:"white",
    }

})
