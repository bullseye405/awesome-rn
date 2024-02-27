import ActionCard from './ActionCard';
import ElevatedCards from './ElevatedCards';
import FancyCard from './FancyCard';
import FlatCards from './FlatCards';

import React from 'react';
import {View} from 'react-native';

const Cards = () => {
  return (
    <View>
      <ActionCard />
      <ElevatedCards />
      <FancyCard />
      <FlatCards />
    </View>
  );
};

export default Cards;

export {ActionCard, ElevatedCards, FancyCard, FlatCards};
