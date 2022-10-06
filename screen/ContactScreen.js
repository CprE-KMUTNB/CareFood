import React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'

const ContactScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Contact Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,  alignItems: 'center'
    },
})

export default ContactScreen ;