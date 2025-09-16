import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}: {text: string}) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
