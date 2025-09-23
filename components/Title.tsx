import React from 'react';
import { Text } from 'react-native';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
      {text}
    </Text>
  );
};

export default Title;
