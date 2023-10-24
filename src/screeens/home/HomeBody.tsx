import { View, Text, ScrollView, StyleSheet,SafeAreaView, FlatList, Dimensions, Image, TouchableWithoutFeedback } from "react-native";
import React, { useEffect } from "react";
import {useDispatch} from 'react-redux'





const Product = ({ title }: ProductSchema) => (
  <View style={styles.listContainer} >
    <View style={styles.imageContainer}>
      <Image source={{ uri: 'https://picsum.photos/200/200' }} style={styles.image} />
    </View>
    <Text style={styles.nameText}>{title}</Text>
    <Text style={styles.priceText}>$100</Text>
    <TouchableWithoutFeedback >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Buy now</Text>
      </View>
    </TouchableWithoutFeedback>

  </View>
);
const HomeBody = () => {
  const dispatch = useDispatch()
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <Product title={item.title} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#F7F9FD'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    borderRadius: 20,
    aspectRatio: 1,
  },
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10
  },
  button: {
    backgroundColor: '#62513e',
    padding: 10,
    margin: 15,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});













const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Itemss',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Itemss',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Itemss',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Itemss',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export default HomeBody;
