import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash';

const allColors = [
  'white',
  'red',
  'green',
  'purple',
  'yellow',
  'pink'
]

var remainingColors = [];

export default class App extends React.Component {
  constructor(props) {
    super(props)
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
      <TouchableOpacity
        onPress={ onHelloButtonPress }
        title="Hello World?"
        color="#841584"
        style={ styles.basicInfoButton }
        accessibilityLabel="Explore this purple button"
      >
        <Text style={ styles.submitText }>Press Me!</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const getColor = () => {
  if (remainingColors.length === 0) { remainingColors = [ ...allColors ] }
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
  }
});
