import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './Screens/WelcomeScreen';
import ResultScreen from './Screens/ResultScreen';
import QuizScreen from './Screens/QuizScreen';

const stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <stack.Navigator initialRoute = 'WelcomeScreen'>
     <stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
     <stack.Screen name='Quiz' component={QuizScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}