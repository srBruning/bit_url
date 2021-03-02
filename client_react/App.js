import React from 'react';  
import MainStack from './src/stacks/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { registerServiceWorker } from './serviceWorker'
registerServiceWorker();

function App() {
  return (  
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer> 
  );
}


 

export default   App;
