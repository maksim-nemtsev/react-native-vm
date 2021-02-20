import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import AppTextBold from './ui/AppTextBold';

const Navbar = ({ title }) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbar.ios,
          android: styles.navbarAndroid,
        }),
      }}>
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
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.ios === 'ios' ? THEME.TITLE_COLOR : 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default Navbar;
