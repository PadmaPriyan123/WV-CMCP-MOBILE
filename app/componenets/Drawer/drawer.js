import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ImageBackground,
  StatusBar,
  Alert,
  Button,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChartLine} from '@fortawesome/free-solid-svg-icons/faChartLine';
import {faIndent} from '@fortawesome/free-solid-svg-icons/faIndent';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import {
  faBell,
  faEllipsisVertical,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {faMenu} from '@fortawesome/free-solid-svg-icons';
import Feather from 'react-native-vector-icons/Feather';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Incident from '../IncidentView/incidentview';
import images from '../Images/image';
import Login from '../Login/login';
import {LinearGradient} from 'react-native-svg';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';

// const headerOptions = {
//   title: 'Task List',
//   drawerIcon: ({ focused, size, color }) => <Ionicons name="ios-pizza" color="red" size={24} />,
// };

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <Image
          source={images.worldvision_drawer}
          style={{width: 250, height: 120, top: -5}}></Image>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
}

const Badge = ({count}) => (
  <View style={styles.circle}>
    <Text style={styles.count}>{count}</Text>
  </View>
);

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const navigation = useNavigation();
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#ffffff',
            width: wp('68%'),
          },
          drawerActiveTintColor: '#ffFFFF',
          drawerActiveBackgroundColor: '#ff6b00',
        }}
        drawerContentOptions={{
          activeTintColor: '#ff6b00',
        }}
        useLegacyImplementation
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          labelStyle={styles.lablestyle}
          options={{
            title: 'DASHBOARD',
            headerStyle: {
              backgroundColor: '#ff6b00',
              height: 50,
            },
            drawerLabelStyle: {
              fontFamily: 'Lato-Bold',
              fontSize: 18,
              justifyContent: 'center',
            },

            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
            },
            headerRight: () => (
              <View style={styles.DotHeader}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <FontAwesomeIcon
                    icon={faBell}
                    style={styles.BellIcon}
                    size={22}
                    color="white"
                  />
                  <Badge count={4} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    size={22}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            ),
            drawerIcon: ({focused}) => (
              <FontAwesomeIcon
                icon={faChartLine}
                size={focused ? 33 : 25}
                color={focused ? '#fff' : '#000'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Form"
          component={Form}
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
              <View style={styles.DotHeader}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <FontAwesomeIcon
                    icon={faBell}
                    style={styles.BellIcon}
                    size={22}
                    color="white"
                  />
                  <Badge count={4} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    size={22}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            ),

            drawerIcon: ({focused}) => (
              <FontAwesomeIcon
                icon={faIndent}
                size={focused ? 33 : 25}
                color={focused ? '#fff' : '#000'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Incident"
          component={Incident}
          options={{
            title: 'INCIDENT VIEW',
            headerStyle: {
              backgroundColor: '#ff6b00',
              height: 50,
            },

            drawerLabelStyle: {
              fontSize: 15,
              justifyContent: 'center',
            },

            headerTintColor: 'white',

            headerTitleStyle: {
              fontFamily: 'Lato-Bold',
            },
            headerRight: () => (
              <View style={styles.DotHeader}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <FontAwesomeIcon
                    icon={faBell}
                    style={styles.BellIcon}
                    size={22}
                    color="white"
                    onPress={() => alert('hi')}
                  />
                  <Badge count={4} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    size={22}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            ),
            drawerIcon: ({focused}) => (
              <FontAwesomeIcon
                icon={faUsers}
                size={focused ? 33 : 25}
                color={focused ? '#fff' : '#000'}
              />
            ),
            drawerIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faUsers} size={25} color="#000" />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  lablestyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    color: '#ffffff',
    justifyContent: 'center',
    marginLeft: 10,
  },
  logoutlablestyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    justifyContent: 'center',
  },
  logout: {
    marginTop: 320,
    marginLeft: 2,
  },
  BellIcon: {
    marginRight: 10,
    circle: 10,
  },
  count: {
    color: '#FFF',
    marginTop: 2,
    marginLeft: 6,
    fontFamily: 'Lato-Bold',
  },
});
