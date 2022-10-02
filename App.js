import React from 'react'
 import {View, Text,Image, StyleSheet} from 'react-native'

 const App = () => {
  return(
    <View style={styles.container}>
      <Image source={{uri : 'https://randomuser.me/api/portraits/men/1.jpg'}} 
        style={styles.image}
      />
      <Text style={styles.textStatus}>คุณได้รับประทานมื้อเช้าแล้ว</Text>
      <Text style={styles.text}>วันนี้ได้รับ</Text>
      <Text style={styles.textKcal}>543 kcal</Text>
    </View>
  )
 }

 const styles = StyleSheet.create({
  container : {
    flex : 1,  alignItems: 'center'
  },
  textStatus :{
    fontFamily: 'NotoSansThai_Bold',
    fontSize: 20,
    color: '#000000',
    top: 140
  },
  text :{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 16,
    top: 170
  },
  textKcal :{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 20,
    top: 180
  },
  image :{
    top: 100,
    width: 100,
    height: 100,
    borderRadius : 100/2
  }
 })

 export default App;