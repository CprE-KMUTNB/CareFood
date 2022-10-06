import React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'

const SettingScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Setting Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,  alignItems: 'center'
    },
})

export default SettingScreen ;