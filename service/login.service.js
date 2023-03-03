import AsyncStorage from "@react-native-async-storage/async-storage";
import { postApi } from "../api/api-non-login"
import { baseApi } from "./baseApi";

 export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('data', jsonValue)
    } catch (e) {
      console.log('error')
    }
  }
  
  export const getData = async () => {
      const jsonValue = await AsyncStorage.getItem('data')
      if(jsonValue){
        return JSON.parse(jsonValue)
      }  
  }
  
  export const getToken = () => {
    return getData().then(data => data.token)
  }
  
  export const getRole = () => {
    return getData().then(data => data.codeRole)
  }
  
  export const getId = () => {
    return getData().then(data => data.id)
  }

const loginUser = (body) => {
    return postApi(`${baseApi}/login`, body)
}

export { loginUser }