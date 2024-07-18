import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const ResultScreen2 = ({ route }) => {
  const { lbm } = route.params;
  const navigation = useNavigation(); // Get navigation object

  const handleContinuePress = () => {
    // Navigate to DrugSelectionScreen
    navigation.navigate('DrugSelectionScreen');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.outerBox}>
        <View style={styles.container}>
          <Text style={styles.resultText}>LBM       :<Text style={styles.lbmValue}>       {lbm}</Text></Text>
          <Text style={[styles.infoText, styles.infoTextMargin]}>LBM ratio varies with age, activity, and diet</Text>
        </View>
      </View>
      <Text style={styles.bottomText}>According to the IDEAL LBM ratio for adults:</Text>
      <View style={styles.outerBox2}>
      <View style={styles.subContainerItem}>
            <Text style={styles.text}>Male</Text>
            <Text style={styles.percentage}>70-90%</Text>
          </View>

          {/* Female */}
          <View style={styles.subContainerItem}>
            <Text style={styles.text}>Female</Text>
            <Text style={styles.percentage}>60-85%</Text>
          </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'center',
    paddingTop: 80, // Increase padding top to move up
  },
  outerBox: {
    width: '90%', // Adjusted box size
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 50,
    borderWidth: 0.4, 
    borderColor: 'black', 
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#213066', // Color for "LBM :"
  },
  lbmValue: {
    color: '#516DD1', // Color for the LBM value
  },
  infoText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#989898', // Color for the info text
  },
  infoTextMargin: {
    marginTop: 60, // Adjusted margin to move text downwards
  },
  bottomText: {
    marginTop: 65, // Increased margin to move the text further down
    fontSize: 16,
    color: 'black', // Color for the bottom text
  },
  outerBox2: {
    width: '90%', // Adjusted box size
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 50, 
    borderWidth: 0.4, 
    borderColor: 'black', 
  },
  continueButton: {
    marginTop: 50, // Add margin top to create space between the content and button
    backgroundColor: '#213066',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
  },
  subContainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,// Add or adjust styles as needed
  },
  percentage: {
    fontSize: 18,// Add or adjust styles as needed
  },
});

export default ResultScreen2;