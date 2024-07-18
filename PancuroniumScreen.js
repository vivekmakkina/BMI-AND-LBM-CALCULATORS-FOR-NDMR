import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PancuroniumScreen = () => {
  return (
    <View style={styles.container}>
      {/* Container 1 */}
      <View style={styles.container1}>
        <Text style={styles.container1Text}>Pancuronium</Text>
      </View>

      {/* Container 2 */}
      <View style={styles.container2}>
        <Text style={styles.heading}>Intubating dose:</Text>

        {/* Sub-containers */}
        <View style={styles.subContainer}>
          <Text style={styles.subContainerTitle}>Pancuronium</Text>
          <View style={styles.subContainerContent}>
            <Text style={styles.subContainerContentText}>0.08-0.12 mg/kg  iv</Text>
          </View>
        </View>

        <View>
          <Text style={styles.bmiText1}>According to the , the iseal LBM ratio for adults:</Text>
        </View>

        {/* Male and Female */}
        <View style={styles.subContainer}>
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

        <View>
          <Text style={styles.bmiText}>BMI LEVEL:</Text>
        </View>
        
        {/* Sub-container 3 */}
        <View style={styles.subContainer}>
          <View style={styles.categoryItem}>
            <Text style={styles.point}>•</Text>
            <Text>Underweight</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.point}>•</Text>
            <Text>Normal</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.point}>•</Text>
            <Text>Overweight</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.point}>•</Text>
            <Text>Obesity</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100, // Move the container downwards by adding marginTop
  },
  
  container1: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20, // Adjust marginBottom according to your needs
  },
  container1Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container2: {
    backgroundColor: '#D9D9D9',
    padding: 30,
    borderRadius: 10,
    width: '90%',
    marginBottom: 100,
     // Adjust the minHeight to increase the height
  },
  
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center',
    borderColor: 'black', // Border color
    borderWidth: 0.6, // Border width
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  subContainerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subContainerContent: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'center', // Align items vertically
    marginTop: 5,
    backgroundColor: '#D9D9D9',
    padding: 15, // Add padding to increase size
    borderRadius: 2, // Add borderRadius for rounded corners
    width: '90%', // Set the width to 90% of the parent container's width
    borderColor: 'black', // Border color
    borderWidth: 0.5, // Border width
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  subContainerContentText: {
     // Change color to #D9D9D9
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
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: '',
    marginBottom: 5,
    marginLeft: -150, // Add left margin to push items to the left
  },
  point: {
    marginRight: 5,
    marginLeft: 5,
    fontSize: 22, // Adjust margin to separate point from text
  },
  bmiText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -10,
    marginTop: 20,
  },
  bmiText1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -10,
    marginTop: 20,
    fontSize: 16,
  },
});

export default PancuroniumScreen;