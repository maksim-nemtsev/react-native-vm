import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = ({ tittle }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{tittle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'mediumpurple',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default Navbar;
