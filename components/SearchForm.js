import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function SearchForm() {
  const [searchdata, setSearch] = useState(''); // initial search value
  const [urlData, setUrlData] = useState([]);

  // Fetch data based on search input
  const fetchData = async () => {
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': '9e24c7fc',
        'x-app-key': 'faf0894b45b160ca1a124fc5cda0af92',
      },
      body: JSON.stringify({
        "query": searchdata
      })
    };

    try {
      const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', reqData);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonDt = await response.json();
      setUrlData(jsonDt.foods);
    } catch (err) {
      console.error('Fetch error: ', err);
    }
  };

  // Update search input value
  const handleSearch = (text) => { 
    setSearch(text); 
  };

  // Trigger search on button press
  const onSearchPress = () => {
    if (searchdata.trim() !== '') {
      fetchData();
    } else {
      console.log('Search input is empty');
    }
  };

  // Render each food item in the list
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{`
Food Name: ${item.food_name}
Quantity: ${item.tags.quantity} g

Food Facts:
        - Serving Size: ${item.serving_unit}
        - Calories: ${item.nf_calories}
        - Protein: ${item.nf_protein}
        - Carbohydrates: ${item.nf_total_carbohydrate}
        - Fiber: ${item.nf_dietary_fiber}
        - Sugar: ${item.nf_sugars}
        - Sodium: ${item.nf_sodium}
        - Potassium: ${item.nf_potassium}
        - Cholesterol: ${item.nf_cholesterol}
        - Total fat: ${item.nf_total_fat}

Alternative Measures:
      ${item.alt_measures.map(alt => (
         `- ${alt.qty} ${alt.measure} (${alt.serving_weight} g)\n\t`
      )).join('')}
      `}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchdata}
        lightTheme
        round
      />
      <Button title="Search" onPress={onSearchPress} style={styles.searchButton}/>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 15
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 15 }}>Searched Food: {searchdata}</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 5
        }}
      />
      <FlatList
        data={urlData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Use index as key
        style={styles.listings}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({ 
  listings: {
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row', 
    marginVertical: 8,
    marginLeft: 10,
  },
  item: {
    fontSize: 18,
  },
  searchButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
  }
});
