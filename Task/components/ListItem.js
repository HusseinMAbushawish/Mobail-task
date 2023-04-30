import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/dist/FontAwesome";

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={style.listItem}>
            <View style={style.listItemView}>
                <Text style={style.listItemText}>{item.text}</Text>
                <Icon name="remove" size={20} color="firebrick"
                    onpress={() => deleteItem(item.id)} />

            </View>
        </TouchableOpacity>
    );

};


const style = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#2C3333',
        
    },

    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
        color:'#03001C',
    },

});

export default ListItem;