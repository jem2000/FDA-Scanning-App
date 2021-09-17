import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


//enter your Firebase info here and uncomment

///////////////////////////////////////////////
//                                           //
//        const firebaseConfig = {           //
//            apiKey:                        //
//            authDomain:                    //
//            databaseURL:                   //
//            projectId:                     //
//            storageBucket:                 //
//            messagingSenderId:             //
//            appId:                         //
//            measurementId:                 //
//        };                                 //
//                                           //
///////////////////////////////////////////////

// import the different screens
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main";
import BarcodeScanner from "./components/BarcodeScanner";
import Info from "./components/Info";
import History from "./components/History";

// create our app's navigation stack
const RootStack = createSwitchNavigator(
    {
        Loading: Loading,
        SignUp: SignUp,
        Login: Login,
        Main: Main,
        BarcodeScanner: BarcodeScanner,
        Info: Info,
        History: History
    },
    {
        initialRouteName: "Loading"
    }
);

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.getAnalytics(app);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const App = createAppContainer(RootStack);
export default App;