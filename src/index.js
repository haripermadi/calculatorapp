import React,{useState} from 'react'
import {View, StyleSheet, Text, Dimensions} from 'react-native'

import Container from './components/Container'
import Button from './components/Button'
import Scaling from './helper/Scaling'

const SCREEN_HEIGHT = Dimensions.get('window').height

const formatNumber = (number) =>{
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1.')
}

const Main = () => {
  const [currentValue, setCurrentValue] = useState('0')
  const [isClear, setIsClear] = useState(false)
  const [operator, setOperator] = useState(null)
  const [prevValue, setPrevValue] = useState(null)
  
  changeOperator = (type) => {
    setOperator(type)
    setPrevValue(`${currentValue}`)
  }
  
  handleEqual = () => {
    const prev = parseFloat(prevValue)
    const curr = parseFloat(currentValue)
    let result = calculate(operator, prev, curr)
    console.log('RESULT----', result, prev, curr, operator)
    setCurrentValue(`${result}`)
    setPrevValue(`${result}`)
    setOperator(null)
    setIsClear(false)
    
  }
  
  handleInputNumber = (value) => {
    setCurrentValue(currentValue === '0' || operator!== null ? value :`${currentValue}${value}`)
    setIsClear(true)
    // console.log('NUMBER--input',value,'--curr--',currentValue,'--prev--', prevValue,'--oprerator---', operator)
  }
  
  handlePlusMinus = () => {
    if(currentValue !== '0') {
      setCurrentValue(`${parseFloat(currentValue) * -1}`)
    }
  }

  handlePercentage = () => {
    if(currentValue !== '0') {
      setCurrentValue(`${(parseFloat(currentValue) / 100).toFixed(3)}`)
    }
  }

  handleResetButton = () => {
    setCurrentValue('0')
    setIsClear(false)
    setPrevValue(null)
    setOperator(null)
  }

  calculate = (type, prev, current) => {
    if(type === '+'){
      return prev + current
    }else if (type === '-') {
      return prev - current
    }else if (type === 'x') {
      return prev * current
    }else if (type === '/') {
      return prev / current
    }else{
      return current
    }
  }


  let displayValue = parseFloat(currentValue) > 1 ? formatNumber(currentValue) : currentValue
  let textSize = currentValue.length > 9 ? 40 : currentValue.length > 8 ? 50 : currentValue.length > 7 ? 60 : currentValue.length > 6 ? 70 : 80
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, {fontSize: Scaling.moderateScale(textSize)}]}>{displayValue}</Text>
      </View>
      <Container>
        <Button
        title={isClear ? 'C' : 'AC'}
        onButtonPress={() => this.handleResetButton()}
        buttonColor='grey'
        />
        <Button
        title='+/-'
        onButtonPress={() => this.handlePlusMinus()}
        buttonColor='grey'
        />
        <Button
        title='%'
        onButtonPress={() => this.handlePercentage()}
        buttonColor='grey'
        />
        <Button
        title='÷'
        onButtonPress={() => this.changeOperator('/')}
        buttonColor='orange'
        />
      </Container>
      <Container>
        <Button
        title='7'
        onButtonPress={() => this.handleInputNumber('7')}
        />
        <Button
        title='8'
        onButtonPress={() => this.handleInputNumber('8')}
        />
        <Button
        title='9'
        onButtonPress={() => this.handleInputNumber('9')}
        />
        <Button
        title='x'
        onButtonPress={() => this.changeOperator('x')}
        buttonColor='orange'
        />
      </Container>
      <Container>
        <Button
        title='4'
        onButtonPress={() => this.handleInputNumber('4')}
        />
        <Button
        title='5'
        onButtonPress={() => this.handleInputNumber('5')}
        />
        <Button
        title='6'
        onButtonPress={() => this.handleInputNumber('6')}
        />
        <Button
        title='-'
        onButtonPress={() => this.changeOperator('-')}
        buttonColor='orange'
        />
      </Container>
      <Container>
        <Button
        title='1'
        onButtonPress={() => this.handleInputNumber('1')}
        />
        <Button
        title='2'
        onButtonPress={() => this.handleInputNumber('2')}
        />
        <Button
        title='3'
        onButtonPress={() => this.handleInputNumber('3')}
        />
        <Button
        title='+'
        onButtonPress={() => this.changeOperator('+')}
        buttonColor='orange'
        />
      </Container>
      <Container>
        <Button
        title='0'
        onButtonPress={() => this.handleInputNumber('0')}
        isZero={true}
        />
        <Button
        title=','
        onButtonPress={() => this.handleInputNumber(',')}
        />
        <Button
        title='='
        onButtonPress={() => this.handleEqual()}
        buttonColor='orange'
        />
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  textStyle : {
    fontSize: Scaling.moderateScale(80),
    textAlign: 'right',
    color:'#fff',
    marginHorizontal:Scaling.moderateScale(10)
  },
  textContainer : {
    backgroundColor: '#000',
    height: (SCREEN_HEIGHT / 3) - Scaling.moderateScale(10),
    justifyContent:'flex-end'
  }
})


export default Main