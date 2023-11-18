import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';
import zxcvbn from 'zxcvbn'; // For password strength checking

function RegisterScreen() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [profilePic, setProfilePic] = useState(null);

  const handleInputChange = (key: any, value: any) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleProfilePicUpload = async () => {
    // Implement image uploading logic using ImagePicker
    // Set the selected image to 'profilePic'
  };

  const handleSubmit = () => {
    if (inputs.password !== inputs.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Check password strength using zxcvbn library
    const passwordStrength = zxcvbn(inputs.password);
    if (passwordStrength.score < 3) {
      alert(
        'Please create a stronger password. Include numbers, special characters, and both uppercase and lowercase letters.'
      );
      return;
    }

    // Save user data and profile picture to database or storage
    // Redirect to the home screen or perform further actions
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {/* Profile picture upload */}
        <TouchableOpacity style={styles.profilePicButton} onPress={handleProfilePicUpload}>
          <Text style={styles.profilePicButtonText}>Upload Profile Picture</Text>
        </TouchableOpacity>
        {profilePic && <Image source={{ uri: profilePic }} style={styles.profilePic} />}

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={inputs.username}
          onChangeText={(text) => handleInputChange('username', text)}
          placeholder="Enter username"
        />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={inputs.email}
        onChangeText={(text) => handleInputChange('email', text)}
        placeholder="Enter email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={inputs.password}
        onChangeText={(text) => handleInputChange('password', text)}
        placeholder="Enter password"
        secureTextEntry
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={inputs.confirmPassword}
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
        placeholder="Confirm password"
        secureTextEntry
      />
        
        <Button title="Register" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'purple', // Blue box background color
    padding: 20,
    borderRadius: 15, // Rounded corners
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white', // Label text color
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white', // Input background color
  },
  profilePicButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  profilePicButtonText: {
    color: 'blue',
  },
  profilePic: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default RegisterScreen;
