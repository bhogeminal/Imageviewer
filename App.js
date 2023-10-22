import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import ImageList from './screen/ImageList';
const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageList/>
    </SafeAreaView>
  );
};

export default App;
