import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#ff44efff',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
