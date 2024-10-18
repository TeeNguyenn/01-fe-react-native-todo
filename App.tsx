import { StatusBar } from 'expo-status-bar';
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, { useState } from 'react';

interface ITodo {
    id: number;
    name: string;
}

export default function App() {
    const [todo, setTodo] = useState('');

    const [todoList, setTodoList] = useState<ITodo[]>([]);

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleTodo = () => {
        if (!todo.trim()) {
            setTodo("");
            return;
        }
        setTodoList([
            ...todoList,
            { id: randomInteger(2, 100000), name: todo },
        ]);
        setTodo('');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Todo App</Text>
            {/* Form */}
            <View style={styles.body}>
                <TextInput
                value={todo}
                    style={styles.todoInput}
                    onChangeText={(value) => setTodo(value)}
                ></TextInput>
                <Button title="Add todo" onPress={handleTodo}></Button>
            </View>
            {/* List */}
            <View style={styles.body}>
                <FlatList
                    data={todoList}
                    renderItem={({ item }) => (
                        <Text style={styles.todoItem}>{item.name}</Text>
                    )}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    header: {
        fontSize: 30,
        backgroundColor: 'green',
        padding: 20,
        textAlign: 'center',
        color: 'white',
    },
    todoInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        padding: 10,
        marginBottom: 30,
        fontSize: 20,
    },
    body: {
        paddingHorizontal: 30,
    },
    todoItem: {
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'orange',
        borderStyle: 'dashed',
        marginTop: 20,
    },
});
