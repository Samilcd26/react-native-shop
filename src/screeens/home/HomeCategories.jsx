import { ScrollView, StyleSheet, Text, View,Image } from "react-native";
import React from "react";




const HomeCategories = () => {
  return (
    <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          <View style={styles.box}>
          <Image  source={require('../../../assets/icons/category/pizza.png')}  />
            <Text style={{fontWeight:'500', color:'#fff' }} >Pizza</Text>
          </View>
        </ScrollView>
      </View>
  );
};

export default HomeCategories;

const styles = StyleSheet.create({
  container:{
    marginLeft:10
  },
  row: {
    flexDirection: "column",
  },
  icon:{
    width:10,
    height:10,

  },
  box: {
    width: 60,
    height: 90,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius: 10,
    backgroundColor: "red",
    
    marginRight: 2,
    
  },
});
