import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Calculator = () => {
  const navigation = useNavigation();

  const [unit, setUnit] = useState('kg');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(1);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [bmi, setBMI] = useState(null);
  const [bmiLevel, setBMIlevel] = useState('');

  const calculateBMI = (weightInKg, heightInMeters) => {
    return weightInKg / (heightInMeters * heightInMeters);
  };

  const calculateBMIlevel = (bmiValue, gender) => {
    if (gender === 'male') {
      if (bmiValue < 18.5) {
        return 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        return 'Normal ';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        return 'Overweight';
      } else if (bmiValue >= 30) {
        return 'Obesity';
      }
    } else if (gender === 'female') {
      if (bmiValue < 18.5) {
        return 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        return 'Normal ';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        return 'Overweight';
      } else if (bmiValue >= 30) {
        return 'Obesity';
      }
    }
  };

  const handleSubmit = () => {
    if (!gender || !age || !weight || !height) {
      alert('Please fill all fields.');
      return;
    }

    let weightInKg;
    let heightInMeters;

    // Convert weight to kg if unit is Ib
    if (unit === 'Ib') {
      weightInKg = parseFloat(weight) * 0.453592;
    } else {
      weightInKg = parseFloat(weight);
    }

    // Convert height to meters based on selected unit
    if (heightUnit === 'ft-in') {
      const [feet, inches] = height.split('.').map(parseFloat);
      heightInMeters = (feet * 0.3048) + (inches * 0.0254); // Convert feet and inches to meters
    } else {
      heightInMeters = parseFloat(height) / 100;
    }

    // Calculate BMI
    const bmiValue = calculateBMI(weightInKg, heightInMeters);
    setBMI(bmiValue.toFixed(2));

    // Determine BMI level
    const bmiLevel = calculateBMIlevel(bmiValue, gender);
    setBMIlevel(bmiLevel);

    // Navigate to result screen
    navigation.navigate('ResultScreen', { bmi: bmiValue.toFixed(2), bmiLevel: bmiLevel });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BMI Calculator</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <View style={styles.genderContainer}>
          <View style={styles.genderButtonsContainer}>
            <TouchableOpacity
              style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
              onPress={() => setGender('male')}
            >
              <View style={styles.iconContainer1}>
                <Image source={require('./male-user.png')} style={styles.icon} />
                <Text style={styles.genderButtonText}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
              onPress={() => setGender('female')}
            >
              <View style={styles.iconContainer}>
                <Image source={require('./female.png')} style={styles.icon} />
                <Text style={styles.genderButtonText}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ageContainer}>
          <Text style={styles.label}>Age:</Text>
          <View style={styles.ageInput}>
            <TouchableOpacity
              style={styles.plusMinusContainer}
              onPress={() => setAge(age > 1 ? age - 1 : age)}
            >
              <View style={styles.plusMinusButton}>
              <Text style={[styles.plusMinusButtonText, {color: '#FFFFFF'}]}>-</Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.ageTextInput}
              value={age.toString()}
              onChangeText={(text) => {
                const numericValue = text.replace(/[^0-9]/g, ''); // Allow only numbers
                setAge(numericValue ? parseInt(numericValue) : ''); // Update age state with parsed number
              }}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.plusMinusContainer}
              onPress={() => setAge(age < 120 ? age + 1 : age)}
            >
              <View style={styles.plusMinusButton}>
              <Text style={[styles.plusMinusButtonText, {color: '#FFFFFF'}]}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.weight}>
          <View style={styles.move}>
            <Text style={styles.label}>Weight:</Text>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Ib</Text>
            <Switch value={unit === 'Ib'} onValueChange={(value) => setUnit(value ? 'Ib' : 'kg')} />
            <Text style={styles.switchText}>Kg</Text>
          </View>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={`(${unit})`}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <View style={styles.height}>
          <View style={styles.move}>
            <Text style={styles.label}>Height:</Text>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Ft-in</Text>
            <Switch
              value={heightUnit === 'ft-in'}
              onValueChange={(value) => setHeightUnit(value ? 'ft-in' : 'cm')}
            />
            <Text style={styles.switchText}>Cm</Text>
          </View>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={`(${heightUnit})`}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  genderButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  genderButton: {
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 25,
  },
  genderButtonText: {
    color: '#000000',
    fontSize: 16,
    marginLeft: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedGender: {
    backgroundColor: '#007AFF',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  ageContainer: {
    marginBottom: 20,
  },
  ageInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the items horizontally
  },
  plusMinusContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  plusMinusButton: {
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0, // Half of the width and height to make it circular
    backgroundColor: '#213066',
  },
  plusMinusButtonText: {
    fontSize: 24,
  },
  ageTextInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    marginBottom: 0,
    fontSize: 16,
    textAlign: 'center', // Center the text horizontally
    flex: 2, // Take up 2/3 of the space
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#213066',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  weight: {
    flexDirection: "row",
  },
  move: {
    flex: 1,
    justifyContent: "center",
  },
  switchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    marginRight: -25,
  },
  label: {
    fontSize: 16,
  },
  switchText: {
    fontSize: 16,
  },
  height: {
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconContainer1: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  genderButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Calculator;