import React, {useState, useContext, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, FormControl, Button, 
    Nav, Table, Navbar, Form, OverlayTrigger, Tooltip, Card} from 'react-bootstrap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from '../../components/login/NaveBar'

export default () => {
     
    const [addrField, setAddrField] = useState('');
    const [slugField, setSlugField] = useState('');
    const [urlList, setUrlList] = useState([{addr:"http://test.com", slug:"", access: 0}]);
    const [fieldValidation, setFieldValidation] = useState({slug: true});
    const navigation = useNavigation();

    const buscarURLs = async ()=>{
        const token = await AsyncStorage.getItem('token'); 
        if(token ){
            const URLs = await Api.buscarURLs(token);
            setUrlList(URLs);
            return true;
        }
        return false;
    }
    const novoURL = async (event)=>{
        if(addrField===''){
            alert('Informe um URL');
            return;
        }
        if(slugField===''){
            alert('Informe um Slug');
            return;
        }
        const token = await AsyncStorage.getItem('token'); 
        if(token ){
            const ret = await Api.novoURL(token, addrField, slugField);
            console.log('ret');
            console.log(ret);
            if(ret.message)
                alert(ret.message);
            if(ret.fields_errors){
                alert(ret.fields_errors[0].message);
            }
            buscarURLs();
            return true;
        }
        return false;
    }

    useEffect(()=>{
        buscarURLs();
    },[]);

    const handleChangeField = (event)=>{
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        if(fieldName == 'URL'){
            setAddrField(fleldVal);
            console.log(slugField)
            if(slugField===''){
                setSlugField(makeid(5));
            }
        }else  if(fieldName == 'slug'){
            setSlugField(fleldVal); 
            checkSlug(fleldVal);
        }
    }

    const makeid = (length)=> {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
 
    const onSingOut = async ()=>{
        await Api.removeToken();
        navigation.navigate('SignIn');
    }

    const checkSlug = async(fleldVal)=>{
        const ret = await Api.checkSlug(fleldVal);
        if(ret && ret.isRegistered){
            setFieldValidation({...fieldValidation, ...{slug: false}})
        }else{
            setFieldValidation({...fieldValidation, ...{slug: true}})
        }
    }

    return (
        <div>
        <NavBar  >
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <Button variant="outline-success" onClick={onSingOut}>Sair</Button>
            </Form>
            </Navbar.Collapse>
        </NavBar>
        
        <Container>
            <section className="url-shortener">
            <h2 className="title mb-0">Encurte seu link:</h2>
            <form>
                <Row >
                    <Col >
                        <InputGroup className="mb-3" value={addrField} onChange={t=>handleChangeField(t )}>
                            <FormControl placeholder="cole sua url aqui"
                                aria-label="ole sua url aqui" aria-describedby="basic-addon1"
                                name="URL"
                            />
                        </InputGroup>
                    </Col>
                </Row> 
                <Row>
                    <Col sm="10">
                        <InputGroup className="mb-3" value={slugField}  >
                            <FormControl placeholder="apelido" value={slugField} onChange={t=>handleChangeField(t )}
                                aria-label="apelido" aria-describedby="basic-addon1"
                                name="slug" style={ fieldValidation.slug ? {}: {color:'#f00'}}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="2">
                        <Button variant="primary" onClick={novoURL}>Encurtar link</Button>{' '}
                    </Col>
                </Row>
            </form>
            </section>

            <Row>
            { urlList.map(
                    (item) => {
                        const url = Api.BASE_API+'/'+item.slug;
                    return (
                        <Card key={item.slug} className="card col-12 col-sm-6 col-md-6 col-lg-4"> 
                       
                        <div className="card-body">
                            <h5 className="card-title">{item.addr}</h5>
                            <a className="card-text" href={url}>{url}</a>
                        </div>
                        <div className="card-body">
                            <p><b>Acessos:</b> {item.access}</p>
                        </div>
                        <div className="card-body">
                            <Button className="card-link" 
                                onClick={() => {navigator.clipboard.writeText(url)}}
                            >
                                copy
                            </Button>
                        </div>
                        </Card> 
                    );
                    }
                )
            }
            </Row>            
        </Container>
        </div>
    );
}
 