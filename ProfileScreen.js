import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <Image source={{ uri: userData.image }} style={styles.image} />
          <Text style={styles.username}>Username: {userData.username}</Text>
          <Text style={styles.detail}>Gender: {userData.gender}</Text>
          <Text style={styles.detail}>Phone Number: {userData.phoneNumber}</Text>
          <Text style={styles.detail}>Email: {userData.email}</Text>
        </>
      ) : (
        <Text>No user data available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProfileScreen;
