import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dropdown} from 'react-native-element-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {useDispatch, useSelector} from 'react-redux';
import {caseAssignment} from '../../Redux/IncidentLog/IncidentCreation/Action';

const CaseAssignment = ({navigation}) => {
  const dispatch = useDispatch();
  let legalresponse = useSelector(
    state => state.Incidentlist.sendlegalDataResponse,
  );
  useEffect(() => {
    if (legalresponse?.StatusCode=== 201) {
      alert(legalresponse.StatusMessage);
      dispatch(sendLegalData(''));
    }
    else if(legalresponse?.StatusCode===401){
      alert(legalresponse.StatusMessage);

    }
   
  }, [legalresponse]);
  const [assignValue1, setAssignValue1] = React.useState([]);

  console.log('hff', assignValue1);
  const [assignLegal, setAssignLegal] = React.useState([
    {label: 'Biju', id: [1]},
    {label: 'Murali ', id: [2]},
    {label: 'Bharat ', id: [3]},
    {label: 'Arun', id: [4]},
    {label: 'Bala', id: [5]},
  ]);

  const [incidentError, setIncidentError] = React.useState({
    legalerr: '',
    mphsserr: '',
  });

  const [assignValue2, setAssignValue2] = React.useState([]);
  console.log('jbvfh', assignValue2);
  const [assignLegal2, setAssignLegal2] = React.useState([
    {label: 'Mano', id: '1'},
    {label: 'Vino ', id: '2'},
    {label: 'Ajay ', id: '3'},
    {label: 'Varun', id: '4'},
    {label: 'Gopal', id: '5'},
  ]);

  const [mhpss, setMhpss] = React.useState([]);
  const [mhpss2, setMhpss2] = React.useState([]);

  useEffect(() => {
    var incidenterr = {
      legalerr: '',
      mphsserr: '',
    };
    setIncidentError(incidenterr);
    setAssignValue1('');
    setAssignValue2('');
    setMhpss([]);
    setMhpss2([]);
  }, []);

  useEffect(() => {
    caseAssignValidation();
  }, [assignValue1, assignValue2]);

  function incidentmodal() {
    let err = 0;
    var incidenterr = {
      legalerr: '',
      mphsserr: '',
    };
    if (!mhpss2.length) {
      incidenterr.legalerr = '*Please select atleast one User';
      ++err;
    } else {
      incidenterr.legalerr = '';
    }
    if (!mhpss.length) {
      incidenterr.mphsserr = '*Please select atleast one User';
      ++err;
    } else {
      incidenterr.mphsserr = '';
    }
    setIncidentError(incidenterr);
    if (err == 0) {
      alert('Case Assigned Successfully');
    }
  }

  function caseAssignValidation() {
    let cnt = 0;
    var incidenterr = {
      legalerr: '',
      mphsserr: '',
    };
    if (incidentError.legalerr != '') {
      ++cnt;
      if (!mhpss2.length) {
        incidenterr.legalerr = '*Please select atleast one User';
      } else {
        incidenterr.legalerr = '';
      }
    }
    if (incidentError.mphsserr != '') {
      ++cnt;
      if (!mhpss.length) {
        incidenterr.mphsserr = '*Please select atleast one User';
      } else {
        incidenterr.mphsserr = '';
      }
    }
    if (cnt > 0) {
      setIncidentError(incidenterr);
    }
  }

  function setMhpssPerson(item) {
    if (mhpss.length < 3) {
      if (mhpss.map(val => val?.id).includes(item.id)) {
        alert('The name already exists');
        return '';
      } else {
        let a = assignLegal2.filter(val => val.id == item.id);
        setMhpss([...mhpss, ...a]);
      }
    } else {
      alert('You can able to select only 3 persons');
    }
  }

  function setLegalPerson(item) {
    if (mhpss2.length < 3) {
      if (mhpss2.map(val => val?.id).includes(item.id)) {
        alert('The name already exists');
        return '';
      } else {
        let c = assignLegal.filter(val => val.id == item.id);
        setMhpss2([...mhpss2, ...c]);
      }
    } else {
      alert('You can able to select only 3 persons');
    }
  }

  function setOptionValue1(item, type) {
    if (type == 1) {
      var index = assignLegal.indexOf(item); // Here removing option from array
      if (index !== -1) {
        assignLegal.splice(index, 1);
        setAssignLegal(assignLegal);
      }
    } else {
      assignLegal.unshift(item);
      setAssignLegal(assignLegal);
    }
    console.log(assignLegal);
  }

  function setOptionValue2(item, type) {
    if (type == 1) {
      var index = assignLegal2.indexOf(item);
      if (index !== -1) {
        assignLegal2.splice(index, 1);
        setAssignLegal2(assignLegal2);
      }
    } else {
      assignLegal2.unshift(item);
      setAssignLegal2(assignLegal2);
    }
  }
  const [selectLegalPerson, setSelectedLegalPerson] = useState([]);
  const [selectMhpssPerson, setSelectedMhpssPerson] = useState([]);
  useEffect(() => {}, [selectLegalPerson]);

  const handleSave = () => {
    let a = {
      CaseID: 3,

      LegalCaseManagerUserID: 1,

      Legal: {userId: [5, 6], type: 'Legal'},

      MHPSS: {userId: [7, 8], type: 'Mental Health Physcho-Social Specialist'},
    };
    dispatch(caseAssignment(a));
  };

  const [MHPSSPersons, setMHPSSPersons] = useState([]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.centeredView}>
          <Text style={styles.AssignPopup}>Legal Person</Text>
          <View style={styles.mhpsscontent}>
            {mhpss2 &&
              mhpss2.length > 0 &&
              mhpss2.map((val, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      let c = mhpss2.filter((d, index) => index != i);
                      setMhpss2([...c]);
                      setOptionValue1(val, 0);
                      console.log(val);
                    }}>
                    <View style={styles.selectedStyle2}>
                      <Text style={styles.textSelectedStyle2}>{val.label}</Text>
                      <FontAwesomeIcon
                        icon={faXmark}
                        size={16}
                        color={'#000'}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
          <View style={styles.assingnmentdrop}>
            <Dropdown
              containerStyle={{backgroundColor: '#ddd'}}
              style={styles.droppingpopup}
              placeholderStyle={styles.AssignplaceholderStyle}
              selectedTextStyle={styles.AssignselectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={assignLegal}
              maxHeight={250}
              maxSelect={3}
              labelField="label"
              valueField="id"
              placeholder="Select the Legal Person"
              value={assignValue1}
              onChange={item => {
                setAssignValue1(item);
                setLegalPerson(item);
                setOptionValue1(item, 1);
              }}
            />
            <View>
              {incidentError.legalerr && (
                <Text style={styles.incidenterrmessage}>
                  {incidentError.legalerr}
                </Text>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.AssignPopup}>MHPSS</Text>
            <View style={styles.mhpsscontent}>
              {mhpss &&
                mhpss.length > 0 &&
                mhpss.map((val, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        let a = mhpss.filter((b, index) => index != i);
                        setMhpss([...a]);
                        setOptionValue2(val, 0);
                      }}>
                      <View style={styles.selectedStyle2}>
                        <Text style={styles.textSelectedStyle2}>
                          {val.label}
                        </Text>
                        <FontAwesomeIcon
                          icon={faXmark}
                          size={16}
                          color={'#000'}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </View>
            <View style={styles.assingnmentdrop}>
              <Dropdown
                containerStyle={{backgroundColor: '#ddd'}}
                style={styles.droppingpopup}
                placeholderStyle={styles.AssignplaceholderStyle}
                selectedTextStyle={styles.AssignselectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={assignLegal2}
                maxSelect={3}
                maxHeight={250}
                labelField="label"
                valueField="id"
                placeholder="Select the MHPSS Person"
                value={assignValue2}
                dropdownPosition="bottom"
                onChange={item => {
                  setAssignValue2(item);
                  setMhpssPerson(item);
                  setOptionValue2(item, 1);
                }}
              />
              <View>
                {incidentError.mphsserr && (
                  <Text style={styles.incidenterrmessage}>
                    {incidentError.mphsserr}
                  </Text>
                )}
              </View>
            </View>
          </View>

          <Pressable style={styles.button1}>
            <Text
              style={styles.assigntextStyle}
              onPress={() => {
                handleSave();
                incidentmodal();
              }}>
              Submit
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CaseAssignment;

const styles = StyleSheet.create({
  centeredView: {
    top: 40,
    alignSelf: 'center',
    height: hp('95%'),
  },

  button1: {
    borderRadius: 10,
    padding: 10,
    width: wp('50%'),
    height: hp('6%'),
    top: 10,
    backgroundColor: '#e26a00',
    alignSelf: 'center',
  },
  assigntextStyle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
  },
  AssignPopup: {
    color: '#000',
    top: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  droppingpopup: {
    height: hp('7%'),
    borderRadius: 5,
    Color: 'gray',
    top: 20,
    width: wp('70%'),
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
  },

  AssignselectedTextStyle: {
    marginLeft: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: 'gray',
  },
  selectedTextStyle: {
    marginLeft: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: 'gray',
  },

  selectedStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#fff',
    color: 'white',
    marginTop: 8,
    marginRight: 12,
    bottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: wp('70%'),
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textSelectedStyle2: {
    marginRight: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#000',
    flexDirection: 'row',
  },

  AssignplaceholderStyle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    padding: 4,
  },

  assingnmentdrop: {
    height: hp('20%'),
  },
  iconStyle: {
    width: 20,
    marginRight: 10,
    height: 25,
  },
  incidenterrmessage: {
    color: 'red',
    padding: 5,
    top: 15,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'gray',
  },
  mhpsscontent: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    top: 25,
  },
});
