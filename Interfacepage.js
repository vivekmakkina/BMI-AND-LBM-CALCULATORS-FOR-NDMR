import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const InterfacePage = () => {
  const navigation = useNavigation();

  const handleStartPress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Animatable.View 
        animation="fadeIn"
        duration={1500}
        style={styles.ellipse1}
      >
        <View style={styles.ellipseInside}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1JxF4uNsEYuXt4oF1-R-wqL-5-LJ0vRYg&usqp=CAU' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </Animatable.View>
      <View style={styles.ellipse2}></View>
      <View style={styles.ellipse3}></View>
      <View style={styles.ellipse4}></View>
      <View style={styles.ellipse5}></View>
      <Animatable.Text 
        animation="bounceIn"
        duration={1500}
        style={styles.welcome}
      >
        WELCOME
      </Animatable.Text>
      <Animatable.View 
        animation="pulse" 
        easing="ease-out" 
        iterationCount="infinite"
      >
        <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
          <Text style={styles.start}>START</Text>
        </TouchableOpacity>
      </Animatable.View>
      <View style={styles.ellipse6}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: width,
    height: height,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  ellipse1: {
    position: 'absolute',
    width: width * 0.65,
    height: height * 0.3,
    left: width * 0.16,
    top: height * 0.29,
    backgroundColor: '#082951',
    borderRadius: (width * 0.65) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ellipseInside: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: (width * 0.45) / 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ellipse2: {
    position: 'absolute',
    width: width * 0.65,
    height: height * 0.3,
    left: width * -0.13,
    top: height * -0.06,
    backgroundColor: '#082951',
    borderRadius: (width * 0.65) / 2,
  },
  ellipse3: {
    position: 'absolute',
    width: width * 0.3,
    height: height * 0.14,
    left: width * 0.81,
    top: height * 0.2,
    backgroundColor: '#082951',
    borderRadius: (width * 0.33) / 2,
  },
  ellipse4: {
    position: 'absolute',
    width: width * 0.6,
    height: height * 0.28,
    left: width * 0.49,
    top: height * 0.8,
    backgroundColor: '#082951',
    borderRadius: (width * 0.6) / 2,
  },
  ellipse5: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.09,
    left: width * -0.015,
    top: height * 0.74,
    backgroundColor: '#082951',
    borderRadius: (width * 0.2) / 2,
  },
  welcome: {
    position: 'absolute',
    width: width * 0.62,
    height: height * 0.065,
    left: width * 0.21,
    top: height * 0.59,
    fontSize: width * 0.12,
    lineHeight: height * 0.065,
    color: '#000000',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  startButton: {
    position: 'absolute',
    left: width * 0.35,
    top: height * 0.67,
    width: width * 0.3,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#082951',
    borderRadius: 10,
  },
  start: {
    fontSize: width * 0.06,
    lineHeight: height * 0.035,
    color: '#FFFFFF',
  },
  ellipse6: {
    position: 'absolute',
    width: width * 0.45,
    height: height * 0.2,
    left: width * 0.26,
    top: height * 0.33,
  },
});

export default InterfacePage;
