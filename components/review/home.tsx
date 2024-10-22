import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = (props: any) => {

  const {navigation} = props;

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='view detail' onPress={() => navigation.navigate('review-detail')}></Button>
    </View>
  )
}

export default HomeScreen