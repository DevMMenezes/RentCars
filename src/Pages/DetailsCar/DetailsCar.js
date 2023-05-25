import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function DetailsCar() {
  return (
    <View style={s.container}>
      <StatusBar style="dark" />
      <Image
        style={s.Map}
        source={require("../../../assets/DetailsCar/mapa.png")}
      />
      <View style={s.FundoCinza}></View>
      <View style={s.FundoBranco}></View>
      <Image
        style={s.CarMini}
        source={require("../../../assets/DetailsCar/carmini.png")}
      />
      <Text style={s.TitleMiniCar}>Fortuner GR</Text>
      <Image
        style={s.CarDetails}
        source={require("../../../assets/DetailsCar/detailscar.png")}
      />
      <TouchableOpacity style={s.Button}>
        <Text style={s.TextButton}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  Map: {
    height: 350,
  },
  FundoCinza: {
    backgroundColor: "#282931",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    position: "relative",
  },
  FundoBranco: {
    backgroundColor: "#FFFFFF",
    height: 350,
    position: "absolute",
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    bottom: -10,
  },
  CarMini: {
    position: "absolute",
    bottom: 300,
    right: 30,
  },
  TitleMiniCar: {
    position: "absolute",
    fontSize: 24,
    color: "#fff",
    bottom: 390,
    marginHorizontal: 25,
  },
  CarDetails: {
    position: "absolute",
    bottom: 100,
    marginHorizontal: 20,
  },
  Button:{
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "black",
    width: 147,
    height: 54,
    borderRadius: 25,
    justifyContent: "center"
  },
  TextButton:{
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 5
  }
});
