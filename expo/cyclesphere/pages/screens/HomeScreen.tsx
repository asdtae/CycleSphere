import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Linking,
} from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
    <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* Left side: Logo and 3 links */}
          <View style={styles.leftHeader}>
            {/* Logo */}
            <Image
            source={require('../../assets/icon.png')} 
            style={styles.logo}
            />
            {/* Website Name */}
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text>CycleSphere</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine}>|</View>
            {/* 3 Links */}
            <View style={styles.leftLinks}>
              <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('GreenSpaceScreen')}>
                <Text>Green Space</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('DownloadScreen')}>
                <Text>Download</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('SupportScreen')}>
                <Text>Support</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          {/* Right side: 2 Links */}
          <View style={styles.rightLinks}>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}>
              <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Other content of the Register Screen */}
        {/* ... */}
      </View>
    );
};

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
      marginRight: 5,
      marginLeft: 5,
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
      marginRight: 20,
      // Styles for individual link container
    },
    verticalLine: {
        height: '100%', // Adjust the height to match the header's height
        width: 1,
        marginLeft: 5,
      },
});

export default HomeScreen;
