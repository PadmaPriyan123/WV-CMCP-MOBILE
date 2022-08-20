import React from 'react';
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

export default function UserProfileView() {
  return (
    <ScrollView style={styles.UserProfileContainer}>
      <View>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>First name</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value="Jasmine"
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Last name</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value="Antony"
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Date of birth</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value="05.08.2002"
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Mobile no</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value="7032323231"
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>Email</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value="Jasminejeni2002@gmail.com"
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Text style={styles.userlabel}>State</Text>
          </View>
          <TextInput
            style={styles.Userinput}
            selectTextOnFocus={false}
            value="West Bengal"
          />
        </View>

        <TouchableOpacity style={styles.Userbutton}>
          <Text style={styles.Userbuttoninput}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  UserProfileContainer: {
    top: 30,
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
