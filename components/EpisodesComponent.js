import React, { Component } from 'react';
import { Text, Image, View, FlatList, StyleSheet } from 'react-native';
import { EPISODES } from '../shared/Episodes.js';
import { Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl.js';

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: EPISODES,
    };
  }
  
  render() {
    
    const renderEpisode = ({item}) => {
      return (

      <View style={styles.episodeListItem}>
        <View style={{ width: 100, overflow: 'hidden' }} >
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
        </View>        
      </View>  
      );
    };

    return (
        <View>
          <View style={{ height: 25 }} />
          <View style ={{ justifyContent: 'center', flexDirection: 'column' }} >
            <Text style={{ textAlign: 'center', fontSize: 25 }}> Season 1 </Text>
          </View>
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
  height: 150,
  margin: 10,
  borderColor: "black",
  borderWidth: 1,
  borderRadius: 10
}


});

export default Episodes;