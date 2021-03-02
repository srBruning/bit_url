import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native'
import {Container, ImgLogo,  H1Label, LinkLabel, BtnArea
} from './styles'
import { Text,  StyleSheet } from 'react-native';
import InputPadrao from '../../components/InputPadrao';
import BtnPrimary from '../../components/BtnPrimary';
import BtnSecondary from '../../components/BtnSecondary';
import Api from '../../Api';

import {validaUserResponse} from '../../dao/UserDao';

export default () => {
    
    const [nomeField, setNomeField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    const handleSingUpClike = async () => {

        if(!nomeField || nomeField === ''){
            alert("Informe seu nome: "+nomeField);
            return;
        }
        if(!emailField || emailField === ''){
            alert("Informe seu E-mail");
            return;
        }
        if(!passwordField || passwordField === ''){
            alert("Informe a senha.");
            return;
        }
 
        const json = await Api.signUp(nomeField, emailField,  passwordField);
        const indValido = await validaUserResponse(json);
        console.log("validaUserResponse: "+indValido);
        if(indValido){
            // Goto home
            navigation.reset({routes:[{name: 'Home'}]})
        }else{
            alert("Erro no cadastro")
        }
      
    }
    const handleSingClike = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    return (
        <Container>
            <ImgLogo source={require('../../assets/gift_box.png')}
            />
            <H1Label>Registrar</H1Label>

            <InputPadrao txtLabel="Nome Completo" placeholder="Digite seu nome"
                    value={nomeField} onChangeText={t=>setNomeField(t)} />  
            <InputPadrao txtLabel="E-Mail" placeholder="Digite seu e-mail"
                    value={emailField} onChangeText={t=>setEmailField(t)} />  
            <InputPadrao txtLabel="Senha" placeholder="Digite sua senha" password={true}
                    value={passwordField} onChangeText={t=>setPasswordField(t)} /> 
            
            <BtnArea>
                <BtnPrimary txtLabel="Registre-se" onPress={handleSingUpClike}></BtnPrimary>        
                <BtnSecondary txtLabel="Login" onPress={handleSingClike}></BtnSecondary>   
            </BtnArea>
        </Container>
    );
}

