import React, {useCallback, useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  sendLegalData,
  sendLegalDataResponse,
} from '../../Redux/IncidentLog/IncidentList/Action';

const Legal = ({route}) => {
  const [checked3, setChecked3] = React.useState('first2');
  const [checked4, setChecked4] = React.useState('first2');
  let dispatch = useDispatch();
  let legalresponse = useSelector(
    state => state.Incidentlist.sendLegalDataResponse,
  );
  useEffect(() => {
   
    if (legalresponse?.StatusCode == 201) {
      alert('legal was successfully created');
      dispatch(sendLegalData(''));
    }
   
  }, [legalresponse]);

  const [validation2, setValidation2] = useState({
    CaseID: 1,

    UserID: 1,

    IsVictimRecovered: "",

    HasTheAccusedArrested: "",

    NoOfAccusedArrested: ""
  });
  console.log('vikki',validation2)

  const initialErrorMessage = {
    CaseID: "",

    UserID: "",

    IsVictimRecovered: "",

    HasTheAccusedArrested: "",

    NoOfAccusedArrested: ""
  };

  const [error, setError] = useState(initialErrorMessage);

  function myFunction() {

    let a = {
      CaseID: "",

      UserID: "",
  
      IsVictimRecovered: "",
  
      HasTheAccusedArrested: "",
  
      NoOfAccusedArrested: ""
    };

    var letters = /[A-Za-z]{3,15}/;
    var empty = /^$/;
    var Age = /^[0-9]{1,2}$/;

  
    if (!validation2.IsVictimRecovered) {
      a.IsVictimRecovered = '*Please select the victim recovered or not';
    }
    if (!validation2.HasTheAccusedArrested) {
      a.HasTheAccusedArrested = '*Please select the accused or not';
    }
    if (!validation2.NoOfAccusedArrested) {
      a.NoOfAccusedArrested = '*Please enter number of accused arrested';
    }
   
    if (Object.values(a).every(el => el === '')) {
      console.log(Object.values(a).every(el => el === ''));
      setError(a);
      dispatch(sendLegalData(validation2));
    } else {
      setError(a);
    }
  }

  return (
    <View style={styles.Tab}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.Form}>
          <View style={{marginTop: -25, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Victim recovered or not?:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={1}
                status={  validation2.IsVictimRecovered === 1 ? 'checked' : 'unchecked'}
                onPress={() =>  {setValidation2({
                  ...validation2,
                  IsVictimRecovered:parseInt (1),
                });
                setChecked3('yes');
              }}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={0}
                status={  validation2.IsVictimRecovered === 0 ? 'checked' : 'unchecked'}
                onPress={() =>  {setValidation2({
                  ...validation2,
                  IsVictimRecovered:parseInt (0),
                });
                setChecked3('no');
              }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Has the accused arrested?:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={1}
                status={validation2.HasTheAccusedArrested === 1 ? 'checked' : 'unchecked'}
                onPress={() =>  {setValidation2({
                  ...validation2,
                  HasTheAccusedArrested: parseInt(1),
                });
                setChecked4('yes');
              }}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={0}
                status={validation2.HasTheAccusedArrested === 0 ? 'checked' : 'unchecked'}
                onPress={() =>  {setValidation2({
                  ...validation2,
                  HasTheAccusedArrested: parseInt(0),
                });
                setChecked4('no');
              }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
          </View>
          {validation2.HasTheAccusedArrested === 1 && (
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>
              Number of accused arrested?:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                keyboardType="numeric"
                placeholder="Enter Number of accused arrested"
                placeholderTextColor="gray"
                color="#000"
                onChangeText={text => {
                  setValidation2({...validation2, NoOfAccusedArrested: parseInt(text)});
                }}
              />
            </View>
            <View>
              {error?.NoOfAccusedArrested && (
                <Text style={styles.errormessage}>{error?.NoOfAccusedArrested}</Text>
              )}
            </View>
          </View>
          
            )}
          
        
        </SafeAreaView>
      </ScrollView>

      <View>
        <TouchableOpacity
          style={styles.formbutton}
          onPress={() => myFunction()}>
          <Text style={styles.formbuttoninput}>Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Legal;
const styles = StyleSheet.create({
  Tab: {
    backgroundColor: '#fff',
    height: hp('87%'),
    width: wp('99%'),
  },
  FormTitle: {
    color: '#000',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 13,
  },
 
  FormInput: {
    padding: 10,
    borderRadius: 5,
    color: '#555',
    backgroundColor: '#ecf0f1',
    fontFamily: 'Lato',
    height: hp('6.5%'),
  },
  Form: {
    padding: 17,
  },
  radioname: {
    color: '#000',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 20,
  },
  SectionStyle1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  gender: {
    marginTop: 8,

    color: '#181818',
  },

  
  formbutton: {
    alignSelf: 'center',
    width: wp('89%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    marginTop: 14,
    marginLeft: 5,
  },
  
  formbuttoninput: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Lato-Bold',
  },
  
  scrollView: {
    paddingVertical: 8,
    marginTop: 12,
  },
  
  formtotalinput: {
    height: hp('7%'),
    borderRadius: 5,

    borderWidth: 1,
    marginTop: 10,
    marginLeft: 6,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
  },
  
  star: {
    color: 'red',
  },
  
  errormessage:{
    color:'red',
    marginLeft:5
  }
});
