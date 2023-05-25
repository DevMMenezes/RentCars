import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={s.container}>
      <StatusBar style="dark" />
      <View style={s.containerNotifications}>
        <View style={s.containerInformation1}>
          <Image source={require("../../../assets/Home/info.png")} />
          <Text style={s.Notifications1}>Information</Text>
        </View>
        <View style={s.containerInformation2}>
          <Image source={require("../../../assets/Home/bell.png")} />
          <Text style={s.Notifications2}>Notifications</Text>
        </View>
      </View>
      {/* DAQUI PARA CIMA É INFORMATIONS */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetailsCar");
        }}
      >
        <View style={s.CardCar}>
          <Text style={s.titleCardCar}>Nearest Car</Text>
          <Image
            style={s.CarCard}
            source={require("../../../assets/Home/carnear.png")}
          />
          <Text style={s.nameCarCard}>Fortuner GR</Text>
          <Image
            style={s.StatusCarCard}
            source={require("../../../assets/Home/StatusAndPriceCar.png")}
          />
        </View>
      </TouchableOpacity>
      {/* DAQUI PARA CIMA É CARD CAR */}
      <View style={s.UserAndMap}>
        <Image source={require("../../../assets/Home/Users.png")} />
        <Image source={require("../../../assets/Home/Maps.png")} />
      </View>
      {/*DAQUI PRA CIMA É USER E MAP*/}
      <View style={s.MoreCars}>
        <Text style={s.TitleMoreCars}>More Cars</Text>

        <View style={s.ContainerCarros}>
          <Text style={s.NameCar1}>Corolla Cross</Text>
          <Image source={require("../../../assets/Home/direction.png")} />
        </View>
        <View style={s.ContainerCarros}>
          <Text style={s.NameCar1}>Ionic 5</Text>
          <Image source={require("../../../assets/Home/direction.png")} />
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerNotifications: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 70,
    marginHorizontal: 20,
  },
  containerInformation1: { display: "flex", flexDirection: "row" },
  containerInformation2: { display: "flex", flexDirection: "row" },
  Notifications1: {
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  Notifications2: {
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  /* DAQUI PARA CIMA É INFORMATIONS */
  CardCar: {
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    borderRadius: 20,
    margin: 28,
  },
  titleCardCar: {
    fontSize: 12,
    color: "#787878",
    marginVertical: 17,
    marginHorizontal: 22,
  },
  CarCard: {
    margin: 5,
  },
  nameCarCard: {
    fontSize: 20,
    color: "#2C2B34",
    marginHorizontal: 22,
  },
  StatusCarCard: {
    margin: 15,
    marginLeft: 20,
  },
  /* DAQUI PARA CIMA É CARD CAR */
  UserAndMap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  /* DAQUI PRA CIMA É USER E MAPS */
  MoreCars: {
    backgroundColor: "#282931",
    borderRadius: 20,
    margin: 28,
  },
  TitleMoreCars: {
    fontSize: 12,
    color: "#D4D4D4",
    margin: 10,
    marginLeft: 15,
  },
  NameCar1: {
    color: "#FFFFFF",
    fontSize: 20,
    margin: 15,
  },
  ContainerCarros: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
