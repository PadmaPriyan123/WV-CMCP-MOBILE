import * as React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, ImageBackground, StatusBar
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine'
import { faIndent } from '@fortawesome/free-solid-svg-icons/faIndent'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMenu } from '@fortawesome/free-solid-svg-icons';

import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Incident from '../IncidentView/incidentview';
import images from '../Images/image'
import Login from '../Login/login';
import { LinearGradient } from 'react-native-svg';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

// const headerOptions = {
//   title: 'Task List',
//   drawerIcon: ({ focused, size, color }) => <Ionicons name="ios-pizza" color="red" size={24} />,
// };

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <Image source={images.worldvision_drawer} style={{ width: 250, height: 120, top: -5 }}></Image>
        <DrawerItemList {...props} />

        <View style={styles.logout}>
          <DrawerItem
            labelStyle={styles.logoutlablestyle}

            label="LOGOUT"
            onPress={() => props.navigation.navigate('Login')}
            icon={({ color, size }) => (
              <FontAwesomeIcon icon={faArrowRightFromBracket}
                size={25}
                color={'#ddd'}
              />
            )}

          />
        </View>

      </DrawerContentScrollView>
    </>
  );
}


const Badge = ({count})=>(
  <View style ={styles.circle}>
    <Text style={styles.count}>{count}</Text>
  </View>
);

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#ff6b00',
            width: 240,
          },
          drawerActiveTintColor: '#ff6b00',
          drawerActiveBackgroundColor: '#fff',
        }}
        drawerContentOptions={{
          activeTintColor : '#ff6b00',
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props}
        />}
      >
      
        <Drawer.Screen name="Dashboard" component={Dashboard}
          labelStyle={styles.lablestyle}
          options={{
            title: 'DASHBOARD',
            headerStyle: {
              backgroundColor: '#ff6b00',
              height: 50,
              color: '#fff'
            },
            drawerLabelStyle: {
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              justifyContent: 'center',
            },

            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
              color: '#fff',
          
            },
            headerRight: () => (
                <TouchableOpacity  onPress={() => props.navigation.navigate('Login')}>
                  <Badge count={4}/>
                  <FontAwesomeIcon icon={faBell} style={styles.BellIcon}  size={22} color="white" />
              
                </TouchableOpacity>
              ),
            drawerIcon: ({color,index}) => (
              <FontAwesomeIcon icon={faChartLine}
                size={25}
                color={'#ddd'}
              />
            ),
          }}
        />
        <Drawer.Screen name="Form" component={Form}
          options={{

            title: 'INCIDENT LOG',
            headerStyle: {
              backgroundColor: '#ff6b00',
              height: 50,
            },
            drawerLabelStyle: {
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              justifyContent: 'center',
            },

            headerTintColor: 'white',

            headerTitleStyle: {
              fontFamily: 'Lato-Bold',

            },
            headerRight: () => (
              <TouchableOpacity  onPress={e => console.log('pressed')}>
                <Badge count={4}/>
                <FontAwesomeIcon icon={faBell} style={styles.BellIcon} size={22} alignSelf='center'  color="white" />
              </TouchableOpacity>
            ),
            drawerIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faIndent}
                size={25}
                color={'#ddd'}
              />
            ),

          }} />
        <Drawer.Screen name="Incident" component={Incident}

          options={{
            title: 'INCIDENT VIEW',
            headerStyle: {
              backgroundColor: '#ff6b00',
              height: 50
            },

            drawerLabelStyle: {
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              justifyContent: 'center',
            },

            headerTintColor: 'white',

            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
            },
            headerRight: () => (
              <TouchableOpacity>
                 <Badge count={4}/>
                <FontAwesomeIcon icon={faBell}  style={styles.BellIcon}  size={22} color="white" />
              </TouchableOpacity>
            ),
            drawerIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUsers}
                size={25}
                color={'#ddd'}
              />
            ),
          }} />
      </Drawer.Navigator>

    </>
  )
}


const styles = StyleSheet.create({

  lablestyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    justifyContent: 'center',
    marginLeft: 10,

  },
  logoutlablestyle :{
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    justifyContent: 'center',
    
  },
  logout: {
    marginTop: 320,
    marginLeft: 2,
  },
  BellIcon:{
    marginRight: 20,
  },
 
  circle:{
    width:20,
    height:20,
    borderRadius:18, 
    marginTop: -5,
    backgroundColor:'red',

   },
   count:{
    color:'#FFF',
   marginTop: 2,
    marginLeft: 6,
    fontFamily: 'Lato-Bold',
  },
});
