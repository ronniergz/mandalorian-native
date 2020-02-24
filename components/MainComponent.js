import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';
import Episodes from './EpisodesComponent';




const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home},
    EpisodeGuide: { screen: Episodes}
  },
  {
    initialRouteName: 'Home'
  }
);

class Main extends Component {

  render() {
    return(
      <Drawer />
    );
  }
}

export default Main;

