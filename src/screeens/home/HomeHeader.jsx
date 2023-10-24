import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";


const HomeHeader = () => {
  return (
    <View>
      {/* Score */}
      <View style={styles.header}>
        <View style={{ flex: 1 }} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={{
              uri: "https://tinyurl.com/yosvk8gs",
            }}
            style={styles.logo}
          />
        </View>
        {/* Cart */}
        <View style={{ flex: 1 }}>
          <Text>asdsa</Text>
        </View>
      </View>
      {/* Logo */}
      <View style={styles.center}>
        <LottieView
          source={require("../../../assets/lottiefiles/Animation - 1697976498012.json")}
          autoPlay
          loop
        />
        <Text style={{ fontSize: 30 }}>{}</Text>
      </View>
    </View>
  )
}


export default HomeHeader

const styles = StyleSheet.create({
    header: {
      marginTop:2,
      height: 100,
      width: "100%",
      flexDirection: "row",
    },
    logo: {
      width: 80,
      height: 80,
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
    },
  });