import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import users from '../constants/users.json';

const ContactList = () => {
  const fiveUsers = users.slice(0, 5);
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {fiveUsers.map(item => {
          return (
            <View key={item.id} style={styles.userCard}>
              <Image
                source={{
                  uri: 'https://picsum.photos/200/300',
                }}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.language}>{item.language}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
    backgroundColor: '#fffffe',
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    padding: 8,
    backgroundColor: '#0f0e17',
    borderRadius: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fffffe',
  },
  language: {
    color: '#a7a9be',
  },
});
