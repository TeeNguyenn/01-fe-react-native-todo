import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles, OPENSAN_REGULAR } from '../../utils/const'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
  about: {
    fontSize: 30,
    padding: 10
}
})



const DetailScreen = () => {

  const navigation: NavigationProp<StackParamList> = useNavigation();

  const route: RouteProp<StackParamList, 'review-detail'> = useRoute();

  
  return (
    <View>
      <Text style={[styles.about, globalStyles.globalFont]}>Id: {route.params?.id}</Text>
      <Text style={[styles.about, globalStyles.globalFont]}>Title: {route.params?.title}</Text>
      <Text style={[styles.about, globalStyles.globalFont]}>Rating: {route.params?.star}</Text>
      <Button title='Go home' onPress={() => navigation.navigate('home')}></Button>
    </View>
  )
}

export default DetailScreen