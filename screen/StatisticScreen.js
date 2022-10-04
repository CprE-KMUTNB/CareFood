import React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'

const StatisticScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Statistic Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,  alignItems: 'center'
    },
})

export default StatisticScreen ;