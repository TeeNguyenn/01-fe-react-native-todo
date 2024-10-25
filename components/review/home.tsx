import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppHeader from '../navigation/app.header';
import CreateModal from './create.modal';
import AntDesign from '@expo/vector-icons/AntDesign';

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

  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <View>
      <Text style={{fontSize: 30, paddingHorizontal: 10}}>Review list: </Text>
      <View style={{alignItems: 'center'}}>
        
        <AntDesign name="plussquareo" size={40} color="green" onPress={() => setModalVisible(true)}/>
      </View>
      <View>
        <FlatList data={reviews} keyExtractor={item => item.id +''} renderItem={({item}) => 
          <TouchableOpacity onPress={() => navigation.navigate('review-detail', item)}>
            <View style={styles.reviewItem}>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        }/>
      </View>
        <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  )
}

export default HomeScreen