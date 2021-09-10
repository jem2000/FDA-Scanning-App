import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

const firebaseConfig = {
  apiKey: "AIzaSyBzG9ZHCPdPloDztdEUpP7uLpbUe4pjc8o",
  authDomain: "fda-scanner-app.firebaseapp.com",
  databaseURL: "https://fda-scanner-app-default-rtdb.firebaseio.com",
  projectId: "fda-scanner-app",
  storageBucket: "fda-scanner-app.appspot.com",
  messagingSenderId: "519417098688",
  appId: "1:519417098688:web:f0efc60b1182e0abfa1825",
  measurementId: "G-N306P2LH09"
};

// import the different screens
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main";

// create our app's navigation stack
const RootStack = createSwitchNavigator(
    {
      Loading: Loading,
      SignUp: SignUp,
      Login: Login,
      Main: Main,
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