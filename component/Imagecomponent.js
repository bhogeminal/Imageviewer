// components/ImageComponent.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Imagecomponent = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default Imagecomponent;
