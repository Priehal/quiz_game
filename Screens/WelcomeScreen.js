import React from 'react';
import {View, Text, TouchableOpacity, ButtonText} from 'react-native';
import { StyleSheet, Button, TextInput,Image } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return(
    <View style = {styles.container}>
  <Text style = {styles.title}> Welcome to the Quiz! </Text>
  <TextInput style = {styles.Input}
      placeholder="Enter your Name"
      placeholderTextColor="white"
  
  />
<Image source={require('/Users/prieyadahal/Documents/quiz_game/assets/IMG_4640.png')}
style = {styles.image}
/>
  <View style = {styles.centerContent}>
   <TouchableOpacity
   style = {styles.Button}
   onPress = {() => navigation.navigate('Quiz')}
   >
   <Text style = {styles.ButtonText}>START </Text>
   
   </TouchableOpacity>
      </View>
      </View>
  )

}


export default WelcomeScreen;


const styles = StyleSheet.create({
  container:{
flex : 1,
justifyContent: 'flex-start',
justifyContent: 'space-between',
backgroundColor: 'yellow',
padding : 15,

  },
 title: {
fontSize: 25,
padding: 20,
fontWeight: 'bold',
textAlign: 'center',
color: 'darkblue',
 },
 Input:{
  fontSize: 20,
  padding: 20,
  width: "50%",
backgroundColor: 'lightgrey',
textAlign: 'center',
color: 'black',
alignSelf: 'center',
 },
 image:{
padding: 15,
width: "70%",
alignSelf: 'center'
 },

centerContent: {
  flex: 1,
  padding: 20,
  justifyContent: 'flex_start',
  alignItems: 'center',
  
},

  
  Button: {
backgroundColor: 'lightblue',
borderRadius: 15,
paddingVertical: 5,
paddingHorizontal: 10,
width: "45%",
alignSelf: 'center',
  },

  ButtonText:{
fontSize: 20,
fontWeight: 'bold',
textAlign: 'center',

  }

})
