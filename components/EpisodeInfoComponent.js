import React, { Component } from 'react';
import { Text, Image, View, FlatList, StyleSheet } from 'react-native';

class EpisodeInfo extends Component {

  static navigationOptions = {
    title: 'EpisodeInfo'
  };

  render() {
    const episodeId = this.props.navigation.getParam('episodeId');
    const episode = this.props.episodes.filter(episode => episode.id === episodeId)[0];
    return (
      <ScrollView>
        <Text>{episode.name}</Text>
      </ScrollView>
    );
  }

}

export default EpisodeInfo;