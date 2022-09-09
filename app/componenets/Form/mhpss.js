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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import {ScrollView} from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DSMTrauma from './DSMTraumaScreening';
import {useDispatch, useSelector} from 'react-redux';
import {
  sendMhpssData,
  sendMhpssDataResponse,
} from '../../Redux/IncidentLog/IncidentList/Action';
import {useRoute} from '@react-navigation/native';

const Mhpss = () => {

  const route = useRoute();

  const [text, setText] = useState('');
  const [date, setDate] = React.useState(['']);
  const [date1, setDate1] = React.useState(['']);
  const [dateIndex, setDateIndex] = React.useState(true);
  const [dateIndex1, setDateIndex1] = React.useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] =
    React.useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };
  const handleConfirm = (date, i) => {
    console.log(i);
    date[dateIndex] = date;
    setDate(date);
    hideDatePicker();
  };
  const handleConfirm1 = (date, i) => {
    date1[dateIndex1] = date;
    setDate1(date1);
    hideDatePicker1();
  };
  const getDate = i => {
    console.log(date[i]);
    let tempDate = date[i] === undefined ? '' : date[i].toString().split(' ');
    return date[i] !== undefined && date[i] !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };
  const getDate1 = i => {
    let tempDate1 =
      date1[i] === undefined ? '' : date1[i].toString().split(' ');
    console.log(date1[i]);
    console.log(tempDate1);
    return date1[i] !== undefined && date1[i] !== ''
      ? `${tempDate1[0]} ${tempDate1[1]} ${tempDate1[2]} ${tempDate1[3]}`
      : '';
  };
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [open, setOpen] = React.useState(false);
  const [supportive, setSupportive] = React.useState([]);

  const [checked, setChecked] = React.useState(['']);
  let dispatch = useDispatch();
  let mhpssresponse = useSelector(
    state => state.Incidentlist.sendMhpssDataResponse,
  );
  useEffect(() => {
   
    if (mhpssresponse?.StatusCode == 201) {
      alert('reintegration was successfully created');
      dispatch(sendMhpssData(''));
    }
   
  }, [mhpssresponse]);

  useEffect(()=>{
    console.log('supportive',supportive)
  },[supportive])
 
