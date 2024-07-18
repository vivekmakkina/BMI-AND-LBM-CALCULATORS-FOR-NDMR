import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons icons from Expo

const { width } = Dimensions.get('window');

const Dashboard = ({ navigation }) => {
  const [activeDot, setActiveDot] = useState(0);
  const scrollViewRef = useRef(null);
  const imageCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeDot + 1) % imageCount;
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
      setActiveDot(nextIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [activeDot]);

  const handleBMIPress = () => {
    navigation.navigate('Calculator');
  };

  const handleLMBPress = () => {
    navigation.navigate('Calculator2'); // Navigate to Calculator2 screen
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveDot(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')} style={styles.menuIcon}>
          <Ionicons name="menu" size={27} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={styles.profileIcon}>
          <Ionicons name="person-circle-outline" size={27} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          ref={scrollViewRef}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} // Image 1
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} // Image 2
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} // Image 3
              style={styles.image}
            />
          </View>
        </ScrollView>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, activeDot === 0 && styles.activeDot]} />
          <View style={[styles.dot, activeDot === 1 && styles.activeDot]} />
          <View style={[styles.dot, activeDot === 2 && styles.activeDot]} />
        </View>
        <View style={styles.outerBox}>
          <View style={[styles.con1, { backgroundColor: 'white' }]}>
            <TouchableOpacity style={styles.button} onPress={handleBMIPress}>
              <View>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvdhDHiRUHL5rDazIbcESKA6_qNI2xjaNlQ&usqp=CAU' }}
                  style={styles.circle}
                />
              </View>
              <Text style={styles.buttonText}>BODY MASS INDEX</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.con2, { backgroundColor: 'white' }]}>
            <TouchableOpacity style={styles.button} onPress={handleLMBPress}>
              <View>
                <Image
                  source={{ uri: 'https://pbs.twimg.com/profile_images/378800000400487633/57af26a308edcd7707b60dc24837c302_400x400.jpeg' }}
                  style={styles.circle}
                />
              </View>
              <Text style={styles.buttonText}>LEAN BODY MASS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: 'rgba(33, 48, 102, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    marginLeft: 14,
    marginTop: 30, // Adjust this value to move the icon down
  },
  profileIcon: {
    marginRight: 14,
    marginTop: 30, // Adjust this value to move the icon down
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  scrollView: {
    width: '100%',
    height: width, // Set height equal to width to make it square
    marginBottom: 20,
  },
  imageContainer: {
    width: width,
    height: 250, // Increased height
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
    marginTop: 10,
  },
  image: {
    width: '95%',
    height: '95%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  outerBox: {
    width: '90%', // Reduced width
    backgroundColor: '#213066',
    paddingHorizontal: 10, // Reduced horizontal padding
    paddingVertical: 40, // Adjusted vertical padding
    borderRadius: 20,
    marginBottom: 40,
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: 'black',
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  con1: {
    marginBottom: 10,
    width: '80%', // Full width
    height: 140,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 12,
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Adjusted height
  },
  con2: {
    marginBottom: 5,
    marginTop: 10, // Add margin to move it down
    width: '80%', // Full width
    height: 140,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 12,
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
  },
  circle: {
    width: 90,
    height: 90,
    backgroundColor: '#333',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 7,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color with transparency
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 3, // Shadow radius
  },
});

export default Dashboard;
