import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

class Characters extends Component {

    static navigationOptions = {
        title: 'Characters'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <View style={{ height: 25 }} />
            <Text> Characters Page </Text>
            <Text>
              This is where the Characters will go
            </Text>
          </View>
          
        );
    }
}

export default Characters;