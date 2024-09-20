import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
  

const StackNavigation = () => {
  return (
    <View>
      <Text>StackNavigation</Text>
    </View>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})