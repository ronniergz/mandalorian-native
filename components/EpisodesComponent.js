import React, { Component } from 'react';
import { Text, Button, Image, View, FlatList } from 'react-native';
import { EPISODES } from '../shared/Episodes.js';
import { Card } from 'react-native-elements';




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
        <Card
          title={item.name}
          image={{uri: '.' + item.imagescn}}>
          <Text> {item.sum_short} </Text>
          <Text> {item.director} </Text>
          <Text> {item.writer} </Text>
        </Card>
      );
    };
    


    return (
        <View>
          <View style={{ height: 25 }} />
          <View style ={{ justifyContent: 'center', flexDirection: 'column' }} >
            <Text style={{ textAlign: 'center', fontSize: 25 }}> Season 1 </Text>
          </View>

          <Text>.{this.state.episodes[3].imagescn}</Text>
          <Image source={`.`+this.state.episodes[3].imagescn}></Image>
          <FlatList
            data={this.state.episodes}
            renderItem={renderEpisode}
            keyExtractor={episode => episode.id.toString()}
          />        
        </View>
        
      );
  }
}

export default Episodes;