import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native'
import Scaling from '../helper/Scaling'

const SCREEN_WIDTH = Dimensions.get('window').width
const Button = ({title, onButtonPress, isZero, buttonColor}) => {
  const buttonStyle = isZero ? styles.buttonZero : styles.buttonContainer
  const backgroundColorButton = buttonColor === 'orange' ? '#fe9401' : buttonColor === 'grey' ? '#a6a6a6' : '#333333'
  return (
    <TouchableOpacity 
    style={[buttonStyle, {backgroundColor:backgroundColorButton}]}
    onPress={onButtonPress}
    >
      <Text style={[styles.textStyle, {marginLeft: isZero ? 20:0, color: buttonColor === 'grey' ?'#000':'#fff'}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer : {
    flex:1,
    backgroundColor:'#333333',
    borderRadius:SCREEN_WIDTH / 5,
    justifyContent:'center',
    alignItems:'center',
    height: SCREEN_WIDTH / 5,
    marginHorizontal: Scaling.moderateScale(8),
    marginVertical: Scaling.moderateScale(5),
  },
  textStyle : {
    fontSize: Scaling.moderateScale(30),
    color: '#fff',
  },
  buttonZero : {
    flex:2,
    backgroundColor:'#333333',
    borderRadius:SCREEN_WIDTH / 2.5,
    justifyContent:'center',
    alignItems:'flex-start',
    width: (SCREEN_WIDTH / 2.5 ),
    marginHorizontal: Scaling.moderateScale(8),
    marginVertical: Scaling.moderateScale(5),
    paddingLeft:Scaling.moderateScale(10),

  }
})


export default Button