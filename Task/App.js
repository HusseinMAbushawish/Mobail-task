import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../Task/components/Header';
import ListItem from '../Task/components/ListItem';
import AddItem from './components/AddItem';
import {  uuid } from 'uuidv4';


const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Miiilk' },
    { id: 2, text: 'Eggs' },
    { id: 3, text: 'Bread' },
    { id: 4, text: 'Juice' },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    setItems(prevItems => {
      return [{ id: 8, text }, ...prevItems];
    });
  }


  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />)}
      />
      <Text style={styles.name}>Hussein M Abushawish
      120190525</Text>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
  },
name:{
fontSize:10,
color: '#146C94',

},
})


export default App;