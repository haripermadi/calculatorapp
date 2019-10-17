import React from 'react'
import {View, StyleSheet} from 'react-native'
import Scaling from '../helper/Scaling'

const Container = ({children}) => {
  return (
    <View style={styles.viewStyle}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle : {
    flexDirection: 'row',
    marginHorizontal: Scaling.moderateScale(5)
  }
})


export default Container