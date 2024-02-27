import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TapItems = ['Tap', 'Me', 'To', 'Scroll', 'To', 'The', 'End'];
export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        {TapItems.map((item, index) => (
          <View style={[styles.card, styles.elevated]} key={item + index}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 8,
    color: '#000000',
  },
  elevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
