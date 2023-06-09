import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const AddItem = ({ title ,addItem}) => {
const[text,setText] = useState('');
const onchange = (textValue) => setText(textValue);
    return (
        <View>
            <TextInput placeholder="Add Item.." style={styles.input} 
            onChangeText={onchange}/>
            <TouchableOpacity style={styles.btn} onPress={()=> addItem(text)
            }>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} />
                    AddItem
                </Text>
            </TouchableOpacity>


        </View>
    );

};



const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 10,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#576CBC',
        padding: 10,
        margin: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },

});

export default AddItem;