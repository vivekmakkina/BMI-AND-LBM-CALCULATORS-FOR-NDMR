import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const Signup = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [image, setImage] = useState(null);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setShowGenderModal(false);
  };

  const handleSignup = () => {
    if (!username || !gender || !phoneNumber || !email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (!/^\d+$/.test(phoneNumber)) {
      Alert.alert('Error', 'Invalid phone number');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('gender', gender);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);
    formData.append('password', password);

    if (image) {
      const fileName = image.split('/').pop();
      const match = /\.(\w+)$/.exec(fileName);
      const fileType = match ? `image/${match[1]}` : `image`;

      formData.append('image', {
        uri: image,
        name: fileName,
        type: fileType,
      });
    }

    fetch('http://192.168.19.209/vivek/signup.php', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        console.error('Error:', error);
      });

    setUsername('');
    setGender('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setImage(null);
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log('Image picker result:', result);

      if (!result.cancelled && result.assets.length > 0 && result.assets[0].uri) {
        setImage(result.assets[0].uri);
      } else {
        console.log('Image selection canceled or failed.');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profilePhotoContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profilePhoto} />
        ) : (
          <Ionicons name="add-circle" size={50} color="gray" />
        )}
      </TouchableOpacity>
      <Text style={styles.uploadText}>Upload image</Text>
      <View style={styles.outerBox}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowGenderModal(true)}
          >
            <Text style={styles.inputText}>{gender || 'Select Gender'}</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.sign} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showGenderModal}
        onRequestClose={() => setShowGenderModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => handleGenderSelect('Male')}
            >
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => handleGenderSelect('Female')}
            >
              <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowGenderModal(false)}
            >
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 20,
    width: width,
    height: height,
  },
  profilePhotoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E1E1E1',
    marginBottom: 20,
    overflow: 'hidden',
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
  },
  uploadText: {
    fontSize: width * 0.05,
    fontWeight: '700',
    color: '#000000',
    marginTop: height * 0.02,
    fontFamily: 'Manjari',
  },
  outerBox: {
    width: '90%',
    backgroundColor: 'rgba(33, 48, 102, 1)',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#000000',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    borderColor: '#DDD',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    color: 'black',
  },
  sign: {
    backgroundColor: '#212A6B',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  genderOption: {
    padding: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Signup;
