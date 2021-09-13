import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import * as firebase from "firebase";

import Constants from 'expo-constants';


//function storeFoodItem(CurrentUser, FoodItem) {

//    if (CurrentUser != null) {
//        console.log("My uid is ", CurrentUser.uid)

//        firebase
//            .database()
//            .ref('users/' + CurrentUser.uid)
//            .push({
//                Title: FoodItem.Title,
//                Calories: FoodItem.Calories,
//                Fats: FoodItem.Fats,
//                Sugar: FoodItem.Sugar,
//                Servings: FoodItem.Servings
//            });

//        console.log("finished storing");
//    }
//}


export default class History extends React.Component {
    state = { currentUser: null };

    render() {
        const { currentUser } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        The FitnessGram� Pacer Test is a multistage aerobic capacity
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