import React, { Component } from 'react';
import { Text, Image, View, FlatList, StyleSheet } from 'react-native';
import { CHARACTERS } from '../shared/Characters.js';
import { baseUrl } from '../shared/baseUrl.js';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: CHARACTERS,
    };
  }
  
  render() {
    const renderCharacter = ({item}) => {
      return (
      <View style={styles.characterListItem}>
        <View style={{ height: 40}} >
          <Text style={styles.characterHeader}> {item.name} </Text>
        </View>
        <View style={{ height: 250, paddingLeft: 5, paddingRight: 5 }} >
          <Text> {item.sum} </Text>
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          <Image
            source={{uri: baseUrl + item.imagescn}}
            style={{ flex: 1, width: undefined, height: 150}}
            resizeMode='contain'
          />
          <Image
            source={{uri: baseUrl + item.imagescn2}}
            style={{ flex: 1, width: undefined, height: 150}}
            resizeMode='contain'
            />
        </View>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <Image
            source={{uri: baseUrl + item.imagescn3}}
            style={{ flex: 1, width: undefined, height: 150}}
            resizeMode='contain'
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: "column",
          width: undefined,
          padding: 5,
          textAlign: 'left'
          }}>
          <Text>Species:  {item.Species} </Text>
          <Text>Gender:  {item.gender} </Text>
          <Text>Eye Color:  {item.eye} </Text>
          <Text>Skin Color:  {item.skin} </Text>
          <Text>Home World:  {item.home} </Text>
        </View>        
      </View>  
      );
    };

    return (
        <View>
          <View style={{ marginTop:25}} />
          <FlatList
            data={this.state.characters}
            renderItem={renderCharacter}
            keyExtractor={character => character.id.toString()}
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
  characterListItem: {
    flex: 1,
    flexDirection: "column",
    height: undefined,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  characterHeader: {
    textAlign: 'center',
    fontFamily: 'normal',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#c1cefd',
  }

});

export default Characters;