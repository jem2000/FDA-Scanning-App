import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { AsyncStorage } from "react-native";

import { useNavigation } from '@react-navigation/native';



export default class BarcodeScanner extends React.Component {
    // const [hasPermission, setHasPermission] = useState(null);
    // const [scanned, setScanned] = useState(false);
    state = { scanned: false, hasPermission: null }

    // console.log("scan2");

    async componentDidMount() {
        console.log("mounting goddamnit");
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        console.log(status);
        this.state.hasPermission = status;

        if (this.state.hasPermission === null) {
            console.log("death");
            return <Text>Requesting for camera permission</Text>;
        }
        if (this.state.hasPermission === false) {
            console.log("death2");
            return <Text>No access to camera</Text>;
        }
    }

    render() {

        let fdc = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=TpuNpCiJzfPy5vcMvI9xP2yBwowcY8QqVpCus6De&query=';
        let code = '04976400'; //sprite

        async function getFDC(link) {
            let response = await fetch(link);
            return await response.json();
        }

        const handleBarCodeScanned = ({ type, data }) => {
            this.state.scanned = true;
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);

            getFDC(fdc + data).then(fdc_data => {
                console.log(fdc_data);
                console.log(fdc_data.foods[0].description);
                console.log(fdc_data.foods[0].foodNutrients[3].value);
            }
            );
            this.props.navigation.navigate("Info");
        };



        return (
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={this.state.scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {this.state.scanned && <Button title={'Tap to Scan Again'} onPress={() => this.state.scanned = false} />}

                <View style={styles.exitButton}>
                    <Button title="Exit" onPress={() => {
                        this.props.navigation.navigate("Main")
                    }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    exitButton: {
        position: 'relative',
        justifyContent: 'center',
    },
});
