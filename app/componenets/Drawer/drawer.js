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
import login from '../../Redux/Login/Saga';

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <Image
          source={images.worldvision_drawer}
          style={{width: wp('68%'), height: hp('20%'), top: -5}}></Image>
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
          }}
        />
        <Drawer.Screen
          style={styles.logout1}
          labelStyle={styles.lablestyle1}
          name="LOGOUT"
          component={Login}
          options={{
            drawerLabelStyle: {
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              justifyContent: 'center',
            },
            drawerIcon: ({focused}) => (
              <FontAwesomeIcon
                icon={faRightFromBracket}
                size={25}
                color="#000"
              />
            ),
          }}
          // onPress={() =>
          //   Alert.alert(
          //     'Log out',
          //     'Do you want to logout?',
          //     [
          //       {
          //         text: 'Cancel',
          //         onPress: () => {
          //           return null;
          //         },
          //       },
          //       {
          //         text: 'Confirm',
          //         onPress: () => {
          //           props.navigation.navigate('Login');
          //         },
          //       },
          //     ],
          //     {cancelable: false},
          //   )
          // }
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
  lablestyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    justifyContent: 'center',
    marginLeft: 10,
  },
  logoutlablestyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    justifyContent: 'center',
  },
  logout: {
    marginTop: hp('45%'),
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('45%'),
    fontFamily: 'Lato-Bold',
    borderRadius: 3,
    height: 50,
    backgroundColor: '#ff6b00',
    marginLeft: 5,
    marginRight: 5,
  },
  BellIcon: {
    marginRight: 10,
    circle: 10,
  },

  circle: {
    width: 15,
    height: 15,
    borderRadius: 18,
    marginLeft: 10,
    marginTop: -10,
    backgroundColor: 'red',
    position: 'absolute',
    top: 5,
    left: 2,
  },
  count: {
    color: '#FFF',
    marginLeft: 4,
    fontFamily: 'Lato-Bold',
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  titleView: {
    flex: 1,
    marginTop: 8,
  },
  DotHeader: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoutButton: {
    alignSelf: 'center',
    width: 89,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#19B5FE',
    marginTop: 20,
    marginRight: 10,
  },
});
