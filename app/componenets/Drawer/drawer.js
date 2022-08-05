import * as React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, ImageBackground
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGauge } from '@fortawesome/free-solid-svg-icons/faGauge'
import { faIndent } from '@fortawesome/free-solid-svg-icons/faIndent'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'

import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Incident from '../IncidentView/incidentview';
import images from '../Images/image'
import { LinearGradient } from 'react-native-svg';
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image source={images.worldvision_drawer} style={{ width: 250, height: 100, top: -5 }}></Image>

      <DrawerItemList {...props} />

      <View style={styles.logout}>

        <DrawerItem
          labelStyle={styles.lablestyle}

          label="Logout"
          onPress={() => props.navigation.navigate('Login')}
          icon={({ color, size }) => (
            <FontAwesomeIcon icon={faArrowRightFromBracket}
              size={25}
              color={'gray'}
            />
          )}

        />
      </View>

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (

    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#F37021',
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
            backgroundColor: '#f27b1a',
            height: 50,
          },
          drawerLabelStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 17,
            justifyContent: 'center',
            fontWeight: 'bold'

          },

          headerTintColor: 'white',

          headerTitleStyle: {

            fontFamily: 'Poppins-Regular',
            fontWeight: 'bold'



          },
          drawerIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faGauge}
              size={25}
              color={'gray'}

            />
          ),
        }}
      />
      <Drawer.Screen name="Form" component={Form}
        options={{
          title: 'Incidentlog',
          headerStyle: {
            backgroundColor: '#f27b1a',
            height: 50
          },
          drawerLabelStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 17,
            justifyContent: 'center',
            fontWeight: 'bold'

          },

          headerTintColor: 'white',

          headerTitleStyle: {
            fontFamily: 'Poppins-Regular',
            fontWeight: 'bold'
          },
          drawerIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faIndent}
              size={25}
              color={'gray'}

            />
          ),

        }} />
      <Drawer.Screen name="Incident" component={Incident}

        options={{
          title: 'IncidentView',
          headerStyle: {
            backgroundColor: '#f27b1a',
            height: 50
          },

          drawerLabelStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 17,
            justifyContent: 'center',
            fontWeight: 'bold'

          },

          headerTintColor: 'white',

          headerTitleStyle: {
            fontFamily: 'Poppins-Regular',
            fontWeight: 'bold'
          },

          drawerIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUsers}
              size={25}
              color={'gray'}

            />
          ),
        }} />



    </Drawer.Navigator>
  );
}

// export default function App() {
//   return (

//     <MyDrawer />

//   );
// }
const styles = StyleSheet.create({

  lablestyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    justifyContent: 'center',
    fontWeight: 'bold'


  },
  logout: {
    marginTop: 380
  }
});
