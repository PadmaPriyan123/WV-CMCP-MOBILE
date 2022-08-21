import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';

const UserProfileView = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Justin',
    lastName: 'Antony',
    dob: '1998-05-20',
    mobileno: '7200000001',
    email: 'justinantony2004@gmail.com',
    state: 'West Bengal',
  });
  const [date, setDate] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [checked, setChecked] = React.useState('');
  const showDatePicker = () => {
    if (isEdit) {
      setDatePickerVisibility(true);
    }
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('testing+++++++++++++++++++++++++++++++++++++');
    setUserData({...userData, dob: date});
    hideDatePicker();
  };

  const getDate = () => {
    // setDate();
    let newdate = new Date(userData.dob);
    let tempDate = newdate.toString().split(' ');
    return newdate !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };
  return (
    <ScrollView style={styles.UserProfileContainer}>
      <View>
        <View style={styles.UserHeader}>
          <Text style={styles.headerinfo}>User Profile Information</Text>
          <Text
            style={styles.penicon}
            onPress={() => {
              setIsEdit(true);
            }}>
            <FontAwesomeIcon icon={faPen} size={20} />
          </Text>
        </View>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>First name</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value={userData.firstName}
            onChangeText={text => {
              setUserData({...userData, firstName: text});
            }}
            editable={isEdit}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Last name</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value={userData.lastName}
            onChangeText={text => {
              setUserData({...userData, lastName: text});
            }}
            editable={isEdit}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Date of birth</Text>
          </View>
          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              style={styles.Userinput}
              selectTextOnFocus={false}
              value={getDate()}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
          <Text style={{left: 295, bottom: 25}} onPress={showDatePicker}>
            <FontAwesomeIcon
              size={20}
              icon={faCalendarDays}
              title="Show Picker"
              color="#00bad7"
            />
          </Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View style={[styles.item, {marginTop: -10}]}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Mobile no</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value={userData.mobileno}
            onChangeText={text => {
              setUserData({...userData, mobileno: text});
            }}
            editable={isEdit}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Email</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value={userData.email}
            onChangeText={text => {
              setUserData({...userData, email: text});
            }}
            editable={isEdit}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>State</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value={userData.state}
            onChangeText={text => {
              setUserData({...userData, state: text});
            }}
            editable={isEdit}
          />
        </View>

        <TouchableOpacity style={styles.Userbutton}>
          <Text style={styles.Userbuttoninput}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default UserProfileView;

const styles = StyleSheet.create({
  UserProfileContainer: {
    top: 30,
  },
  UserHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  penicon: {
    marginRight: 10,
  },
  headerinfo: {
    fontSize: 22,
    marginLeft: 10,
    fontFamily: 'Lato-Bold',
  },
  Userinput: {
    height: hp('6%'),
    width: wp('80%'),
    color: 'black',
    borderRadius: 10,
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0.6,
    borderColor: 'gray',
    top: 10,
    padding: 10,
    fontFamily: 'Lato-Regular',
    backgroundColor: '#ffff',
    marginBottom: 5,
  },
  userlabel: {
    fontSize: 16,
    top: 7,
    fontFamily: 'Lato-Bold',
  },
  item: {
    flexDirection: 'column',
    marginTop: 12,
  },

  iconContent: {
    fontSize: 18,
    marginLeft: 40,
    width: wp('25%'),
    fontFamily: 'Lato-Bold',
  },
  icon: {
    width: 35,
    height: 35,
    marginTop: 20,
    color: 'black',
  },
  Userbutton: {
    alignSelf: 'center',
    height: hp('6.5%'),
    width: wp('60%'),
    justifyContent: 'center',
    fontFamily: 'Lato-Bold',
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    borderWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 70,
    marginBottom: 10,
  },
  Userbuttoninput: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
});
