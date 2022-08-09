import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './app/componenets/Login/login';
import Form from './app/componenets/Form/Form';
import Dashboard from './app/componenets/Dashboard/Dashboard';
import Incident from './app/componenets/IncidentView/incidentview';
import MyDrawer from './app/componenets/Drawer/drawer';
import store from '../WV-CMCP-MOBILE/app/Redux/Store';
import Notification from './app/componenets/Notification/Notification';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Form"
            component={Form}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Incident View"
            component={Incident}
            options={{headerShown: false}}
          />

          <Stack.Screen name="Notification" component={Notification} />

          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
