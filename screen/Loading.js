import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const Screenwidthheigth = () => {
  const size = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>width : {size.width}</Text>
      <Text style={styles.text}>height : {size.height}</Text>
    </View>
  )
}

export default Screenwidthheigth

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20
  }
})