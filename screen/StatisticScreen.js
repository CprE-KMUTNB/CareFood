import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';

import { BarChart } from 'react-native-chart-kit';

const StatisticScreen = () => {
    const data = {
        labels: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };


    return(
        <View style={styles.container}>
            <Text style={styles.text}>สถิติ</Text>
            <View style={[styles.box,{marginTop:60,}]}>
                <Text style={styles.text}>สัปดาห์</Text>
                <TouchableOpacity onPress={() => {}} style={{marginLeft:10}}>
                    <Octicons name='chevron-down' size={22} color='black'/>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>พลังงานสะสมทั้งหมด</Text>
                <Text style={[styles.text, {marginLeft:20}]}>kcal/</Text>
            </View>
            <View style={styles.chart}>
                <BarChart
                data={data}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{
                    backgroundGradientFrom: "#FFF",
                    backgroundGradientTo: "#FFF",
                    height:100000,
                    fillShadowGradient: '#E01A22',
                    fillShadowGradientOpacity: 1,
                    decimalPlaces: 0, 
                    color: (opacity = 1) => '#E01A22',
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        
                    style:{
                    
                    fontFamily:'NotoSansThai'
                    },
                    propsForBackgroundLines: {
                        strokeWidth: 1,
                        stroke: "#e3e3e3",
                        strokeDasharray: "0",
                    },
                    propsForLabels: {
                        fontFamily: "Bogle-Regular",
                    }
                    }}
                style={{borderRadius: 20}}
            
                    
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,  
      marginTop:50
    },
    text:{
        fontFamily:'NotoSansThai',
        fontSize:16,
        textAlign:'center',
        color: 'black'
    },
    box:{
        flexDirection:'row',
        marginBottom:40,
        marginHorizontal:60,
    },
    button:{
        backgroundColor:'#F0E4E4',
        width:120,
        height:25,
        justifyContent: 'center',
        borderRadius:10
    },
    chart:{
        
    }
})


export default StatisticScreen ;