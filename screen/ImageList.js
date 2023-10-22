import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'TdMaO7Dv0LoL01ySN9EkLwzY6GHixkHMUTiMpPiWmIAUtu2VMdDWsvm0';

const ImageList = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(
          query
        )}&per_page=10&page=${currentPage}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setImages([...images, ...response.data.photos]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  
  const handleSearch = () => {
    setCurrentPage(1);
    setImages([]); // Clear existing images when a new search is performed
    fetchImages();
  };

  

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.src.medium }} style={{ width: 400, height: 400 }} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter image type"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}:${index}`}
      // numColumns={2}
      />
       <Button
        title="Next 10 Images"
        onPress={() => {
          setCurrentPage(prevPage => prevPage + 1);
          fetchImages();
        }}
        disabled={images.length < 10} // Disable the button if there are fewer than 10 images on the current page
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ImageList;
