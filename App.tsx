import { StatusBar } from 'expo-status-bar';
import {
    Alert,
    Button,
    FlatList,
    Keyboard,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
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
            Alert.alert('Error!!!', 'Todo is not empty!!!', [
                
                {
                    text: 'OK',
                    onPress: () => console.log(),
                    style: 'default'
                },
            ])
            return;
        }
        setTodoList([
            ...todoList,
            { id: randomInteger(2, 100000), name: todo },
        ]);
        setTodo('');
    };

    const deleteTodo = (id: number) => {
        const newTodoList = todoList.filter(item => item.id !== id);
        setTodoList(newTodoList);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
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
                        <Pressable onPress={() => deleteTodo(item.id)} style={({ pressed }) =>  ({opacity:pressed ? 0.5 : 1})}>
                            <Text style={styles.todoItem}>{item.name}</Text>
                        </Pressable>
                    )}
                ></FlatList>
            </View>
        </View>
        </TouchableWithoutFeedback>
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
