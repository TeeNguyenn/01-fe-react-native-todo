import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { globalStyles, OPENSAN_REGULAR } from '../../utils/const'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import starIcon from '../../assets/images/star.png';

const styles = StyleSheet.create({
  about: {
    fontSize: 30,
    padding: 10,
    color: '#fff'
}
})



const DetailScreen = () => {

  const navigation: NavigationProp<StackParamList> = useNavigation();

  const route: RouteProp<StackParamList, 'review-detail'> = useRoute();

  
  return (
    <ImageBackground source={require('../../assets/images/react-native.png')} style={{flex: 1}}>
      <Text style={[styles.about, globalStyles.globalFont]}>Id: {route.params?.id}</Text>
      <Text style={[styles.about, globalStyles.globalFont]}>Title: {route.params?.title}</Text>
      <Text style={[styles.about, globalStyles.globalFont]}>Rating: {route.params?.star}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Image source={starIcon} style={{height: 50, width: 50}}/>
        <Image source={require('../../assets/images/star.png')} style={{height: 50, width: 50}}/>
        <Image source={require('../../assets/images/star.png')} style={{height: 50, width: 50}}/>
        <Image source={require('../../assets/images/star.png')} style={{height: 50, width: 50}}/>
        <Image source={require('../../assets/images/star.png')} style={{height: 50, width: 50}}/>
      </View>
    </ImageBackground>
  )
}

export default DetailScreen