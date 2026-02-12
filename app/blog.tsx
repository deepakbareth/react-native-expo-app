import { StyleSheet, Text, View } from "react-native";

export default function Blog() {
  return (
    <View
      style={style.container}
    >
      <Text style={style.text}>Hello blog.</Text>
      <Text style={style.text}>Hello Deepak.</Text>
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
  button:{
    margin:30,
  fontSize:30,
  textDecorationLine: "underline",
  color:"white",
    }

})
