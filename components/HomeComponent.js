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
            <View style={{ flexDirection: 'column', height: 200, padding: 10}}>
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
            <Button 
              title="Episodes"
              onPress={() => navigate('EpisodeGuide')} 
            />
          </ScrollView>
          
        );
    }
}

export default Home;