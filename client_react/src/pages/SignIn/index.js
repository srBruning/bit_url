import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native'
import { ImgLogo,  H1Label, LinkLabel, BtnArea
} from './styles'
import { Text,  StyleSheet } from 'react-native';
import InputPadrao from '../../components/InputPadrao';
import BtnPrimary from '../../components/BtnPrimary';
import BtnSecondary from '../../components/BtnSecondary';
import Api from '../../Api';
import {validaUserResponse} from '../../dao/UserDao';

import { Container, Row, Col, InputGroup, FormControl, Button, 
    Nav, Table, Navbar, Form} from 'react-bootstrap';

export default () => {
    
    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();
    
    const handleSingClike = async () => {
        
        if(usernameField != '' && passwordField != ''){
            const json = await Api.signIn(usernameField, passwordField);
            if(await validaUserResponse(json)){
                // Goto home
                navigation.reset({routes:[{name: 'Home'}]})
            }else{
                alert("E-mail e/ou senha invalidos")
            }
        }else{
            alert("Informe email e senha!")
        }
    }
    const handleSingUpClike = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    const handleChangeField = (event)=>{
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        if(fieldName == 'email')
            setUsernameField(fleldVal);
        else  if(fieldName == 'password')
            setPasswordField(fleldVal); 
    }

    return (
        <Container>
            <ImgLogo source={require('../../assets/gift_box.png')}
            />
            <H1Label>Login</H1Label>

 
            <InputGroup className="mb-3" value={usernameField} onChange={t=>handleChangeField(t )}>
                <FormControl placeholder="Nome de Usuário"
                    aria-label="Nome de Usuário" aria-describedby="basic-addon1"
                    name="email"
                />
            </InputGroup> 
            <InputGroup className="mb-3" value={passwordField} onChange={t=>handleChangeField(t )}>
                <FormControl placeholder="Digite sua senha"
                    aria-label="Digite sua senha" aria-describedby="basic-addon1"
                    name="password" type="password"
                />
            </InputGroup>

            <BtnArea>
                <Button variant="primary" onClick={handleSingClike}>Login</Button>
                <div className="login-or" style={{ position: 'relative',fontSize: '18px',color: '#aaa',marginTop: '10px', marginBottom: '10px',
                    paddingTop: '10px', paddingBottom: '10px' }}>
                    <hr className="hr-or" style={{backgroundColor: '#cdcdcd', height: '1px', marginTop: '0px', marginBottom: '0px' }}/>
                    
                </div>
                <Button variant="secondary" onClick={handleSingUpClike}>Registre-se</Button>
                
            </BtnArea>
        </Container>
    );
}

