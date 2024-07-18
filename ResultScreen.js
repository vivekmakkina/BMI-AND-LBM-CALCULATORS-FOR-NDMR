import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import Slider from '@react-native-community/slider';

const ResultScreen = ({ route }) => {
  const { bmi, bmiLevel } = route.params;

  // Determine the color based on BMI value
  const getTrackTintColor = () => {
    if (bmi < 18.5) {
      return 'blue'; // Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'green'; // Normal
    } else if (bmi >= 25 && bmi < 30) {
      return 'orange'; // Overweight
    } else {
      return 'red'; // Obesity
    }
  };

  const getInnerContainerBackgroundColor = () => {
    if (bmi < 18.5) {
      return 'blue'; // Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'green'; // Normal
    } else if (bmi >= 25 && bmi < 30) {
      return 'orange'; // Overweight
    } else {
      return 'red'; // Obesity
    }
  };

  const handleContinue = () => {
    // Add logic for what happens when the continue button is pressed
    console.log("Continue button pressed");
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider} // Adjusted style for the slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor={getTrackTintColor()} // Set the color dynamically
        maximumTrackTintColor="black"
        thumbTintColor="black"
        trackStyle={{ height: 20, borderRadius: 5 }}
        customThumb={<View style={styles.thumb} />}
        customMinimumTrack={<View style={[styles.track, { backgroundColor: 'blue' }]} />}
        customMaximumTrack={
          <View style={[styles.track, { backgroundColor: 'red' }]} />
        }
      />
      <View style={[styles.innerContainer, { backgroundColor: getInnerContainerBackgroundColor() }]}>
        <Text style={styles.resultText}>{bmi}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.column}>
          <Text style={styles.heading}>Category</Text>
          <Text style={styles.text}>{bmiLevel}</Text> 
        </View>
        <View style={styles.column}>
          <Text style={styles.heading}>Difference</Text>
        </View>
      </View>
      {/* Adjusted container for level names */}
      <View style={styles.levelContainer}>
        <Text style={styles.level}>• UnderWeight</Text>
        <Text style={styles.level}>• NormalWeight</Text>
        <Text style={styles.level}>• OverWeight</Text>
        <Text style={styles.level}>• Obesity</Text>
      </View>
      {/* Continue button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '80%',
    marginBottom: 5,
  },
  innerContainer: {
    padding: 110,
    borderRadius: 2,
  },
  resultText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  track: {
    height: 20,
    borderRadius: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
    borderColor: 'black', // Border color
    borderWidth: 0.5,
    paddingVertical: 20, // Increased height
    width: '85%',
  },
  column: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  text: {
    fontSize: 16,
  },
  levelContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderColor: 'black', // Border color
    borderWidth: 0.5,
    width: '85%',
    borderColor: 'black', // Border color
    borderWidth: 0.5,  // Adjusted width
  },
  level: {
    fontSize: 18,
    marginBottom: 10, // Add marginBottom for space between level texts
    textAlign: 'left', // Align text to the left
  },
  continueButton: {
      marginTop: 8, // Add margin top to create space between the content and button
      backgroundColor: '#213066',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ResultScreen;