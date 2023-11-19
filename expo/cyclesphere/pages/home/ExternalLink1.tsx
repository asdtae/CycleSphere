import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

const ExternalLink1: React.FC<{ url: string }> = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url).catch((err) =>
      console.error('Error occurred while opening link:', err)
    );
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.linkText}>Green Space</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: 'black',
  },
});

export default ExternalLink1;