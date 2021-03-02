import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

const validaToken = async ()=>{
    const token = await Api.currentToken();
    if(token ){
        const json = await Api.checkToken(token);
   
        if(!json.token){
            await Api.removeToken();
            return false;
        }
        // salva o token
        await Api.guardaToken(json.token);
        return true;
    }
    return false;
}
export default () => {
    
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async  ()=>{

            if( await validaToken()){
                // goto home
                navigation.reset({
                    routes:[{name: 'Home'}]
                })
            }else{
                navigation.navigate('SignIn');
            }

        }
        checkToken();
    },[]);
    return (
        <Container>
            <LoadingIcon size='large' color='#FFFFFF' />       
        </Container>
    );
}