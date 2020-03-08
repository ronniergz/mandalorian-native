import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './HomeComponent';
import Episodes from './EpisodesComponent';
import EpisodeInfo from './EpisodeInfoComponent';
import Characters from './CharactersComponent';
import Puzzle from './PuzzleComponent';
import { Icon } from  'react-native-elements';
import createStackNavigator from 'react-navigation/src/navigators/createStackNavigator';

const EpisodesNavigator = createStackNavigator(
  {
  Episodes: {screen: Episodes},
  EpisodeInfo: {screen: EpisodeInfo}
  },
  { initialRouteName: 'Episodes',
    screenOptions: {
      headerShown: false
    }
  }
); 


const BottomTab = createBottomTabNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: {
        tabBarIcon: <Icon
            name='home'
            type='font-awesome'
            color='#848484'
        />
      }
    },
    EpisodeGuide: { 
      screen: EpisodesNavigator,
      navigationOptions: {
        tabBarIcon: <Icon
            name='list-alt'
            type='font-awesome'
            color='#848484'
        />
      }
    },
    CharacterGuide: { 
      screen: Characters,
      navigationOptions: {
        tabBarIcon: <Icon
            name='address-card'
            type='font-awesome'
            color='#848484'
        />
      }
    },
    Puzzle: { 
      screen: Puzzle,
      navigationOptions: {
        tabBarIcon: <Icon
            name='puzzle-piece'
            type='font-awesome'
            color='#848484'
        />
      }
    }
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

