import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './HomeComponent';
import Episodes from './EpisodesComponent';


const Stack = createStackNavigator(
  {
    Home: { screen: Home},
    EpisodeGuide: { screen: Episodes}
  },
  {
    initialRouteName: 'EpisodeGuide'
  }
);

class Main extends Component {

  render() {
    return(
      <View>
        <Stack />
      </View>
    );
  }
}

export default Main; 