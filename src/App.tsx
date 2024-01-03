/* eslint-disable prettier/prettier */
import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Body from './components/Body';

const App = () => {
  return (
<SafeAreaView>
  <ScrollView>
    <Body />
  </ScrollView>
</SafeAreaView>
  )
}

export default App;