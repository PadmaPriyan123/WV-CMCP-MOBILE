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
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChartLine} from '@fortawesome/free-solid-svg-icons/faChartLine';
import {faIndent} from '@fortawesome/free-solid-svg-icons/faIndent';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import {faBell, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {faMenu} from '@fortawesome/free-solid-svg-icons';
import Notification from '../Notification/Notification';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Incident from '../IncidentView/incidentview';
import images from '../Images/image';
import Login from '../Login/login';
import {LinearGradient} from 'react-native-svg';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={images.worldvision_drawer}
        style={{
          width: wp('68%'),
          height: hp('20%'),
          top: -5,
          marginBottom: 0,
        }}></Image>
      <DrawerItemList {...props} />

      <View style={styles.logout}>
        <DrawerItem
          labelStyle={styles.logoutlablestyle}
          label="LOGOUT"
          onPress={() => props.navigation.navigate('Login')}
          icon={({focused}) => (
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size={25}
              color={focused ? '#fff' : '#000'}
            />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Badge = ({count}) => (
  <View style={styles.circle}>
    <Text style={styles.count}>{count}</Text>
  </View>
);

const Drawer = createDrawerNavigator();

export default function MyDrawer({navigation}) {
  return (
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
            color: '#fff',
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
              size={25}
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
>>>>>>> 7dd0519231492ce58a42e94b0dca1002a3e21ad7

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
              size={25}
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
              size={25}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
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
    marginLeft: 5,
  },

  logout: {
    marginTop: hp('47%'),
    height: 50,
    width: wp('62%'),
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#ff6b00',
  },
  BellIcon: {
    marginRight: 30,
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
});