const [mhpss,setMhpss]=useState({
  CaseID: 1,
  SupportiveCall: 1,
  SupportiveCallDate: "",
  Consent: "",
  Counselling: "",
  TraumaScreeningTool: null,
  IsNextSupportiveCallScheduled: "",
  NextSupportiveCallDate: ""
})
  const handleSupportive = () => {
    if (supportive.length < 5) {
      const datamhpss = [
        {
          CaseID: 1,
          SupportiveCall: 1,
          SupportiveCallDate: "2022-07-21",
          Consent: "yes",
          Counselling: "counselling data",
          TraumaScreeningTool: null,
          IsNextSupportiveCallScheduled: "true",
          NextSupportiveCallDate: "2022-07-21"
        },

        {
          caseId: 1,
          supportiveCall: 2,
          supportiveCallDate: '2022-09-06',
          consent: 'yes',
          counselling: '',
          isNextSupportiveCallScheduled: true,
          nextSupportiveCallDate: '2022-09-07',
        },

        {
          caseId: 1,
          supportiveCall: 3,
          supportiveCallDate: '2022-09-07',
          consent: 'yes',
          counselling: '',
          isNextSupportiveCallScheduled: true, 
          nextSupportiveCallDate: '2022-09-08',
        },
        {
          caseId: 1,
          supportiveCall: 4,
          supportiveCallDate: '2022-09-08',
          consent: 'yes',
          counselling: '',
          isNextSupportiveCallScheduled: true, // after 3 supportive call, upcoming are optional
          nextSupportiveCallDate: '2022-09-09',
        },
        {
          caseId: 1,
          supportiveCall: 5,
          supportiveCallDate: '2022-09-10',
          consent: 'yes',
          counselling: '',
          isNextSupportiveCallScheduled: true, // after 3 supportive call, upcoming are optional
          nextSupportiveCallDate: '2022-09-10',
        },
      ];

      setSupportive([...supportive, datamhpss]);
    }
  };

  function updateChecked(mhpssVal, index) {
    checked[index] = mhpssVal;
    setChecked(checked);
    setSupportive([...supportive]);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.reintegration}>
            <Text style={styles.reintegrationTitle}>MHPSS </Text>
          </View>
          {supportive.length < 1 && (
            <TouchableOpacity style={styles.Initiatebutton}>
              <Text
                style={styles.formbuttoninput}
                onPress={() => handleSupportive()}>
                Initiate{' '}
              </Text>
            </TouchableOpacity>
          )}

          {supportive.map((datamhpss, i) => {
            return (
              <>
                <View style={{marginTop: 10}}>
                <Text style={styles.FormTitle2}>
                    Case Id -{datamhpss[i].caseId}:
                  </Text>
                  <Text style={styles.FormTitle}>
                    Supportive Call -{datamhpss[i].supportiveCall}:
                  </Text>
                  <View style={{marginTop: 20, marginLeft: 5}}>
                    <Text style={styles.FormTitle}>Date & Time</Text>
                    <View style={{marginTop: 5}}>
                      <TextInput
                        key={i}
                        style={styles.textInput1}
                        value={datamhpss[i].SupportiveCallDate}
                        placeholder="  Enter Date"
                        placeholderTextColor={'gray'}
                      />

                      <Text
                        style={{left: 300, bottom: 35}}
                        onPress={showDatePicker}>
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
                        onConfirm={d => {
                          // handleConfirm(date, i);
                          date[i] = d;
                          setDate(date);
                          hideDatePicker();
                        }}
                        onCancel={hideDatePicker}
                      />
                    </View>
                  </View>
                </View>
                <View style={{bottom: 20, marginLeft: 10}}>
                  <Text style={styles.radioname}>
                    Consent
                    <Text style={styles.star}></Text>
                  </Text>
                  <View style={styles.SectionStyle1}>
                    <RadioButton
                      uncheckedColor={'gray'}
                      color={'#ff6b00'}
                      value="first"
                      status={checked[i] == 'first' ? 'checked' : 'unchecked'}
                      onPress={() => updateChecked('first', i)}
                    />
                    <Text style={styles.gender}>Yes</Text>
                    <RadioButton
                      uncheckedColor={'gray'}
                      color={'#ff6b00'}
                      value="second"
                      status={checked[i] == 'second' ? 'checked' : 'unchecked'}
                      onPress={() => updateChecked('second', i)}></RadioButton>
                    <Text style={styles.gender}>No</Text>
                  </View>
                  <View style={styles.container}>
                    {checked[i] == 'first' && (
                      <View style={{marginTop: 15}}>
                        <View style={{bottom: 5}}>
                          {i == 1 ? (
                            <View style={styles.Dsmtrauma}>
                              <DSMTrauma />
                            </View>
                          ) : (
                            <View style={{bottom: 5}}>
                              <Text style={styles.FormTitle}>
                                Counselling:<Text style={styles.star}>*</Text>
                              </Text>
                              <View style={styles.tabfourfirst1}>
                                <TextInput
                                  style={styles.counsInput}
                                  value={datamhpss[i].Counselling}
                                  type="text"
                                  placeholder="Enter Counselling "
                                  placeholderTextColor="gray"
                                />
                              </View>
                            </View>
                          )}
                        </View>
                        <Text style={styles.FormTitle}>
                          Scheduling for next session date & Time{' '}
                        </Text>
                        <View style={{marginTop: 5}}>
                          <TextInput
                            style={styles.textInput1}
                            value={datamhpss[i].NextSupportiveCallDate}
                            placeholder="  Enter Date"
                            placeholderTextColor={'gray'}
                          />

                          <Text
                            style={{left: 300, bottom: 35}}
                            onPress={showDatePicker1}>
                            <FontAwesomeIcon
                              size={20}
                              icon={faCalendarDays}
                              title="Show Picker"
                              color="#00bad7"
                            />
                          </Text>
                          <DateTimePickerModal
                            isVisible={isDatePickerVisible1}
                            mode="date"
                            onConfirm={d => {
                              // handleConfirm(date, i);
                              date1[i] = d;
                              setDate1(date1);
                              hideDatePicker1();
                            }}
                            onCancel={hideDatePicker1}
                          />
                        </View>

                        {supportive.length - 1 == i && (
                          <TouchableOpacity style={styles.add}>
                            <Text
                              style={styles.formbuttoninput}
                              onPress={() => handleSupportive()}>
                              Add
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                  </View>
                </View>
              </>
            );
          })}
        </View>

        <View>
          <TouchableOpacity
            style={styles.formbutton}
            // onPress={() => route.change()}
            >
            <Text style={styles.formbuttoninput}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Mhpss;
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
  FormTitle1: {
    color: '#000',
    fontFamily: 'Lato',
    fontSize: 13.5,
    alignSelf: 'flex-start',
    marginLeft: 12,
  },
  FormTitle2: {
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

  uri: {
    color: '#0f0201',
    fontSize: 14,
    marginLeft: 60,
  },

  FormDrop1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#21',
    marginVertical: 6,
    fontFamily: 'lato',
    placeholderTextColor: '#9e9e9e',
    marginRight: 80,
    borderRadius: 10,
    fontSize: 15,
  },
  Drop1: {
    width: 90,
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
  formbuttonedit: {
    alignSelf: 'center',
    width: 89,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#19B5FE',
    marginTop: 20,
    marginRight: 10,
  },
  formbuttoncancel: {
    alignSelf: 'center',
    width: 89,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
    marginTop: 20,
    marginRight: 10,
  },
  formbuttoninput: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  formbutton1: {
    alignSelf: 'center',
    width: 350,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#000000',
    marginTop: 10,
  },
  formbuttoninput1: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'lato',
  },
  scrollView: {
    paddingVertical: 8,
    marginTop: 12,
  },
  Rights: {
    top: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontFamily: 'bold',
    fontSize: 10,
  },
  RadioButton: {
    buttonColor: 'yellow',
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
  formdrop: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    marginLeft: 12,
    width: wp('85%'),
  },
  btn: {
    height: hp('77%'),
    width: wp('85%'),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    alignSelf: 'center',
    width: 250,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    marginTop: 30,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  FormInputdate: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
    marginVertical: 6,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginRight: 20,
    bottom: 40,
    padding: 10,
    borderWidth: 1,
    width: wp('82%'),
    marginTop: 12,
    marginLeft: 45,
    borderColor: '#ccc',
  },
  FormInputdate1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 11,
    color: '#212121',
    marginVertical: 6,
    fontFamily: 'M',
    fontSize: 14,
    marginRight: 20,
    bottom: 40,
    marginLeft: 30,
  },
  formeditbutton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
    marginLeft: 5,
  },
  formbuttonsubmit: {
    alignSelf: 'center',
    width: 89,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    marginTop: 20,
    marginRight: 10,
  },

  checkbox: {
    marginLeft: 10,
  },
  star: {
    color: 'red',
  },
  dropdownStyle: {
    backgroundColor: '#ecf0f1',
    marginLeft: -6,
    padding: 10,
    alignSelf: 'stretch',
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 5,
    width: wp('90%'),
  },
  dropopen: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: -6,
    width: wp('90%'),
  },
  reintegration: {
    marginTop: 25,
    marginLeft: 2,
    marginTop: 38,
    height: 40,
    alignItems: 'center',
  },
  reintegrationTitle: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },

  valitation: {
    color: 'red',
  },
  tabfourfirst: {
    height: hp('7%'),
    borderRadius: 5,
    width: wp('90%'),

    borderWidth: 2,
    marginTop: 10,
    marginLeft: 8,
    borderColor: '#ccc',
  },
  dropdown: {
    backgroundColor: '#ecf0f1',
    marginLeft: 5,
    padding: 10,
    alignSelf: 'stretch',
    marginVertical: 6,

    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 5,
    width: wp('90%'),
  },
  placeholderStyle: {
    fontSize: 14,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
  dropping: {
    backgroundColor: '#ecf0f1',
    padding: 5,
    alignSelf: 'stretch',
    height: hp('7%'),
    bottom: 2.5,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 5,
    width: wp('90%'),
  },
  droppingn: {
    marginLeft: 3,
    top: 10,
  },
  Filefill: {
    bottom: 15,
    color: '#000',
    fontFamily: 'Lato',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 13,
  },
  lasttab: {
    padding: 5,
  },
  counseling: {
    color: '#000',
    fontFamily: 'Lato',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 13,
    bottom: 20,
  },
  textInput: {
    height: hp('7%'),
    borderRadius: 5,
    Color: 'gray',

    borderWidth: 1,
    marginTop: 10,
    marginLeft: 7,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
  },
  textInput1: {
    height: hp('7%'),
    borderRadius: 5,
    width: wp('90%'),
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 7,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
    padding: 5,
  },
  Initiatebutton: {
    alignSelf: 'center',
    width: wp('45%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#00bad7',
    marginLeft: 5,
    bottom: 10,
  },
  add: {
    alignSelf: 'center',
    width: wp('49%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#46bb95',
    marginTop: 14,
  },
  counsInput: {
    padding: 10,
    borderRadius: 5,
    color: '#555',
    backgroundColor: '#ecf0f1',
    fontFamily: 'Lato',
    height: hp('14.5%'),
  },
  tabfourfirst1: {
    height: hp('15%'),
    borderRadius: 5,
    width: wp('90%'),
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 8,
    borderColor: '#ccc',
  },
  Dsmtrauma: {
    marginRight: 10,
    marginLeft: -10,
    bottom: 5,
    marginBottom: 10,
  },
});
