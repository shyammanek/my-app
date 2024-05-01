import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Appearance, useColorScheme, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCards from './src/Carousel/CarouselCards';




export default function App() {

  

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      {/* <CarouselCards /> */}
      <CarouselCards />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
