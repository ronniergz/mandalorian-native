import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <Text> Home Page </Text>
            <Button 
              title="Episodes"
              onPress={() => navigate('Episodes')} 
            />
          </View>
          
        );
    }
}

export default Home;