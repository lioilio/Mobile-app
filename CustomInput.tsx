import React from 'react';
import { TextInput, View, Text, KeyboardTypeOptions } from 'react-native';

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>
        {label}
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 10,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;
