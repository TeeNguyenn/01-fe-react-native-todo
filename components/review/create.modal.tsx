import React from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

interface CreateModalProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
}

const CreateModal = (props: CreateModalProps) => {

    const {modalVisible, setModalVisible} = props;

    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          >
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={{fontSize: 25, fontWeight: '500'}}>Create a review</Text>
                <AntDesign name="close" size={24} color="black" onPress={() => setModalVisible(false)} />
            </View>
            {/* Body */}
            <View>
                <View style={styles.groupInput}>
                    <Text style={styles.text}>Content</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.groupInput}>
                    <Text style={styles.text}>Rating</Text>
                    <TextInput style={styles.input} keyboardType='numeric'/>
                </View>
            </View>
            {/* Footer */}
            <View style={{marginTop: 20}}>
                <Button title='Add'></Button>
            </View>

            
          </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 10,
    },

    groupInput: {
        marginVertical: 10
    },

    text: {
        fontSize: 20
    }, 
    input: {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
    }
  });

export default CreateModal;