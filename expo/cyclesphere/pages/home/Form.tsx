import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image,
} from 'react-native';


function RegisterScreen() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* Left side: Logo and 3 links */}
          <View style={styles.leftHeader}>
            {/* Logo */}
            <Image
            source={require('../../assets/icon.png')} // Replace with your logo path
            style={styles.logo}
            />
            {/* Website Name */}
            <Text style={styles.websiteName}>CycleSphere</Text>
            <View style={styles.verticalLine}>|</View>
            {/* 3 Links */}
            <View style={styles.leftLinks}>
              <TouchableOpacity style={styles.link}>
                <Text>Link 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link}>
                <Text>Download</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link}>
                <Text>Report</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          {/* Right side: 2 Links */}
          <View style={styles.rightLinks}>
            <TouchableOpacity style={styles.link}>
              <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Other content of the Register Screen */}
        {/* ... */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // Other styles for the main container
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    leftHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 40, // Adjust the width of the logo as needed
      height: 40, // Adjust the height of the logo as needed
      marginRight: 10,
      // Other styles for the logo
    },
    websiteName: {
      fontSize: 20,
      fontWeight: 'bold',
      // Other styles for the website name
    },
    leftLinks: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      // Other styles for the left links
    },
    rightLinks: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    link: {
      // Styles for individual link container
    },
    verticalLine: {
        height: '100%', // Adjust the height to match the header's height
        width: 1,
      },
  });
  
  export default RegisterScreen;