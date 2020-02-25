import React, { Component } from 'react';
import { Image, Text, Button, View, ScrollView } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
          <ScrollView>
            <View style={{ height: 15 }} />
            <View style={{ flexDirection: 'column', height: 125 }}>
              <Image 
              source={require('../assets/images/logo.jpg')}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain'
              }} 
              />
            </View>
            <View style={{ flexDirection: 'column', height: 300, padding: 0}}>
              <Image 
              source={require('../assets/images/homeBackground.jpg')}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain'
              }} 
              />
            </View>
          </ScrollView>
          
        );
    }
}

export default Home;