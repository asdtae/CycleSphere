import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GreenSpaceScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GreenSpaceScreen;