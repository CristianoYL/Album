import React from 'react';
import { View } from 'react-native';
import { Header, AlbumList } from './component/common';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
