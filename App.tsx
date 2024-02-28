import React, {JSX, PropsWithChildren, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import Cards from './components/Cards';
// import PasswordGenerator from './components/PasswordGenerator';
// import BgChanger from './components/BgChanger/BgChanger';
import Five from './assets/Five.png';
import Four from './assets/Four.png';
import One from './assets/One.png';
import Six from './assets/Six.png';
import Three from './assets/Three.png';
import Two from './assets/Two.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(One);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(One);
        break;
      case 2:
        setDiceImage(Two);
        break;

      case 3:
        setDiceImage(Three);
        break;

      case 4:
        setDiceImage(Four);
        break;

      case 5:
        setDiceImage(Five);
        break;

      case 6:
        setDiceImage(Six);
        break;

      default:
        setDiceImage(One);
    }
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
