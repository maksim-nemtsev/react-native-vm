import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import AppTextBold from './ui/AppTextBold';

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
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
    color: THEME.TITLE_COLOR,
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default Navbar;
