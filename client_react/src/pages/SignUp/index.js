import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import {BtnArea} from './styles'
import { Container, Row, Button, Form, Image} from 'react-bootstrap';
import NaveBar from '../../components/login/NaveBar';
import RowLogin from '../../components/login/RowLogin';
import { Text,  StyleSheet } from 'react-native';
import InputPadrao from '../../components/InputPadrao';
import BtnPrimary from '../../components/BtnPrimary';
import BtnSecondary from '../../components/BtnSecondary';
import Api from '../../Api';

import {validaUserResponse} from '../../dao/UserDao';

const Fromulario =  () => {
    
    const [nomeField, setNomeField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [rePasswordField, setRePasswordField] = useState('');
    const [validated, setValidated] = useState(false);

    const navigation = useNavigation();
    
    const handleSingUpClike = async (event) => {
        
        setValidated(true);
        const form = event.currentTarget;
        console.log(form)
        event.preventDefault();
        event.stopPropagation();
        if(passwordField != rePasswordField){
            //...
        }
        if (!form.checkValidity()) {
          return ;
        }        
 
        const json = await Api.signUp(nomeField, emailField,  passwordField);
        const indValido = await validaUserResponse(json);
        if(indValido){
            // Goto home
            navigation.reset({routes:[{name: 'Home'}]})
        }else{
            alert(json.message)
        }
      
    }
    const handleSingClike = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }
    const handleChangeField = (event)=>{
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        if(fieldName == 'email')
            setEmailField(fleldVal);
        else  if(fieldName == 'password')
            setPasswordField(fleldVal); 
        else  if(fieldName == 'fullname')
            setNomeField(fleldVal); 
        else  if(fieldName == 'repassword'){
            
            setRePasswordField(fleldVal); 
        }
    }

    return (
        <div> 
                <div className="container-box title">
                    <h3 className="switch to-sign-in tagline">
                        Inscreva-se e comece a encurtar
                    </h3>
                    <br />
                </div>    
                    
                <Form noValidate validated={validated} onSubmit={handleSingUpClike}>       
                    <Form.Group className="mb-3" value={nomeField} onChange={t=>handleChangeField(t) }>
                        <Form.Control placeholder="Nome Completo"
                            aria-label="Nome Completo" aria-describedby="basic-addon1"
                            name="fullname" required
                        />
                    </Form.Group> 
                    <Form.Group className="mb-3" value={emailField} onChange={t=>handleChangeField(t)}>
                        <Form.Control placeholder="E-mail"
                            aria-label="E-mail" aria-describedby="basic-addon1"
                            name="email"  required
                        />
                    </Form.Group> 
                    <Form.Group className="mb-3" value={passwordField} onChange={t=>handleChangeField(t)} method="post">
                        <Form.Control placeholder="Senha"
                            aria-label="Senha" aria-describedby="basic-addon1"
                            name="password" type="password" required
                        />
                    </Form.Group> 
                    <Form.Group className="mb-3" value={rePasswordField} onChange={t=>handleChangeField(t)}>
                        <Form.Control placeholder="Confirmar Senha"
                            aria-label="Confirmar Senha" aria-describedby="basic-addon1"
                            name="repassword" type="password" required
                        />
                        <Form.Control.Feedback type="invalid">
                            { "As senhas não são iguais. Tente novamente."}
                        </Form.Control.Feedback>
                    </Form.Group>    

                    <BtnArea>
                        {/* Submit Button  */}       
                        <Button type="submit" variant="primary" disabled={passwordField==null || passwordField== '' || passwordField!=rePasswordField}>
                            Registre-se
                        </Button>
                        {/* Divider Text */}
                        <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                            <div className="border-bottom w-100 ml-5"></div>
                            <span className="px-2 small text-muted font-weight-bold text-muted">ou</span>
                            <div className="border-bottom w-100 mr-5"></div>
                        </div>
                        <Button variant="secondary" onClick={handleSingClike}>Login</Button>
                        
                    </BtnArea>
                </Form>
        </div>
    );
}

export default () => {
    return (
<div>
    <NaveBar/>
    <Container>
        <RowLogin >
            <Fromulario></Fromulario>
        </RowLogin>

    </Container>
</div>

    )
}

