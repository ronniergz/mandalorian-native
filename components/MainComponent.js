import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './HomeComponent';
import Episodes from './EpisodesComponent';
import Characters from './CharactersComponent';
import Puzzle from './PuzzleComponent';




const BottomTab = createBottomTabNavigator(
  {
    Home: { screen: Home},
    EpisodeGuide: { screen: Episodes},
    CharacterGuide: { screen: Characters},
    Puzzle: { screen: Puzzle}
  },
  {
    initialRouteName: 'Home'
  }
);

class Main extends Component {

  render() {
    return(
      <BottomTab />
    );
  }
}

export default Main;

