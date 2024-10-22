import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles, OPENSAN_REGULAR } from '../../utils/const'
import { NavigationProp, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  about: {
    fontSize: 30,
}
})



const DetailScreen = () => {

  const navigation: NavigationProp<StackParamList> = useNavigation();
  
  return (
    <View><Text style={[styles.about, globalStyles.globalFont]}>Detail Screen google</Text>
      <Button title='Go home' onPress={() => navigation.navigate('home')}></Button>
    </View>
  )
}

export default DetailScreen