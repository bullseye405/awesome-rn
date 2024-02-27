import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ActionCard from './components/ActionCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import FlatCards from './components/FlatCards';
import ContactList from './components/ContactList';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <ContactList />
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
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
