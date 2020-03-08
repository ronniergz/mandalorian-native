import React, { Component } from 'react';
import { Text, Image, ScrollView, View, StyleSheet } from 'react-native';
import { EPISODES } from '../shared/Episodes.js';
import { baseUrl } from '../shared/baseUrl.js'

class EpisodeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: EPISODES,
    };
  }
  static navigationOptions = {
    title: 'Episode Guide'
  };

  render() {
    const episodeId = this.props.navigation.getParam('episodeId');
    const episode = this.state.episodes.filter(episode => episode.id === episodeId)[0];
    return (
      <ScrollView>
        <Text
          style={{ 
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold', 
            paddingTop: 10}}
          >
          {episode.name}
        </Text>
          <Image 
          source={{uri: baseUrl + episode.image}} 
          style={{
            flex: 1,
            resizeMode: 'contain',
            width: undefined,
            height: 300
          }}/>
        <Text style={{ fontSize: 15, paddingLeft: 10, paddingRight: 10}}> {episode.sum_long}</Text>
      </ScrollView>
    );
  }

}

export default EpisodeInfo;