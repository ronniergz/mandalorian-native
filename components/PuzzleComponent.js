import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

class Puzzle extends Component {

    static navigationOptions = {
        title: 'Puzzle'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <View style={{ height: 25 }} />
            <Text> Puzzle Page </Text>
            <Text>
              This is where the Puzzle will go
            </Text>
          </View>
          
        );
    }
}

export default Puzzle;