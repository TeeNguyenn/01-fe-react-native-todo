import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello world!!!!</Text>
            <Text style={styles.text}>Nguyen Minh Tien</Text>
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
    text: { color: 'green', fontSize: 30 },
});
