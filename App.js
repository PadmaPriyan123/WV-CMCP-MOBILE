import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './app/componenets/Login/login';
import Form from './app/componenets/Form';
import Dashboard from './app/componenets/Dashboard/Dashboard';
import Incident from './app/componenets/IncidentView/incidentview';
import MyDrawer from './app/componenets/Drawer/drawer';
import Notification from './app/componenets/Notification/Notification';
import store from '../WV-CMCP-MOBILE/app/Redux/Store';
import Viewcard from './app/componenets/Viewcard/viewcard';
import UserProfileView from './app/componenets/Userprofile/Userprofile';
import Victim from './app/componenets/Form/IncidentLog/victim';
import Complaints from './app/componenets/Form/IncidentLog/complaint';
import Legal from './app/componenets/Form/legal';
import Service from './app/componenets/Form/service';
import Mhpss from './app/componenets/Form/mhpss';
import CaseAssignment from './app/componenets/IncidentView/CaseAssignment';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

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
            name="Incident View"
            component={Incident}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="UserProfileView"
            component={UserProfileView}
            options={{
              title: 'User profile',
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
            name="Viewcard"
            component={Viewcard}
            options={{
              title: 'Incident Log',
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
            name="victim"
            component={Victim}
            options={{
              title: 'Victim',
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
            name="CaseAssignment"
            component={CaseAssignment}
            options={{
              title: 'Case Assignment',
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
            name="complaints"
            component={Complaints}
            options={{
              title: 'Complaints',
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
            name="legal"
            component={Legal}
            options={{
              title: 'Legal',
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
            name="service"
            component={Service}
            options={{
              title: 'Service',
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
            name="mhpss"
            component={Mhpss}
            options={{
              title: 'MHPSS',
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
