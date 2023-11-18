import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ReCAPTCHA from 'react-google-recaptcha';
import Config from 'react-native-config';

function SettingsScreen() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const recaptchaRef = useRef<any>(null);

  const handleInputChange = (key: string, value: string) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.verify();
    }
  };

  const onVerify = (token: string) => {
    console.log('reCAPTCHA token:', token);
    // Here, you can include your form submission logic using the token.
    // For example, send the form data along with the token to a server.
    console.log('Form submitted:', inputs);
  };

  return (
    <View style={styles.container}>
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

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={inputs.phoneNumber}
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={Config.REACT_APP_SITE_KEY}
        onVerify={onVerify}
        //style={styles.recaptcha} // Style the reCAPTCHA component as needed
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default SettingsScreen;
