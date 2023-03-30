import React from 'react';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const Profile = () => {
  const staticImage = require('./assets/wall.jpg')

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://res.cloudinary.com/dzxwdwwqh/image/upload/v1674041416/wall5_myxdst.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Raviraj Bhandari</Text>
      <Text style={styles.bio}>Yoo!! Welcome to my profile ^_^</Text>
      <View style={styles.info}>
        <Text style={styles.infoText}>Age: 22</Text>
        <Text style={styles.infoText}>Gender: Male</Text>
        <Text style={styles.infoText}>Location: Pune, India</Text>
      <ImageBackground source={staticImage} style={styles.ImageBackground}></ImageBackground>  

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
  },
  info: {
    alignItems: 'flex-start',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  backgroundImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  ImageBackground: {
    width: 250,
    height: 250,
    borderRadius: 75,
    opacity: 60,
  },
});

export default Profile;
