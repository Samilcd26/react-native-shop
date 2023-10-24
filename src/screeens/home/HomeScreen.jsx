import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import HomeHeader from "./HomeHeader";
import HomeCategories from "./HomeCategories";
import HomeBody from "./HomeBody";


const HomeScreen = () => {
  return (
    <SafeAreaView style={{marginHorizontal:5}}>
      {/* Header */}
      <HomeHeader/>
      <HomeCategories/>
      <HomeBody  />
    
      {/*  */}
    </SafeAreaView>
  );
};


export default HomeScreen;
