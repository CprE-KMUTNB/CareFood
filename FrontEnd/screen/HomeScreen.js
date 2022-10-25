import React from 'react'
import {View, Text,Image, StyleSheet,ScrollView} from 'react-native'


const App = () => {
  return(
    <View style={[styles.container,{flexDirection: 'column'}]}>
      <View style={[styles.box,{flexDirection: 'column'}]}>
        <Image source={require('../img/logo.png')}
          style={styles.image}/>
        <Text style={styles.textStatus}>คุณได้รับประทานมื้อเช้าแล้ว</Text>
        <Text style={styles.text}>วันนี้ได้รับ</Text>
        <Text style={styles.textKcal}>543 kcal</Text>
      </View>
      <View style={styles.scroll}>
      <ScrollView>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.textScroll,{flex:1}]}>ข้าวผัดหมู</Text>
          <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>534 kcal</Text>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: '#D9D9D9', margin:10}} />
      </ScrollView>
      </View>
    </View>
  )
 }

 const styles = StyleSheet.create({
  container : {
    flex : 1,  
    alignItems: 'center',
  },
  box:{
    flex : 1.5,  
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 50
  },
  scroll:{
    flex : 1,  
    backgroundColor:'#F0E4E4',
    marginTop: 5,
    marginBottom: 40,
    marginHorizontal: 80,
    padding:20,
    borderRadius : 5,
    width: 220
  },
  textStatus :{
    fontFamily: 'NotoSansThai_Bold',
    fontSize: 20,
    color: '#000000',
    padding: 20
  },
  text :{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 16,
    padding: 10
  },
  textKcal :{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 20,
  },
  textScroll:{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 16
  },
  image :{
    width: 79,
    height: 82,
    marginTop: 30,
    marginBottom: 20
  }
 }) 

 export default App;
