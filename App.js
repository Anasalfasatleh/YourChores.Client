import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [weather, setWeather] = useState("loading...");

  const getWeather = async () => {
    if (weather == "loading...") {
      var response = await fetch('http://192.168.1.50:5001/weatherforecast');

      var data = await response.json();

      setWeather(data[1].summary);
    }
  }

  getWeather();
  return (
    <View style={styles.container}>
      <Text>{weather}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
