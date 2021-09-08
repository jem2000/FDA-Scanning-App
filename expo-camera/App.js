import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

import * as firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzG9ZHCPdPloDztdEUpP7uLpbUe4pjc8o",
  authDomain: "fda-scanner-app.firebaseapp.com",
  projectId: "fda-scanner-app",
  storageBucket: "fda-scanner-app.appspot.com",
  messagingSenderId: "519417098688",
  appId: "1:519417098688:web:ef1e352aa303bf3afa1825",
  measurementId: "G-ZRL870MCRV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  let fdc = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=TpuNpCiJzfPy5vcMvI9xP2yBwowcY8QqVpCus6De&query=';
  let code = '04976400'; //sprite

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    let link = fdc + data;
    async function getFDC() {
      let response = await fetch(link);
      return await response.json();
    }
    getFDC().then(fdc_data => console.log(fdc_data));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
