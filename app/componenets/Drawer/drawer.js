import * as React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChartLine} from '@fortawesome/free-solid-svg-icons/faChartLine';
import {
  faUsers,
  faUser,
  faIndent,
  faArrowRightFromBracket,
  faBell,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form';
import Incident from '../IncidentView/incidentview';
import images from '../Images/image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={images.worldvision_drawer}
        style={styles.DrawerImage}></Image>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Badge = ({count}) => (
  <View style={styles.circle}>
    <Text style={styles.count}>{count}</Text>
  </View>
);
const PopMenu = () => {
  const navigation = useNavigation();

  const [popup, setPopup] = useState(false);
  const hideMenu = () => setPopup(false);
  const showMenu = () => setPopup(true);
  return (
    <Menu
      visible={popup}
      anchor={
        <Text onPress={showMenu}>
          <FontAwesomeIcon icon={faEllipsisVertical} size={18} color="white" />
        </Text>
      }
      onRequestClose={hideMenu}>
      <MenuItem
        style={styles.menuname}
        onPress={() => navigation.navigate('UserProfileView')}>
        <View style={styles.poprow}>
          <Text>
            <FontAwesomeIcon icon={faUser} size={14} />
          </Text>
          <Text style={styles.popupmenu}>View profile </Text>
        </View>
      </MenuItem>
      <MenuItem onPress={() => navigation.navigate('Login')}>
        <View style={styles.poprow}>
          <Text>
            <FontAwesomeIcon icon={faArrowRightFromBracket} size={14} />
          </Text>
          <Text style={styles.popupmenu}>Log out</Text>
        </View>
      </MenuItem>
    </Menu>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: wp('74%'),
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
            fontSize: 14,
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
                  size={18}
                  color="white"
                />
                <Badge count={9} />
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.openpopup}>
                  <PopMenu />
                </View>
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
          title: 'INCIDENT CREATION',
          headerStyle: {
            backgroundColor: '#ff6b00',
            height: 50,
          },
          drawerLabelStyle: {
            fontFamily: 'Lato-Bold',
            fontSize: 14,
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
                  size={18}
                  color="white"
                />
                <Badge count={9} />
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.openpopup}>
                  <PopMenu />
                </View>
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
          title: 'INCIDENT LIST',
          headerStyle: {
            backgroundColor: '#ff6b00',
            height: 50,
          },

          drawerLabelStyle: {
            fontFamily: 'Lato-Bold',
            fontSize: 14,
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
                  size={18}
                  color="white"
                />
                <Badge count={9} />
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.openpopup}>
                  <PopMenu />
                </View>
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
};
export default MyDrawer;

const styles = StyleSheet.create({
  DrawerImage: {
    width: wp('74%'),
    height: hp('20%'),
    top: -5,
    marginBottom: 0,
  },
  lablestyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    justifyContent: 'center',
    marginLeft: 10,
  },
  logoutlablestyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    justifyContent: 'center',
    alignContent: 'center',
    color: '#fff',
    marginLeft: 5,
  },

  logout: {
    marginTop: hp('50%'),
    height: 48,
    width: wp('62%'),
    borderRadius: 5,
    marginLeft: 2,
    alignSelf: 'center',
    backgroundColor: '#ff6b00',
  },
  BellIcon: {
    marginTop: 6,
    marginRight: 32,
    circle: 8,
  },

  circle: {
    width: 14,
    height: 14,
    borderRadius: 18,
    marginLeft: 8,
    marginTop: -3,
    backgroundColor: 'red',
    position: 'absolute',
    top: 5,
    left: 2,
  },
  count: {
    color: '#FFF',
    marginLeft: 3,
    marginTop: -1,
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
    marginHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  openpopup: {
    height: '50%',
    width: '50%',
    fontSize: 26,
    fontFamily: 'Lato-Bold',
  },
  menuname: {
    fontSize: 26,
    color: 'orange',
    fontFamily: 'Lato-Bold',
    backgroundColor: 'white',
  },
  popupmenu: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    alignSelf: 'center',
    marginHorizontal: 10,
    color: '#000000',
  },
  poprow: {
    flexDirection: 'row',
  },
});
