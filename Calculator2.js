import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Calculator2 = () => {
  const [unit, setUnit] = useState('kg'); // Default unit is Kg
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(1); // Default age value
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm'); // Default height unit is centimeters
  const [lbm, setLbm] = useState('');

  const navigation = useNavigation();

  // Function to calculate Lean Body Mass (LBM)
  const calculateLBM = (weight, height, gender) => {
    let lbmValue;
    if (gender === 'male') {
      lbmValue = 0.407 * weight + 0.267 * height - 19.2;
    } else if (gender === 'female') {
      lbmValue = 0.252 * weight + 0.473 * height - 48.3;
    } else {
      lbmValue = 0.333 * weight + 0.394 * height - 8.4;
    }
    return lbmValue.toFixed(2); // Rounded to 2 decimal places
  };

  const handleSubmit = () => {
    let weightInKg;

    // Convert weight to kg if unit is lb
    if (unit === 'Ib') {
      weightInKg = parseFloat(weight) * 0.453592;
    } else {
      weightInKg = parseFloat(weight);
    }

    // Convert height to cm if height unit is in ft-in
    let heightInCm;
    if (heightUnit === 'ft-in') {
      const [feet, inches] = height.split('.').map(Number);
      heightInCm = feet * 30.48 + inches * 2.54;
    } else {
      heightInCm = parseFloat(height);
    }

    // Calculate Lean Body Mass (LBM) and add percentage symbol
    const lbmValue = calculateLBM(weightInKg, heightInCm, gender);
    const lbmWithPercentage = `${lbmValue}%`;
    setLbm(lbmWithPercentage);

    // Navigate to the ResultScreen2
    navigation.navigate('ResultScreen2', { lbm: lbmWithPercentage });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LBM Calculator</Text>
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
    fontSize: 24, // Add this line to set the text color to white
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

export default Calculator2;