import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import Title from './components/Title';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

const RegistrationScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log({
      name,
      username,
      email,
      address,
      phone,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <Title text="Registration" />

        <CustomInput
          label="Name"
          placeholder="Masukan nama lengkap anda"
          value={name}
          onChangeText={setName}
        />
        <CustomInput
          label="Username"
          placeholder="Masukan username anda"
          value={username}
          onChangeText={setUsername}
        />
        <CustomInput
          label="Email"
          placeholder="Masukan email anda"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          label="Address"
          placeholder="Masukan alamat anda"
          value={address}
          onChangeText={setAddress}
        />
        <CustomInput
          label="Phone Number"
          placeholder="Masukan Nomor telepon anda"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />

        <CustomButton text="Register" onPress={handleRegister} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
