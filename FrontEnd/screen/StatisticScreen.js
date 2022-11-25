import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, DefaultTheme} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';

import { BarChart } from 'react-native-chart-kit';
import { AuthContext } from '../context/AuthContext';

const StatisticScreen = () => {
    const {date} = useContext(AuthContext)
    const data = {
        labels: date.date,
        datasets: [
          {
            data: date.result
          }
        ]
      };


    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>สถิติ</Text>
            <View style={[styles.box,{marginTop:60,}]}>
                <Text style={styles.text}>พลังงานสะสมทั้งหมด</Text>
                <Text style={[styles.text, {marginLeft:20}]}>kcal / สัปดาห์</Text>
            </View>
            <View style={[styles.chart,{right:15}]}>
                <BarChart
                data={data}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{
                    backgroundGradientFrom: "#F2F2F2",
                    backgroundGradientTo: "#F2F2F2",
                    height:100000,
                    fillShadowGradient: '#E01A22',
                    fillShadowGradientOpacity: 1,
                    decimalPlaces: 0,
                    barPercentage: 0.7, 
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
      marginTop:50,
    },
    textHeader:{
        fontFamily: 'NotoSansThai',
        color:'black',
        fontSize:18,
        textAlign:'center',
    },
    text:{
        fontFamily:'NotoSansThai',
        fontSize:16,
        textAlign:'center',
        color: 'black',
        
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