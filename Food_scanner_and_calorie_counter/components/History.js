import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
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
                        The FitnessGram Pacer Test: {this.state.foodHistory}
                    </Text>

                    <TouchableOpacity onPress={() => readFoodItem(currentUser)} style={styles.button}>
                        <Text style={styles.buttonText}>History</Text>
                    </TouchableOpacity>

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
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 60,
    },
});