import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './app/componenets/Login/login';
import Form from './app/componenets/Form/Form';
import Dashboard from './app/componenets/Dashboard/Dashboard';
import Incident from './app/componenets/IncidentView/incidentview';
import MyDrawer from './app/componenets/Drawer/drawer';
import Notification from './app/componenets/Notification/Notification';
import store from '../WV-CMCP-MOBILE/app/Redux/Store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import Victims from './app/componenets/Form/IncidentLog/victim';


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

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              title: 'NOTIFICATION',
              headerStyle: {
                backgroundColor: '#ff6b00',
                height: 50,
                fontsize: 17,
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontFamily: 'Lato-Bold',
                color: '#fff',
              },
            }}
          />

          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="FirstRoute"
            component={Victims}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>

        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
        />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
