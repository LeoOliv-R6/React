import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import getImage from './utils/ImagensForWeather'

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <ImageBackground
          source={getImage('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <Text style={[styles.largeText, styles.textStyle]}>San Francisco </Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
          <TextInput
            style={styles.input.textStyle}
            placeholder="Search any city"
            placeholderTextColor="white"
          />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  largeText: {
    fontSize: 40
  },
  smallText: {
    fontSize: 22
  },
  textStyle: {
    textAlign: 'center',
    color: 'white'
  },
  input: {
    backgroundColor: '#666',
    color: 'white',
    fontSize: 30,
    width: 300,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  }
})