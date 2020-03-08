import React, { Component } from 'react';
import { Image, Text, Button, View } from 'react-native';

class Puzzle extends Component {


    render() {
        return (
          <View>
            <View style={{ height: 24 }} />
            <Text style={{ 
              textAlign: 'center', 
              fontSize: 25, 
              fontWeight: 'bold',
              backgroundColor: '#c1cefd'}}> Slider Puzzle </Text>
            <View style={{ height: 450}}>
              <Image 
                source={require('../assets/images/slider-image-1-md.jpg')}
                style={{ width: 350, height: 350, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button title="reset"></Button>
              <Button title='shuffle'></Button>
            </View>
          </View>
          
        );
    }
}

export default Puzzle;