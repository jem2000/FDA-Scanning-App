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
                console.log(foodLog);
            });

        console.log("finished writing");
        return foodLog;
    }
    else console.log("current user is null")
}

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: null };
    }

    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.setState({ currentUser });
        readFoodItem(currentUser);
    }


    render() {
        const { currentUser } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        The FitnessGram Pacer Test is a multistage aerobic capacity
                        test that progressively gets more difficult as it continues.
                        The 20 meter pacer test will begin in 30 seconds. Line up at
                        the start. The running speed starts slowly, but gets faster
                        each minute after you hear this signal. [beep] A single lap
                        should be completed each time you hear this sound. [ding]
                        Remember to run in a straight line, and run as long as possible.
                        The second time you fail to complete a lap before the sound, your
                        test is over. The test will begin on the word start. On your mark,
                        get ready, start.
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