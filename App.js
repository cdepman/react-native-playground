import React from 'react';
import {
  ART,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
} from 'react-native';
import _ from 'lodash';

import Circle from './components/circle';

const myColors = [
  'white',
  'red',
  'green',
  'purple',
  'yellow',
  'pink',
  'blue',
]

var remainingColors = [ ...myColors ];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: getColor()
    }
  }
  render() {
    const { container } = styles;
    const combineViewStyles = StyleSheet.flatten([container, this.state])
    const onHelloButtonPress = (e) => {
      this.setState({
        backgroundColor: getColor()
      })
    }
    return (
      <View style={ combineViewStyles }>
        <TouchableOpacity onPress={ onHelloButtonPress } style={ styles.basicInfoButton } >
          <Text style={ styles.submitText }>Press Me!</Text>
        </TouchableOpacity>
        <Slider 
          style={ styles.slider }
          onValueChange={ onHelloButtonPress }
          thumbImage={ require('./assets/honeybadger.png') }
        />
      </View>
    );
  }
}

const getColor = () => {
  if (remainingColors.length === 0) { remainingColors = [ ...myColors ] }
  const index = Math.round(Math.random()*(remainingColors.length - 1));
  const color = remainingColors[index];
  remainingColors[index] = null;
  remainingColors = _.compact(remainingColors);
  return color;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: 200,
    marginTop: 40,
  },
  basicInfoButton: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
  },
});
