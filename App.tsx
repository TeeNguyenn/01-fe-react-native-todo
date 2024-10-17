import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: '600', fontSize: 30 }}>
                count = {count}
            </Text>
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
