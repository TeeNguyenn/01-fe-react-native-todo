import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface IReview {
  id: number;
  title: string;
  star: number;
}

const styles = StyleSheet.create({
  reviewItem: {
    padding: 10,
    backgroundColor: '#ddd',
    margin: 10,
  }
})

const HomeScreen = (props: any) => {
  
  const navigation: NavigationProp<StackParamList> = useNavigation();

  const [reviews, setReviews] = useState<IReview[]>([
    {
      id: 1, title: 'React Native', star: 5
    },
    {
      id: 2, title: 'Learn English', star: 4
    }
  ]);

  return (
    <View>
      <Text style={{fontSize: 30}}>Review list: </Text>

      <View>
        <FlatList data={reviews} keyExtractor={item => item.id +''} renderItem={({item}) => 
          <TouchableOpacity onPress={() => navigation.navigate('review-detail', item)}>
            <View style={styles.reviewItem}>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        }/>
      </View>

    </View>
  )
}

export default HomeScreen