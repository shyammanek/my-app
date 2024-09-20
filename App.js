import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import * as Linking from 'expo-linking';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const prefix = Linking.createURL('/');

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'home',
        Details: 'details',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Appearance,
//   useColorScheme,
//   Dimensions,
// } from "react-native";
// import Carousel from "react-native-snap-carousel";
// import CarouselCards from "./src/Carousel/CarouselCards";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <CarouselCards />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

