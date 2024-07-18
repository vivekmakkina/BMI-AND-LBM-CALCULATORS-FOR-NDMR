import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DrugSelectionScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleDrugSelection = (drugName) => {
    // Navigate to the corresponding screen based on the selected drug
    switch (drugName) {
      case 'Atracurium':
        navigateToScreen('AtracuriumScreen');
        break;
      case 'Vecuronium':
        navigateToScreen('VecuroniumScreen');
        break;
      case 'Pancuronium':
        navigateToScreen('PancuroniumScreen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose any one drug</Text>
      <TouchableOpacity
        style={styles.drugContainer}
        onPress={() => handleDrugSelection('Atracurium')}>
        <Text style={styles.drugText}>Atracurium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drugContainer}
        onPress={() => handleDrugSelection('Vecuronium')}>
        <Text style={styles.drugText}>Vecuronium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drugContainer}
        onPress={() => handleDrugSelection('Pancuronium')}>
        <Text style={styles.drugText}>Pancuronium</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 40,
  },
  drugContainer: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20, // Reduced margin for better spacing
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  drugText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DrugSelectionScreen;