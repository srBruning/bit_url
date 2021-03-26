import AsyncStorage from '@react-native-async-storage/async-storage';
import { add } from 'react-native-reanimated'; 
import cookie from 'react-cookies'

// const BASE_API ="http://localhost:3737";
const BASE_API ="https://dibr.cc"; 

const _currentToken = async()=>{
    let token = await cookie.load('token');
    if(token)
        return token;
    
    token = await AsyncStorage.getItem('token');
    await cookie.save('token', token, { path: '/' });
    return token;
}

const _guardaToken = async(token)=>{
    await cookie.save('token', token, { path: '/' });
    await AsyncStorage.setItem('token', token);
}
const _removeToken = async()=>{
    await cookie.remove('token', { path: '/' });
    await AsyncStorage.removeItem('token');
}

const doPost =  async (body, path, token) => {
    const reqParam={
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify(body) 
    };
    const resp = await fetch(`${BASE_API}${path}`, reqParam);
    console.log("Response: ", resp);
    if(resp.json){
        console.log("status: "+resp.status);
        const json = await resp.json();
        return json;
    }

    
    return resp;
}

const doGet =  async (path, token) => {
    const reqParam={
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
    };
    const resp = await fetch(`${BASE_API}${path}`, reqParam);
    if(resp.json){
        const json = await resp.json();
        console.log("status: "+resp.status);
        return json;
    }
    return resp;
}

export default {
    BASE_API, 
    checkToken: async (token) => {     
        return await doGet('/api/auth/refresh', token);
    },
    signIn: async (user_name, password) => {
        return  await doPost({user_name, password}, '/api/singin');
    },
    logout: async (email, password) => {
        const token = await _currentToken();
        return  await doPost({token}, '/api/auth/logout');
    },
    signUp: async (name, email, password) => {
        return await doPost({name, user_name:email, password}, '/api/user');
    },
    buscarURLs: async (token) => {     
        return await doGet('/api/url', token);
    },
    novoURL: async (token, url, slug) => {     
        return await doPost({url, slug}, '/api/url', token);
    },
    currentToken: async () => {     
        return await _currentToken();
    },
    guardaToken: async (token) => {     
        return await _guardaToken(token);
    },
    removeToken: async () => {     
        return await _removeToken();
    },
    checkSlug: async (slug) => {
        const token = await _currentToken();   
        return await doGet('/api/url/'+slug, token);
    }

};