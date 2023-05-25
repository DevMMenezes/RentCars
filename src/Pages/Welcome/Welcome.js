import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={s.container}>
      <StatusBar style="light" />
      <Image source={require("../../../assets/Welcome/Car.png")} />
      <View style={s.containertitle}>
        <Text style={s.title}>Premium cars.</Text>
        <Text style={s.title}>Enjoy the luxury</Text>
      </View>
      <View style={s.containerrent}>
        <Text style={s.rent}>Premium and prestige car daily rental.</Text>
        <Text style={s.rent}>Experience the thrill at a lower price</Text>
      </View>
      <TouchableOpacity
        style={s.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={s.buttonname}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232325",
  },
  containertitle: {
    marginVertical: -50,
  },
  title: {
    color: "#ffff",
    fontSize: 35.2,
    fontWeight: "bold",
    marginLeft: 30,
  },
  containerrent: {
    marginVertical: 50,
  },
  rent: {
    color: "#8E8E8E",
    fontSize: 15,
    marginLeft: 30,
  },
  buttonname: {
    color: "#2C2B34",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    color: "#2C2B34",
    backgroundColor: "#fff",
    borderRadius: 25,
    width: 319,
    height: 54,
    padding: 10,
    alignSelf: "center",
  },
});
