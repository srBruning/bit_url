import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native'
import NavBar from '../../components/login/NaveBar'
import RowLogin from '../../components/login/RowLogin'
import { ImgLogo,  H1Label, LinkLabel, BtnArea
} from './styles'
import { Text,  StyleSheet } from 'react-native';
import InputPadrao from '../../components/InputPadrao';
import BtnPrimary from '../../components/BtnPrimary';
import BtnSecondary from '../../components/BtnSecondary';
import Api from '../../Api';
import {validaUserResponse} from '../../dao/UserDao';

import { Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';

const Fromulario =  () => {
    
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
            <div className="container-box title">
                <h3 className="switch to-sign-in tagline">
                    Login
                </h3>
                <br />
            </div>
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

export default () => {
    return (
<div>
    <NavBar/>
    <Container>
        <RowLogin>
            <Fromulario></Fromulario>
        </RowLogin>
        <div style={{height:100, marginBottom:0 }}></div>
        <Row >
            <div>
                <h2 className="heading-h2 heading-h2--center">
                    Não conheço QR Codes. O que devo saber?
                </h2>
                <p className="paragraph--center">
                    Descubra o que você precisa saber para começar.
                </p>
            </div>  
       </Row>
        <Row>
            <button className="btn" data-toggle="collapse">
            <h3>O que é um QR Code?</h3>
            </button>
            <p>O QR Code é uma versão bidimensional do código de barras, composto de padrões de pixels em preto e branco. 
            A Denso Wave pertence à Denso, uma fornecedora da Toyota, e desenvolveu os códigos QR para identificação de componentes, 
            a fim de acelerar os processos logísticos de sua produção de automóveis. Agora, com o uso generalizado de smartphones, 
            o QR Code encontrou seu caminho para o mercado. "QR" significa "Quick Response" (Resposta Rápida), 
            o que se refere ao acesso instantâneo às informações ocultas no Code (código).</p>                    
        </Row>  
        <Row>
            <button className="btn" data-toggle="collapse">
            <h3>Quais são os benefícios de usar QR Codes?</h3>
            </button>
            <p>Os QR Codes estão ganhando popularidade por causa da sua multiplicidade. 
            Você pode usá-los para obter feedback a fim de melhorar seus produtos e serviços, 
            aumentar o envolvimento do cliente com imagens ou vídeos e até divulgar seus negócios com eventos e cupons. 
            Tudo isso com apenas um scan!</p>
        </Row>  
        <Row>
            <button className="btn" data-toggle="collapse">
            <h3>Como posso escanear um QR Code?</h3>
            </button>
            <p>Isso depende do seu dispositivo, alguns celulares já vêm com um leitor ou scanner integrado. 
            Abra a câmera do seu smartphone e deixe-a apontada em direção ao QR Code por alguns segundos até uma 
            notificação aparecer. Se nada acontecer, veja nas configurações se o leitor de QR Codes está ativado. 
            Ainda não funciona? Não se preocupe, apenas instale um QR Code scanner da sua loja de aplicativos.</p>
        </Row>  
    </Container>
</div>

    )
}