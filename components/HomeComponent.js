import React, { Component } from 'react';
import { Image, Text, Button, StyleSheet,View, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';


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
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'black',
                height: 175,
              }}>
                <Text
                  style={{ 
                    textAlign: 'center',
                    color: '#E1BE11',
                    fontWeight: 'bold',
                   }}
                >
                After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.
                </Text>
            </View>
            <View style={{ flex: 1, height: 300 }}>
              <WebView
                source={{ uri: 'https://www.youtube.com/embed/XmI7WKrAtqs?controls=0' }}
                automaticallyAdjustContentInsets={false}
              >
              </WebView>
            </View>
          </ScrollView>
          
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
drawerHeader: {
    backgroundColor: '#5637DD',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
},
drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
},
drawerImage: {
    margin: 10,
    height: 60,
    width: 60
},
stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24
}
});

export default Home;