import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

import axios from "axios";

const baseUrl = "http://10.0.2.2:5500"

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${userToken}` }
    };

    const login = (name,password) =>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/login`,{
            name,password
        })
        .then(res=>{
            console.log(res.data.token);
            console.log(res.data);
            setUserToken(res.data.token);
            setUserInfo(res.data.userinfo);
        })
        .catch(err=>{
            console.log(err);
        });
        setIsLoading(false);
    }

    const register = (name, password,realname,surname, age, weight, height) =>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/register`,{
        name, password,realname,surname,age, weight, height
        })
        .then(res=>{
            console.log(res.data);
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
    const edit = (realname,surname,age,height,weight)=>{
        setIsLoading(true);
        axios.post(`${baseUrl}/api/edit`,{
            userToken,realname, surname, age, height, weight}
        ).then(res=>{
            console.log("เเก้ไขสำเร็จ");
            setUserInfo(res.data);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
        setIsLoading(false);
    }

    useEffect(() => {
        isLoggedIn();
    }, [])
    

    return(
        <AuthContext.Provider value={{login, logout, register, isLoading, userToken, userInfo,edit}}>
            {children}
        </AuthContext.Provider>
    )
}