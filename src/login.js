import React, {useState} from 'react';
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

} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';



import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'


const Login = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#593dfff5" barStyle="Light-content" />
      <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground  source={require('../src/assets/bg.png')} style={styles.logo1}></ImageBackground> 
        

        <View
          style={{
            top: -70,
            backgroundColor: '#fff',
            width: wp('100%'),
            height: hp('14%'),
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            
          }}>
      
      <Image source={require('../src/assets/logo.png')} style={styles.logo} />

          
        </View>
        
        <View style={styles.form}>
          <View
            style={{
              top: -35,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontSize: 17,
                top: -5,
                alignSelf: 'flex-start',
                marginLeft: 10,
              }}>
              User Name
            </Text>
            <View style={styles.customtextinput}>
            <FontAwesomeIcon icon={ faUser } 
                size={19}
                color={'gray'}
                style={{padding: 10, marginLeft: 9}}
              />
              <TextInput
                style={styles.input}
                placeholder="User name"
                placeholderTextColor="#9e9e9e"
                textAlign="left"
              />
            </View>
          </View>
          <View
            style={{
              top:-30,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontSize: 17,
                top: -5,
                paddingTop: 11,
                alignSelf: 'flex-start',
                marginLeft: 10,
              }}>
              Password
            </Text>
            <View style={styles.customtextinput2}>
            <FontAwesomeIcon icon={ faLock }
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
       
          <View style={{flexDirection:'row', justifyContent:'space-between',top:-14}}>
          <BouncyCheckbox
              size={15}
              fillColor="#F37021"
              text="Remember me"
              iconStyle={{borderColor: '#F37021', marginLeft:5}}
              textStyle={{
                fontFamily: 'Poppins-Medium',
                fontSize: 13,
                marginTop: 1,
                marginRight: 4,
              
              }}
              style={{marginLeft: 4, marginTop: 3}}
            />
            
            <TouchableOpacity onPress={e => console.log('pressed')}>
              <Text
                style={{
                  color: '#F37021',
                  fontFamily: 'Poppins-Medium',
                  marginRight: 5,
                  fontSize: 13,
                  marginTop: 4,
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              top:-4
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Dashboard')}>
              <Text style={styles.buttoninput} >LOG-IN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, top: -100}}>
          <Text
            style={{
              fontSize: 15,
              flex: 1,
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Poppins-Medium',
            }}>
            By Loggin-In, you're agree to our
            <TouchableOpacity>
              <Text
                style={{
                  
                  fontSize: 15,
                  flex: 1,
                  color: '#F37021',
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                }}>
                Terms & Conditions and Privacy Policy.
              </Text>
            </TouchableOpacity>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
              marginBottom:15,
              flex:1,
              top:30
              
            }}>
            <TouchableOpacity>
              <Image
               source={require('../src/assets/fb.png')}
               
            
                style={{width: 25, height: 25, paddingHorizontal: 4}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../src/assets/linked.png')}

                style={{width: 25, height: 25, padding: 5}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
              source={require('../src/assets/twitter.png')}

            
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image
              source={require('../src/assets/mail1.png')}

            
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{top: 15, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: '#757575',
                fontFamily: 'Poppins-Medium',
                fontSize: 13,
                top:10,
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
    color: '#fff',
  },
  logo: {

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 130,
    height: 130,
    top: -85,
    borderRadius:70,
    marginTop:25,
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
    width: 199,
    
    


    borderRadius: 10,
    color: '#212121',
    marginVertical: 6,
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#ffff',
  },
  button: {
    alignSelf: 'center',
    width: 310,
    height: 60,
    justifyContent: 'center',
    marginVertical: 9,
    borderRadius: 10,
    backgroundColor: '#F37021',
    borderWidth: 0,
    paddingVertical: 9,
    elevation: 80,
    marginLeft: 5,
    marginRight: 5,
    elevation:12,
    opacity:10,
  },
  buttoninput: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    fontFamily: 'Poppins-Bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});


export default Login;
