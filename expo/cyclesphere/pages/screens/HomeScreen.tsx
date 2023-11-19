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
              <a style={styles.link} href='https://cyclesphere.asdtae.com/'>Green Space</a>
              <a style={styles.link} href='https://download.asdtae.com/'>Download</a>
              <a style={styles.link} href='https://support.asdtae.com/'>Support</a>
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
  
        {/*Goals*/}
        <View style={styles.motto}>
        <Text>Our motto is:"Playfully Recycling for a Positive World: Earn Points, Make a Difference!"</Text>
        </View>
        <View style={styles.goals}>
        <Text>1.Recycling</Text>  
        </View>
        <View style={styles.story}>
        <Text>Our aim is to achieve sustainability through recycling, avoiding further damage to our environment by unnecessarily purchasing materials.</Text>
        </View>
        <View style={styles.goals}>
        <Text>2.Clean environment</Text>
        </View>
        <View style={styles.story}>
        <Text>By keeping the environment clean we aim to protect our own lives and our planet.By using our app regularly you will have a great impact on combating pollution</Text>
        </View>
        <View style={styles.goals}>
        <Text>Preserving our wildlife</Text>
        </View>
        <View style={styles.story}>
        <Text>Pollution harms everyone: animals, plants, human beings. Proper waste managament can help us significantly.</Text>
        </View>
        <View style={styles.story}>
        <Text>So , sign up and learn about recycling while also finishing daily tasks</Text>
        </View>
       </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // Other styles for the main container
    },
  motto: {
    alignItems:'center',
    fontWeight:'italic',
    fontSize:20,
  },
  goals:{
    alignItems:'left',
    fontWeight:'bold',
    fontSize:28,
  },
  story:{
    alignItems:'left',
    fontSize:25,
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
      color: 'black',
      textDecorationLine: 'none',
      // Styles for individual link container
    },
    verticalLine: {
        height: '100%', // Adjust the height to match the header's height
        width: 1,
        marginLeft: 5,
      },
});

export default HomeScreen;
