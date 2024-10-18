import { StatusBar } from 'expo-status-bar';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
    const [students, setStudents] = useState([
        { id: 1, name: 'Tee', age: 21 },
        { id: 2, name: 'Tee1', age: 21 },
        { id: 3, name: 'Tee2', age: 21 },
        { id: 4, name: 'Tee3', age: 21 },
        { id: 5, name: 'Tee4', age: 21 },
        { id: 6, name: 'Tee5', age: 21 },
        { id: 7, name: 'Tee6', age: 21 },
        { id: 8, name: 'Tee7', age: 21 },
        { id: 9, name: 'Tee8', age: 21 },
        { id: 10, name: 'Tee9', age: 21 },
        { id: 11, name: 'Tee10', age: 21 },
        { id: 12, name: 'Tee11', age: 21 },
    ]);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Hello world</Text>
            <ScrollView>
                {students.map((item) => (
                    <Text
                        key={item.id}
                        style={{
                            color: 'white',
                            fontSize: 20,
                            padding: 20,
                            backgroundColor: 'green',
                            marginBottom: 20,
                        }}
                    >
                        {item.name}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    text: { color: 'green', fontSize: 30 },
});
