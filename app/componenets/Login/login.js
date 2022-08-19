import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
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
import {
  faUser,
  faPhone,
  faTruckMedical,
} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import images from '../Images/image';

const OTPScreen = () => {
  const navigation = useNavigation();
  const OTPInputRef1 = useRef(null);
  const OTPInputRef2 = useRef(null);
  const OTPInputRef3 = useRef(null);
  const OTPInputRef4 = useRef(null);
  const OTPInputRef5 = useRef(null);

  const [oTPInputValue1, setOTPInputValue1] = React.useState('');
  const [oTPInputValue2, setOTPInputValue2] = React.useState('');
  const [oTPInputValue3, setOTPInputValue3] = React.useState('');
  const [oTPInputValue4, setOTPInputValue4] = React.useState('');

  const [otpCheck, setOtpCheck] = React.useState('');
  const [logintype, setLoginType] = React.useState(false);
  const [enableVerifyOTP, setEnableVerifyOTP] = React.useState(false);
  const [number, setNumber] = React.useState({number: ''});

  function clearAll() {
    setOTPInputValue1('');
    setOTPInputValue2('');
    setOTPInputValue3('');
    setOTPInputValue4('');
    setError('');
    setCounter('00');
    setOtpCheck('');
    setEnableVerifyOTP(false);
    setLoginType(false);
    setNumber({...number, number: ''});
  }

  const [otp, setOtp] = useState(true);

  const initialErrorMessage = {message: ''};
  const initialOTPErrorMessage = {message: ''};
  const [error, setError] = useState(initialErrorMessage);
  const [otpError, setOtpError] = useState(initialOTPErrorMessage);

  function redirectToOtp() {
    setOtpCheck('');
    setNumber('');
    setError('');
    setOtpError('');
    clearAll();
    setCounter(29);
    setEnableVerifyOTP(false);
    setLoginType(false);
  }

  function myFunction() {
    var a = {
      message: '',
    };
    var empty = /^$/;
    var num = /^[0-9]{10}$/;

    if (!number.number) {
      a.message = '*Please enter the mobile number';
    }
    if (!num.test(number.number) && !empty.test(number.number)) {
      a.message = '*Enter 10 digit mobile number';
    }
    if (num.test(number.number)) {
      setOtpCheck('first');
      setOtpError('');
    }
    console.log(number.number);

    if (Object.values(a).every(el => el == '')) {
      console.log(Object.values(a).every(el => el == ''));
      setError(a);
      setOtp(true);
      setEnableVerifyOTP(true);
    } else {
      setError(a);
    }
  }

  const [counter, setCounter] = React.useState(29);
  const [enableResend, setEnableResend] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
      if (counter === 0) {
        setEnableResend(false);
        setCounter('00');
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const resendOTP = () => {
    setCounter(29);
    setEnableResend(true);
    setOTPInputValue1('');
    setOTPInputValue2('');
    setOTPInputValue3('');
    setOTPInputValue4('');
  };

  const verifyOTP = () => {
    let err = {
      message: '',
    };
    let otp = oTPInputValue1 + oTPInputValue2 + oTPInputValue3 + oTPInputValue4;
    if (otp == '') {
      err.message = '*Please enter the OTP';
    } else if (otp == '1234') {
      navigation.navigate('Drawer');
      clearAll();
    } else {
      err.message = '*Invalid OTP';
    }
    setOtpError(err);
  };

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = fullName => {
    setFullName(fullName);
  };

  const onChangeEmailHandler = email => {
    setEmail(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={images.worldvision_loginbackground}
          style={styles.logo1}></ImageBackground>

        <View style={styles.loginlogo}>
          <Image source={images.worldvision_loginlogo} style={styles.logo} />
        </View>
        <View style={styles.mainotpcontainer}>
          {logintype === false ? (
            <View style={styles.form}>
              <View style={styles.loginmobilemain}>
                <Text style={styles.Mobilenum}>Mobile No</Text>
                <View style={styles.customtextinput}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size={19}
                    color={'gray'}
                    style={{padding: 10, marginLeft: 9}}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter the mobile number"
                    placeholderTextColor="#9e9e9e"
                    maxLength={10}
                    value={number.number}
                    required
                    keyboardType="numeric"
                    onChangeText={e => setNumber({...number, number: e})}
                  />
                </View>
                {error?.message && (
                  <Text style={styles.errmessage}>{error?.message}</Text>
                )}
              </View>

              {otpCheck == 'first' && (
                <View>
                  <Text style={styles.otpboxname}>Enter the OTP</Text>
                  <View style={styles.otpdiv}>
                    <View style={styles.otpsmall}>
                      <TextInput
                        style={styles.inputotp}
                        placeholderTextColor="#9e9e9e"
                        maxLength={1}
                        keyboardType="numeric"
                        value={oTPInputValue1}
                        onChangeText={value => {
                          setOTPInputValue1(value);
                          if (value.length >= 1) {
                            OTPInputRef2.current?.focus();
                          }
                        }}
                      />
                    </View>

                    <View style={styles.otpsmall}>
                      <TextInput
                        style={styles.inputotp}
                        placeholderTextColor="#9e9e9e"
                        maxLength={1}
                        keyboardType="numeric"
                        value={oTPInputValue2}
                        onChangeText={value => {
                          setOTPInputValue2(value);
                          if (value.length >= 1) {
                            OTPInputRef3.current?.focus();
                          }
                        }}
                        ref={ref => (OTPInputRef2.current = ref)}
                      />
                    </View>

                    <View style={styles.otpsmall}>
                      <TextInput
                        style={styles.inputotp}
                        placeholderTextColor="#9e9e9e"
                        maxLength={1}
                        keyboardType="numeric"
                        value={oTPInputValue3}
                        onChangeText={value => {
                          setOTPInputValue3(value);
                          if (value.length >= 1) {
                            OTPInputRef4.current?.focus();
                          }
                        }}
                        ref={ref => (OTPInputRef3.current = ref)}
                      />
                    </View>

                    <View style={styles.otpsmall}>
                      <TextInput
                        style={styles.inputotp}
                        placeholderTextColor="#9e9e9e"
                        maxLength={1}
                        keyboardType="numeric"
                        value={oTPInputValue4}
                        onChangeText={value => {
                          setOTPInputValue4(value);
                        }}
                        ref={ref => (OTPInputRef4.current = ref)}
                      />
                    </View>
                  </View>
                  <View style={styles.otperrmsg}>
                    {otpError?.message && (
                      <Text style={styles.message}>{otpError?.message}</Text>
                    )}
                  </View>

                  {counter == 0 ? (
                    <View style={styles.otpvalidmsg}>
                      <Text
                        disabled={enableResend}
                        onPress={resendOTP}
                        style={styles.otpresend}>
                        Resend OTP
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.otpvalidmsg}>
                      <Text> OTP expires in </Text>
                      <Text style={styles.numbercount}>00:{counter}</Text>
                    </View>
                  )}
                </View>
              )}

              {enableVerifyOTP == false ? (
                <View
                  style={{
                    top: -4,
                  }}>
                  <TouchableOpacity
                    style={styles.button}
                    disabled={isLoading}
                    status={otpCheck == 'first' ? 'checked' : 'unchecked'}
                    onPress={() => {
                      myFunction();
                      setCounter(29);
                    }}>
                    <Text style={styles.buttoninput}>LOG-IN</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    top: -10,
                  }}>
                  <TouchableOpacity
                    style={styles.button}
                    disabled={isLoading}
                    onPress={() => {
                      myFunction();
                      verifyOTP();
                    }}>
                    <Text style={styles.buttoninput}>LOG-IN</Text>
                  </TouchableOpacity>
                </View>
              )}

              <View style={styles.otpname4}>
                <Text style={styles.or}>(or)</Text>
                <Text style={styles.otpname3} onPress={setLoginType}>
                  Login with email and password
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.form}>
              <View style={styles.loginusernamemain}>
                <Text style={styles.username}>User Name</Text>
                <View style={styles.customtextinput}>
                  <FontAwesomeIcon
                    icon={faUser}
                    size={19}
                    color={'gray'}
                    style={{padding: 10, marginLeft: 9}}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    placeholderTextColor="#9e9e9e"
                    textAlign="left"
                    value={fullName}
                    editable={!isLoading}
                    onChangeText={onChangeNameHandler}
                  />
                </View>
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
                    secureTextEntry={true}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  bottom: 58,
                  justifyContent: 'space-between',
                }}>
                <BouncyCheckbox
                  size={15}
                  fillColor="#ff6b00"
                  text="Remember me"
                  iconStyle={{borderColor: '#F37021', marginLeft: 10}}
                  textStyle={styles.BouncyCheckboxcontent}
                  style={{marginLeft: 25, marginTop: 4}}
                />

                <TouchableOpacity>
                  <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  top: -4,
                }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Drawer')}
                  disabled={isLoading}>
                  <Text style={styles.buttoninput}>LOG-IN</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.otpname4}>
                <Text style={styles.or}>(or)</Text>
                <Text
                  style={styles.otpname3}
                  onPress={() => {
                    redirectToOtp();
                  }}>
                  Login with mobile number
                </Text>
              </View>
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footertext}>
            By Loggin-In, you're agree to our
          </Text>
          <Text style={styles.footertext2}>
            Terms & Conditions and Privacy Policy.
          </Text>

          <Text style={styles.footertext3}>
            © Copyright 2022, All rights Reserved
          </Text>
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
    height: '100%',
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
    backgroundColor: '#ffff',
    borderColor: 'gray',
    elevation: 2,
    borderWidth: 0.7,
    width: 310,
    bottom: 80,
    borderRadius: 10,
    height: 50,
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
    bottom: 40,
    height: 45,
  },

  input: {
    height: hp('6.5%'),
    width: wp('60%'),
    borderRadius: 10,
    borderColor: 'gray',
    fontFamily: 'Lato-Regular',
    backgroundColor: '#ffff',
  },
  button: {
    alignSelf: 'center',
    height: hp('8%'),
    width: wp('88%'),
    justifyContent: 'center',
    fontFamily: 'Lato-Bold',
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    borderWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    bottom: 38,
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
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    color: '#000',
    fontSize: 17,
    bottom: 90,
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontFamily: 'Lato-Bold',
  },
  loginmobilemain: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Mobilenum: {
    bottom: 90,
    color: '#000',
    fontSize: 17,
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontFamily: 'Lato-Bold',
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
    bottom: 50,
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
  OTPinput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  or: {
    fontSize: 20,
    color: '#ff6b00',
    marginLeft: 20,
    marginRight: 10,
    fontFamily: 'Lato-Bold',
  },
  otpname3: {
    fontSize: 18,
    color: '#ff6b00',
    fontFamily: 'Lato-Bold',
  },
  inputotp: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    fontFamily: 'Lato-Regular',
    backgroundColor: '#ffff',
    textAlign: 'center',
  },
  otpsmall: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderColor: 'gray',
    elevation: 2,
    borderWidth: 0.7,
    width: 45,
    borderRadius: 3,
    height: 45,
    margin: 15,
    bottom: 80,
  },

  otpname: {
    fontSize: 20,
    marginTop: 30,
    marginLeft: -20,
  },
  otpname4: {
    flexDirection: 'row',
    bottom: 22,
    justifyContent: 'center',
  },

  otpdiv: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
  },
  buttoninput: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  mainotpcontainer: {
    height: hp('48%'),
  },

  otpboxname: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    marginLeft: 40,
    bottom: 70,
    color: '#000',
  },
  message: {
    color: 'red',
    marginLeft: -45,
    marginTop: -100,
  },
  otpvalidmsg: {
    flexDirection: 'row',
    bottom: 70,
    marginLeft: 40,
    color: 'red',
  },
  otperrmsg: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 80,
  },
  numbercount: {
    color: 'red',
  },
  errmessage: {
    color: 'red',
    marginRight: 110,
    bottom: 80,
    height: hp('3%'),
  },
  footer: {
    flex: 1,
    bottom: 15,
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footertext: {
    fontSize: 14,
    top: 3,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  footertext2: {
    fontSize: 16,
    top: 5,
    color: '#ff6b00',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  footertext3: {
    fontSize: 14,
    marginTop: 15,
    fontFamily: 'Lato-Regular',
    color: '#000',
  },
  otpresend: {
    color: 'red',
  },
});

export default OTPScreen;
