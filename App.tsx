import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
// import Cards from './components/Cards';
import PasswordGenerator from './components/PasswordGenerator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Cards /> */}
          <PasswordGenerator />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
