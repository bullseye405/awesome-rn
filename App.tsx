/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },

  blackText: {
    color: '#000',
  },
});

export default App;
