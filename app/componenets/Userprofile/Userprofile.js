import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPen, faEye} from '@fortawesome/free-solid-svg-icons';

import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';

const UserProfileView = props => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Justin',
    lastName: 'Antony',
    dob: '1998-05-20',
    mobileno: '7200000001',
    email: 'justinantony1998@gmail.com',
    state: 'West Bengal',
  });
  const minDate = new Date('1920-01-01');
  const maxDate = new Date('2004-06-30');
  const {
    onChangeText,
    mode = 'date',
    min = minDate,
    max = maxDate,
    icon = true,
    ...rest
  } = props;

  const [dropValue, setDropValue] = useState(null);
  const UserDropData = [
    {label: 'Assam ', value: '1'},
    {label: 'West Bengal ', value: '2'},
  ];

  const [profileError, setProfileError] = useState(initProfileErroMsg);
  const initProfileErroMsg = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    state: '',
  };

  function handleUserSubmit() {
    var num = /^[0-9]{10}$/;
    const emailRegex = /^[a-z]+\S+@\S+\.\S+/;
    var profileError = {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      state: '',
    };

    if (!userData.firstName) {
      profileError.firstName = '*Please enter the first name';
    } else {
      profileError.firstName = '';
    }
    if (!userData.lastName) {
      profileError.lastName = '*Please enter the last name';
    } else {
      profileError.lastName = '';
    }
    if (!userData.mobileno) {
      profileError.mobile = '*Please enter the mobileno';
    } else {
      profileError.mobile = '';
    }
    if (!num.test(userData.mobileno)) {
      profileError.mobile = '*Enter 10 digit mobile number';
    } else {
      profileError.mobile = '';
    }

    if (!userData.email) {
      profileError.email = '*Please enter the Email-Id';
    } else {
      profileError.email = '';
    }

    if (userData.email && emailRegex.test(userData.email) === false) {
      profileError.email = '*Please Enter Valid email id!';
    }
    setProfileError(profileError);
  }

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const showDatePicker = () => {
    if (isEdit) {
      setDatePickerVisibility(true);
    }
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setUserData({...userData, dob: date});
    hideDatePicker();
  };

  const getDate = () => {
    let newdate = new Date(userData.dob);
    let tempDate = newdate.toString().split(' ');
    return newdate !== '' ? `${tempDate[1]} ${tempDate[2]} ${tempDate[3]}` : '';
  };

  return (
    <ScrollView style={styles.UserProfileContainer}>
      <Card style={styles.Userprofilecard}>
        <View>
          {isEdit == false ? (
            <View style={styles.UserHeader}>
              <Text style={styles.headerinfo}>View profile</Text>
              <Text
                style={styles.penicon}
                onPress={() => {
                  setIsEdit(true);
                }}>
                <FontAwesomeIcon icon={faPen} size={16} />
              </Text>
            </View>
          ) : (
            <View style={styles.UserHeader}>
              <Text style={styles.headerinfo}>Edit profile</Text>
              <Text
                style={styles.penicon}
                onPress={() => {
                  setIsEdit(false);
                }}>
                <FontAwesomeIcon icon={faEye} size={16} />
              </Text>
            </View>
          )}
        </View>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>First name</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            backgroundColor={isEdit == false ? '#ecf0f1' : '#ffffff'}
            value={userData.firstName}
            onChangeText={text => {
              setUserData({...userData, firstName: text});
            }}
            editable={isEdit}
          />
        </View>
        <View>
          {profileError?.firstName && (
            <Text style={styles.usererrmessage}>{profileError?.firstName}</Text>
          )}
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Last name</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            backgroundColor={isEdit == false ? '#ecf0f1' : '#ffffff'}
            value={userData.lastName}
            onChangeText={text => {
              setUserData({...userData, lastName: text});
            }}
            editable={isEdit}
          />
        </View>

        <View>
          {profileError?.lastName && (
            <Text style={styles.usererrmessage}>{profileError?.lastName}</Text>
          )}
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Mobile no</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            backgroundColor={isEdit == false ? '#ecf0f1' : '#ffffff'}
            maxLength={10}
            keyboardType="numeric"
            selectTextOnFocus={false}
            value={userData.mobileno}
            onChangeText={text => {
              setUserData({...userData, mobileno: text});
            }}
            editable={isEdit}
          />
        </View>
        <View>
          {profileError?.mobile && (
            <Text style={styles.usererrmessage}>{profileError?.mobile}</Text>
          )}
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Email</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            keyboardType="email-address"
            backgroundColor={isEdit == false ? '#ecf0f1' : '#ffffff'}
            value={userData.email}
            onChangeText={text => {
              setUserData({...userData, email: text});
            }}
            editable={isEdit}
          />
        </View>
        <View>
          {profileError?.email && (
            <Text style={styles.usererrmessage}>{profileError?.email}</Text>
          )}
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Date of birth</Text>
          </View>

          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            backgroundColor={isEdit == false ? '#ecf0f1' : '#ffffff'}
            value={getDate()}
            editable={isEdit}
          />
          <TouchableOpacity>
            <Text style={{left: 280, bottom: 20}} onPress={showDatePicker}>
              <FontAwesomeIcon
                size={20}
                icon={faCalendarDays}
                title="Show Picker"
                color="#00bad7"
              />
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            minimumDate={min}
            maximumDate={max}
          />
        </View>

        <View style={{marginTop: -15}}>
          {isEdit == false ? (
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Text style={styles.userlabel}>State</Text>
              </View>
              <TextInput
                style={styles.Userinput}
                selectTextOnFocus={false}
                backgroundColor={isEdit == false ? '#ecf0f1' : '#ffffff'}
                value={userData.state}
                onChangeText={text => {
                  setUserData({...userData, state: text});
                }}
                editable={isEdit}
              />
            </View>
          ) : (
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Text style={styles.userlabel}>State</Text>
              </View>

              <Dropdown
                style={styles.Userinput}
                containerStyle={{backgroundColor: '#ecf0f1'}}
                selectTextOnFocus={false}
                placeholder="Select State"
                data={UserDropData}
                labelField="label"
                valueField="value"
                maxHeight={100}
                value={dropValue}
                onChange={item => {
                  setDropValue(item.value);
                }}
                editable={isEdit}
              />
            </View>
          )}
        </View>

        {isEdit == false ? (
          ''
        ) : (
          <TouchableOpacity
            style={styles.Userbutton}
            onPress={() => handleUserSubmit()}>
            <Text style={styles.Userbuttoninput}>Save</Text>
          </TouchableOpacity>
        )}
      </Card>
    </ScrollView>
  );
};
export default UserProfileView;

const styles = StyleSheet.create({
  UserProfileContainer: {
    marginBottom: 10,
    marginVertical: 20,
  },
  Userprofilecard: {
    margin: '3%',
    height: hp('100%'),
  },
  UserHeader: {
    marginTop: 20,
    marginLeft: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  penicon: {
    marginRight: '10%',
  },
  headerinfo: {
    marginRight: '5%',
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  Userinput: {
    height: hp('6%'),
    width: wp('80%'),
    borderRadius: 5,
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0.7,
    borderColor: '#d1cdc7',
    top: 12,
    padding: 10,
    color: 'black',
    fontFamily: 'Lato-Regular',
  },
  userlabel: {
    fontSize: 16,
    top: 5,
    marginTop: 5,
    color: 'gray',
    fontFamily: 'Lato-Bold',
  },
  item: {
    flexDirection: 'column',
    marginTop: 12,
  },

  iconContent: {
    fontSize: 18,
    marginLeft: 25,
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
    top: 60,
    marginBottom: 10,
  },
  Userbuttoninput: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  usererrmessage: {
    color: 'red',
    padding: 2,
    top: 10,
    bottom: 5,
    marginLeft: 25,
  },
});
