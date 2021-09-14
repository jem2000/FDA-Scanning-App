import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import * as firebase from "firebase";

import Constants from 'expo-constants';


function readFoodItem(CurrentUser) {

    if (CurrentUser != null) {
        console.log("My uid is ", CurrentUser.uid)

        let foodLog;

        firebase
            .database()
            .ref('users/' + CurrentUser.uid)
            .once('value', snapshot => {
                foodLog = snapshot.val();
                console.log("in firebase", foodLog);
                return foodLog;
            });

        console.log("out of firebase", foodLog);

    }
    else console.log("current user is null")
}

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: null, foodHistory: null };
    }

    componentDidMount() {
        const { currentUser } = firebase.auth();
        const foodHistory = readFoodItem(currentUser);
        this.setState({ currentUser, foodHistory })
        console.log(foodHistory);
    }


    render() {
        const { currentUser, foodHistory } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        {this.state.foodHistory}
                    </Text>

                    <View style={styles.exitButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")} style={styles.button}>
                            <Text style={styles.buttonText}>Return to Home Screen</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    exitButton: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: 40
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
        height: 90,
        position: 'absolute',
        justifyContent: 'center',
        bottom: -40,
        width: 420
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 60,
    },
});