import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  StatusBar,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ImageBackground,
  Ionicons,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {useNavigation} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import images from '../Images/image';
import {useDispatch, useSelector} from 'react-redux';
import {usersLogin, userLoginResponse} from '../../Redux/Action';

const Login = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState({EmailId: '', Password: ''});

  let dispatch = useDispatch();
  let loginResponse = useSelector(state => state.Login.loginSuccessfull);

  useEffect(() => {
    console.log(loginResponse);
  }, []);

  const initialErrorMessage = {EmailId: '', Password: ''};

  const [error, setError] = useState(initialErrorMessage);

  useEffect(() => {
    let a = {EmailId: '', Password: ''};

    if (
      loginResponse?.StatusCode === 400 &&
      loginResponse?.StatusMessage === 'Email not found.'
    ) {
      setError({...error, EmailId: '*Email does not exists!'});
      dispatch(userLoginResponse(''));
    } else if (
      loginResponse?.StatusCode === 400 &&
      loginResponse?.StatusMessage === 'Incorrect password.'
    ) {
      setError({...error, Password: '*Incorrect Password!'});
      dispatch(userLoginResponse(''));
    } else if (loginResponse?.StatusCode === 500) {
      alert(loginResponse.StatusMessage);
      console.log('ter', loginResponse.StatusMessage);
      dispatch(userLoginResponse(''));
    } else if (loginResponse?.StatusCode === 201) {
      alert(loginResponse.StatusMessage);
      dispatch(userLoginResponse(''));
      setTimeout(() => {
        navigation.navigate('Drawer');
      }, 0);
    }
  }, [loginResponse]);

  function myFunction() {
    console.log('login', login);
    const EmailIdRegex = /^[a-z]+\S+@\S+\.\S+/;
    const PasswordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;
    let a = {EmailId: '', Password: ''};

    if (!login.EmailId) {
      console.log('came here1');
      a.EmailId = '*Please Enter email id!';
    }
    if (!login.Password) {
      console.log('came here2');
      a.Password = '*Please Enter password!';
    }

    if (login.EmailId && EmailIdRegex.test(login.EmailId) === false) {
      console.log('came here3');
      a.EmailId = '*Please Enter Valid email id!';
    }

    if (login.Password && PasswordRegex.test(login.Password) === false) {
      console.log('came here4');
      a.Password = '*Please Enter Valid password!';
    }

    if (Object.values(a).every(el => el === '')) {
      setError(a);
      dispatch(usersLogin(login));
    } else {
      setError(a);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={images.worldvision_loginbackground}
          style={styles.logo1}></ImageBackground>
        <Text
          name="ios-menu-sharp"
          size={35}
          style={{
            justifyContent: 'center',
            color: '#000',
            alignSelf: 'flex-end',
            alignContent: 'center',
            marginBottom: 13,
            marginRight: 18,
            marginTop: 10,
          }}
        />
        <View style={styles.loginlogo}>
          <Image source={images.worldvision_loginlogo} style={styles.logo} />
        </View>

        <View style={styles.form}>
          <View style={styles.loginusernamemain}>
            <Text style={styles.username}>Email</Text>
            <View style={styles.customtextinput}>
              <FontAwesomeIcon
                icon={faUser}
                size={19}
                color={'gray'}
                style={{padding: 10, marginLeft: 9}}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Id"
                placeholderTextColor="#9e9e9e"
                textAlign="left"
                value={login.EmailId}
                required
                onChangeText={e => setLogin({...login, EmailId: e})}
              />
            </View>
            {error?.EmailId && (
              <Text style={styles.emailvali}>{error?.EmailId}</Text>
            )}
          </View>

          <View style={styles.loginpasswordmain}>
            <Text style={styles.loginpassword}>Password</Text>
            <View style={styles.customtextinput2}>
              <FontAwesomeIcon
                icon={faLock}
                size={19}
                color={'gray'}
                style={{padding: 10, marginLeft: 9}}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9e9e9e"
                value={login.Password}
                required
                onChangeText={e => setLogin({...login, Password: e})}
              />
            </View>
            {error?.Password && (
              <Text style={styles.emailvali1}>{error?.Password}</Text>
            )}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: -14,
            }}>
            <BouncyCheckbox
              size={15}
              fillColor="#ff6b00"
              text="Remember me"
              iconStyle={{borderColor: '#F37021', marginLeft: 10}}
              textStyle={styles.BouncyCheckboxcontent}
              style={{marginLeft: 25, marginTop: 4}}
            />

            <TouchableOpacity onPress={e => console.log('pressed')}>
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              top: -4,
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={e => myFunction(e)}>
              <Text style={styles.buttoninput}>LOG-IN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 3, top: -30}}>
          <Text
            style={{
              fontSize: 15,
              flex: 1,
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Lato-Regular',
            }}>
            By Loggin-In, you're agree to our
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  flex: 1,
                  color: '#ff6b00',
                  textAlign: 'center',
                  fontFamily: 'Lato-Regular',
                }}>
                Terms & Conditions and Privacy Policy.
              </Text>
            </TouchableOpacity>
          </Text>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Lato-Regular',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Lato-Regular',
                color: '#000',
                top: 10,
              }}>
              © Copyright 2022, All rights Reserved
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lato-Black',
    color: '#fff',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 130,
    height: 130,
    top: -85,
    borderRadius: 70,
    marginTop: 25,
  },
  logo1: {
    height: hp('30%'),
    width: wp('100%'),
  },
  customtextinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',

    borderColor: 'gray',
    elevation: 2,
    borderWidth: 0.7,
    width: 310,
    borderRadius: 10,
    height: 45,
  },
  customtextinput2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderColor: 'gray',
    elevation: 2,
    borderWidth: 0.7,
    width: 310,
    borderRadius: 10,
    height: 45,
  },
  form: {
    flexGrow: 1,
    top: -40,
  },
  input: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 198,
    borderRadius: 10,
    borderColor: 'gray',
    marginVertical: 6,
    fontFamily: 'Lato-Regular',
    backgroundColor: '#ffff',
  },
  button: {
    alignSelf: 'center',
    width: 310,
    height: 60,
    justifyContent: 'center',
    fontFamily: 'Lato-Bold',
    marginVertical: 9,
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    borderWidth: 0,
    paddingVertical: 9,
    elevation: 80,
    marginLeft: 5,
    marginRight: 5,
    elevation: 12,
    opacity: 10,
  },
  buttoninput: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  loginlogo: {
    top: -70,
    backgroundColor: '#fff',
    width: wp('100%'),
    height: hp('14%'),
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  loginusernamemain: {
    top: -35,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    color: '#000',
    fontSize: 17,
    top: -5,
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontFamily: 'Lato-Bold',
    flex: 1,
  },
  loginpasswordmain: {
    top: -30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginpassword: {
    color: '#000',
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    top: -5,
    paddingTop: 11,
    alignSelf: 'flex-start',
    marginLeft: 40,
  },
  bouncyforgotmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -14,
  },
  BouncyCheckboxcontent: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 1,
    marginRight: 4,
    fontFamily: 'Lato-Regular',
  },
  forgot: {
    color: '#ff6b00',
    marginRight: 40,
    fontSize: 13,
    marginTop: 5,
    fontFamily: 'Lato-Regular',
  },
  emailvali: {
    color: 'red',
    marginRight: 160,
    top:5

  },
  emailvali1: {
    color: 'red',
    marginRight: 150,
    top:5
  },
});

export default Login;
