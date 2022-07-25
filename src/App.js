import React from 'react';
import {View, Text, StyleSheet, FlatList,TextInput} from 'react-native';
import Product from './components/Product';
import products_data from './components/products_data.json';

function App() {
  const renderProducts = ({item}) => <Product products={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header_title}>PATİKASTORE</Text>
    <Search></Search>
      <FlatList
        numColumns={2}
        data={products_data}
        renderItem={renderProducts}
      />
    </View>
  );
};
function Search() {
  return (
    <View>
      <View>
        <TextInput
         style={styles.input} 
         placeholder="Ara..."
       />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E1E1',
  },
  header_title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#800080',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#eceff1',
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
