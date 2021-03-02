
import React from 'react';
import Api from '../Api'

export const validaUserResponse = async (json)=>{
    console.log(json)
    console.log(json.token)
    if(!json.token){
        return false;
    }
    // salva o token
    await Api.guardaToken(json.token);
    console.log('#.4');
    const token = await Api.currentToken();
    return true;
}

export const validaToken = async (userDispatch)=>{
    const token = await Api.currentToken();
    if(token ){
        json = await Api.checkToken(token);
        return await validaUserResponse(json, userDispatch);
    }
    return false;
}

export const validarSingUpData = (nome, email, senha)=>{
    if(nameField =='') return 'Inform seu nome';
    
    if(emailField =='')return 'Inform seu e-mail';
        
    if(passwordField =='') return 'Inform uma senha valida';

    return false;
}

