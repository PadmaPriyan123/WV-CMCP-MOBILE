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

import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Incident from '../IncidentView/incidentview';
import images from '../Images/image'
import { LinearGradient } from 'react-native-svg';



function CustomDrawerContent(props) {
  return (
    <>

      <DrawerContentScrollView {...props}>
        <Image source={images.worldvision_drawer} style={{ width: 250, height: 120, top: -5 }}></Image>

        <DrawerItemList {...props} />

        <View style={styles.logout}>

          <DrawerItem
            labelStyle={styles.lablestyle}

            label="Logout"
            onPress={() => props.navigation.navigate('Login')}
            icon={({ color, size }) => (
              <FontAwesomeIcon icon={faArrowRightFromBracket}
                size={25}
                color={'#fff'}
              />
            )}

          />
        </View>

      </DrawerContentScrollView>
    </>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <>

      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#cac4bb',
            width: 240,
          },
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#ff6b00',
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props}
        />}
      >
        

        <Drawer.Screen name="Dashboard" component={Dashboard}
          labelStyle={styles.lablestyle}

          options={{
            title: 'Dashboard',
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
            // headerRight: () => (
            //     <TouchableOpacity>
            //       <FontAwesomeIcon icon={faBell}  size={25} color="white" />
            //     </TouchableOpacity>
            //   ),
            drawerIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faChartLine}
                size={25}
                color={'#fff'}
              />
            ),
          }}
        />
        <Drawer.Screen name="Form" component={Form}
          options={{

            title: 'Incident Log',
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
            drawerIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faIndent}
                size={25}
                color={'#fff'}

              />
            ),

          }} />
        <Drawer.Screen name="Incident" component={Incident}

          options={{
            title: 'Incident View',
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

            drawerIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUsers}
                size={25}
                color={'#fff'}

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

  },
  logout: {
    marginTop: 320,

  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
