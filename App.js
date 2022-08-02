
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/componenets/Login/login'
import Form from './app/componenets/Form/Form';
import Dashboard from './app/componenets/Dashboard/Dashboard';
import Incident from './app/componenets/IncidentView/incidentview';
import  Drawer  from './app/componenets/Drawer/drawer';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />

        <Stack.Screen name="Form" component={Form}
          options={{ headerShown: false }} />

        <Stack.Screen name="Incident View" component={Incident}
          options={{ headerShown: false }} />

        
        <Stack.Screen name="Drawer" component={Drawer}
          options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
