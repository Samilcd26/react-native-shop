import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeBody from './src/screeens/home/HomeBody';
import HomeScreen from './src/screeens/home/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store} >
    <HomeScreen/>
    </Provider>
  );
}


