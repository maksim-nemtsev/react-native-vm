import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppCard = (props) => {
  return <View style={{ ...styles.default, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
  },
});

export default AppCard;