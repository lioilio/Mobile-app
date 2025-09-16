import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';

const Exercise4 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Title text="Welcome" />

        <Input
          placeholder="Masukan username anda"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Masukan password anda"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Main Sign In */}
        <Button label="Sign In" onPress={handleSignIn} />

        {/* Social buttons */}
        <Button
          label="Sign in with Google"
          color="red"
          onPress={() => console.log('Google pressed')}
        />
        <Button
          label="Sign in with Facebook"
          color="blue"
          onPress={() => console.log('Facebook pressed')}
        />
        <Button
          label="Sign in with Apple"
          color="black"
          onPress={() => console.log('Apple pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
