import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontWeight: '600', fontSize: 30 }}>
                    Name: {name}
                </Text>
                <TextInput
                    autoCapitalize="sentences"
                    style={{
                        borderColor: 'green',
                        borderWidth: 1,
                        padding: 5,
                        width: 200,
                    }}
                    onChangeText={(value) => setName(value)}
                ></TextInput>
            </View>
            <View>
                <Text style={{ fontWeight: '600', fontSize: 30 }}>
                    Age: {age}
                </Text>
                <TextInput
                    style={{
                        borderColor: 'green',
                        borderWidth: 1,
                        padding: 5,
                        width: 200,
                    }}
                    onChangeText={(value) => setAge(value)}
                    keyboardType="numeric"
                    maxLength={2}
                ></TextInput>
            </View>
            <View>
                <Button
                    title="Increase"
                    onPress={() => setCount(count + 1)}
                ></Button>
            </View>
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
