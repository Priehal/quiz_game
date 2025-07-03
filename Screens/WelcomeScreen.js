import React from 'react';
import {View, Text, TouchableOpacity, Button, ButtonText} from 'react-native';
import { StyleSheet } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return(
    <View style = {styles.container}>
  <Text style = {styles.title}> Welcome to the Quiz </Text>
   <TouchableOpacity
   style = {styles.Button}
   onPress = {() => navigation.navigate('Quiz')}
   >
   <Text style = {styles.ButtonText}>Let's get started </Text>
   
   </TouchableOpacity>
      </View>
  )

}


export default WelcomeScreen;


const styles = StyleSheet.create({
  container:{
flex : 1,
justifyContent: 'center',
backgroundColor: 'pink'
  },
  title: {
fontSize: 20,
fontWeight: 'bold',
alignContent: 'center',
textAlign: 'center',


  },
  Button: {
backgroundColor: 'yellow',
borderRadius : 15,
paddingVertical: 5,
paddingHorizontal: 10,
width: "50%",
textAlign: 'center',
alignItems: 'center',
alignContent: 'center'
  },
  ButtonText:{
fontSize: 20,
fontWeight: 'bold',
textAlign: 'center',
justifyContent: 'center',
alignContent: 'center'
  }

})
