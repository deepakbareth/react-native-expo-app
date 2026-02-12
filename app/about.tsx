import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View
      style={style.container}
    >
      <Text style={style.Text}>Hello about.</Text>
      <Text style={style.Text}>Tell something about you.</Text>
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
  Text: {
color:"white"
  }

})
