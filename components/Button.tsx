import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  label: string;
  color?: string;
  textColor?: string;
  onPress: () => void;
}

const Button = ({label, color = '#FF6600', textColor = '#fff', onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={[styles.text, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
