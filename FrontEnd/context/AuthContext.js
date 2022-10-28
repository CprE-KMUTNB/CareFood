import React, {createContext, useState, useEffect} from "react";
import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

import axios from "axios";

const baseUrl = "http://10.0.2.2:5500"

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [status, setStatus] = useState([]);
    const [data,setData] = useState([]);
    const [activity, setActivity] = useState([]);
    const [menu, setMenu] = useState([]);
    const [kcal, setKcal] = useState('');
    const [foodInfo, setFoodInfo] = useState([]);
    const [power, setPower] = useState('');

    const checkTextInput = (error,status) => 
        Alert.alert(
            error,
            status,
            [
            { text: "ตกลง"}
            ]
        );

    const login = (name,password) =>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/login`,{
            name,password
        })
        .then(res=>{
            if (res.data.error){
                setStatus(res.data.error)
                console.log(res.data.error)
                checkTextInput('ไม่สามารถเข้าสู่ระบบ',res.data.error)
            }
            else{
            console.log(res.data.token);
            console.log(res.data);
            AsyncStorage.setItem('userToken', res.data.token)
            setUserToken(res.data.token);
            setUserInfo(res.data.userinfo);
            
        }})
        .catch(err=>{
            console.log(err);
        });
        setIsLoading(false);
    }

    const register = (name, password,realname,surname, age, weight, height, gender) =>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/register`,{
        name, password,realname,surname,age, weight, height, gender
        })
        .then(res=>{
            if (res.data.error){
                setStatus(res.data.error)
                console.log(res.data.error)
                checkTextInput('ไม่สามารถสมัครบัญชี',res.data.error)
            }
            else{
            console.log(res.data);
        }})
        .catch(err=>{
            console.log(err);
        })
        setIsLoading(false);
    }

    const edit = (realname,surname,age,height,weight,gender)=>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/edit`,{
            userToken,realname, surname, age, height, weight,gender}
        ).then(res=>{
            console.log("เเก้ไขสำเร็จ");
            console.log(res.data);
            setUserInfo(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const select = (data) => {
        setData(data)
        console.log(data)
    }

    const listact = () =>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/listact`,{
            
        })
        .then(res=>{
            console.log(res.data[0].activity)
            setActivity(res.data[0].activity) 
        })
        .catch(err=>{
            console.log(err);
        })
        setIsLoading(false);
    }

    const listmenu = () =>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/listmenu`,{
            
        })
        .then(res=>{
            console.log(res.data[0].food)
            setMenu(res.data[0].food) 
        })
        .catch(err=>{
            console.log(err);
        })
        setIsLoading(false);
    }

    const deletes = () => {
        setUserToken(null);
        axios.post(`${baseUrl}/api/deletes`,{
            userToken
        })
        .then(res=>{
            
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const cal = (ing, por) =>{
        axios.post(`${baseUrl}/api/calCal`,{
            userToken, ing, por
        })
        .then(res=>{
            console.log(res.data.result)
            setKcal(res.data.result)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const savecal = (name, foodname, result) => {
        axios.post(`${baseUrl}/api/savefoodcal`,{
            name, foodname, result
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const showcal = (name) =>{
        axios.post(`${baseUrl}/api/returncalfood`,{
            name
        })
        .then(res=>{
            
            setFoodInfo(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const delfood = (name, date, time) =>{
        axios.post(`${baseUrl}/api/deletesfood`,{
            name, date, time
        })
        .then(res=>{
            showcal(userInfo.name)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const calpow = (nameact, mets, minutes, weight) =>{
        axios.post(`${baseUrl}/api/calAct`,{
            nameact, mets, minutes, weight
        })
        .then(res=>{
            console.log(res.data.result)
            setPower(res.data.result)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const isLoggedIn = async() =>{
        try{
        setIsLoading(true);
        let userToken = await AsyncStorage.getItem('userToken');
        setUserToken(userToken);
        setIsLoading(false);
        }
        catch(e){
            console.log('isLogged in error ${e}');
        }
    }

    useEffect(() => {
        isLoggedIn();
        showcal(userInfo.name);
        listmenu();
        listact();
    }, [])


    return(
        <AuthContext.Provider value={{login, isLoggedIn, logout, register, edit, select, listmenu, listact, deletes, cal, savecal, showcal, delfood, isLoading, userToken, userInfo, status, data, menu, activity, kcal, foodInfo}}>
            {children}
        </AuthContext.Provider>
    )
}