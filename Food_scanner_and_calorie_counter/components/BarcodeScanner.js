import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {BarCodeScanner} from 'expo-barcode-scanner';
import { AsyncStorage } from "react-native";


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  console.log("scan2");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  let fdc = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=TpuNpCiJzfPy5vcMvI9xP2yBwowcY8QqVpCus6De&query=';
  let code = '04976400'; //sprite

  async function getFDC(link) {
    let response = await fetch(link);
    return await response.json();
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    getFDC(fdc + data).then(fdc_data => {
      console.log(fdc_data);
      console.log(fdc_data.foods[0].description);
      console.log(fdc_data.foods[0].foodNutrients[3].value);
    }
  );
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
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}
          <Button title="Exit" onPress={() => this.props.navigation.navigate("Main")}/>
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
