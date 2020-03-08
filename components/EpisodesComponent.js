import React, { Component } from 'react';
import { Text, Image, Button, ScrollView, View, FlatList, StyleSheet } from 'react-native';
import { EPISODES } from '../shared/Episodes.js';
import { baseUrl } from '../shared/baseUrl.js';

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: EPISODES,
    };
  }
  
  static navigationOptions = {
    title: "Episode Guide"
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderEpisode = ({item}) => {
      return (
      <View style={styles.episodeListItem}>
        <View style={{ width: 118 }} >
          <Image
            source={{uri: baseUrl + item.imagescn}}
            style={{ flex: 1, width: undefined, height: undefined}}
            resizeMode='contain'
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: "column",
          width: undefined,
          padding: 5
          }}>
          <Text style={{textAlign:'center', fontWeight: 'bold'}}> {item.name} </Text>
          <Text> {item.sum_short} </Text>
          <Text style={{paddingTop: 10}}> Director: {item.director} </Text>
          <Text> Writer: {item.writer} </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button title="More Info" onPress={() => navigate('EpisodeInfo', { episodeId: item.id })} ></Button>
          </View>  
        </View>        
      </View>  
      );
    };

    return (
        <View>
          <FlatList
            data={this.state.episodes}
            renderItem={renderEpisode}
            keyExtractor={episode => episode.id.toString()}
            style={{
              marginLeft: 10,
              marginRight: 10
            }}
          />        
        </View>
        
      );
  }
}

const styles = StyleSheet.create({

episodeListItem: {
  flex: 1,
  flexDirection: "row",
  height: 175,
  margin: 10,
  borderColor: "gray",
  borderWidth: 1,
  borderRadius: 10,
  overflow: 'hidden'
}


});

export default Episodes;