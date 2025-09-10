import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodata</Text>

      <Image
        source={require("./assets/picture.jpeg")} 
        style={styles.image}
      />
      <Text style={styles.name}>Oroh, injilio</Text>
      <Text style={styles.info}>NIM: 105022310030</Text>
      <Text style={styles.info}>No Regist: S22310192</Text>
      <Text style={styles.info}>Umur: 20</Text>
      <Text style={styles.info}>Kelas: MAD</Text>
      <Text style={styles.info}>Jurusan: Informatika</Text>
      <Text style={styles.info}>Hobi: Visual Effects, Badminton, menggambar</Text>
      <Text style={styles.info}>Cita-cita: Visual Effect Artist</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ccc9b0ff"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333"
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#555"
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10
  },
  info: {
    fontSize: 18,
    color: "#444",
    marginBottom: 5
  }
});