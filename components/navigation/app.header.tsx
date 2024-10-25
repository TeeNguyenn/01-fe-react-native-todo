import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from '../../utils/const';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#ccc',
    },
    headerText: {
       flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    }
})

const AppHeader = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}> 
            <MaterialIcons name="menu" size={24} color="black"  onPress={() => navigation.openDrawer()}/>
            <Text style={[styles.headerText, globalStyles.globalFont]}>Tee App</Text>
        </View>
    );
};

export default AppHeader;