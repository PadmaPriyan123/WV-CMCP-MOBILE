import React, {useCallback, useState, useEffect} from 'react';
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
  getMhpss,
} from '../../Redux/IncidentLog/IncidentList/Action';
import {useRoute,useNavigation} from '@react-navigation/native';

const Mhpss = () => {
  const route = useRoute();

  let dispatch = useDispatch();

  const navigation = useNavigation();


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  let dateIns = new Date();
  let date = String(dateIns.getDate()).padStart(2, '0');
  let month = String(dateIns.getMonth() + 1).padStart(2, '0');
  let year = dateIns.getFullYear();
  let currentDate = `${year}-${month}-${date}`;

  const mhpssSample = useSelector(state => state.Incidentlist.mhpssDetail);
  const [questionArray, setQuestionArray] = useState([
    {
      QuestionID: 1,

      Question:
        'Having upsetting thoughts or pictures about it that came into your head when you didn’t want them to',

      Answer: '',
    },

    {
      QuestionID: 2,

      Question: 'Having bad dreams or nightmares',

      Answer: '',
    },

    {
      QuestionID: 3,

      Question:
        'Acting or feeling as if it was happening again (seeing or hearing something and feeling as if you are there again)',

      Answer: '',
    },

    {
      QuestionID: 4,

      Question:
        ' Feeling upset when you remember what happened (for example, feeling scared, angry, sad, guilty, confused)',

      Answer: '',
    },

    {
      QuestionID: 5,

      Question:
        ' Feeling upset when you remember what happened (for example, feeling scared, angry, sad, guilty, confused)',

      Answer: '',
    },

    {
      QuestionID: 6,

      Question: 'Trying not to think about it or have feelings about it',

      Answer: '',
    },

    {
      QuestionID: 7,

      Question:
        'Trying to stay away from anything that reminds you of what happened (for example, people, places, or conversations about it)',

      Answer: '',
    },

    {
      QuestionID: 8,

      Question: 'Not being able to remember an important part of what happened',

      Answer: '',
    },

    {
      QuestionID: 9,

      Question:
        'Having bad thoughts about yourself, other people, or the world (for example, “I can’t do anything right”, “All people are bad”, “The world is a scary place”)',

      Answer: '',
    },

    {
      QuestionID: 10,

      Question:
        'Thinking that what happened is your fault (for example, “I should have known better”, “I shouldn’t have done that”, “I deserved it”',

      Answer: '',
    },

    {
      QuestionID: 11,

      Question: 'Having strong bad feelings (like fear, anger, guilt, or shame',
      Answer: '',
    },

    {
      QuestionID: 12,

      Question: 'Having much less interest in doing things you used to d',

      Answer: '',
    },

    {
      QuestionID: 13,

      Question:
        'Not feeling close to your friends or family or not wanting to be around them',

      Answer: '',
    },

    {
      QuestionID: 14,

      Question:
        'Trouble having good feelings (like happiness or love) or trouble having any feelings at all',

      Answer: '',
    },

    {
      QuestionID: 15,

      Question:
        'Getting angry easily (for example, yelling, hitting others, throwing things)',

      Answer: '',
    },

    {
      QuestionID: 16,

      Question:
        'Doing things that might hurt yourself (for example, taking drugs, drinking alcohol, running away, cutting yourself)',

      Answer: '',
    },

    {
      QuestionID: 17,

      Question:
        'Doing things that might hurt yourself (for example, taking drugs, drinking alcohol, running away, cutting yourself',

      Answer: '',
    },

    {
      QuestionID: 18,

      Question:
        'Being jumpy or easily scared (for example, when someone walks up behind you, when you hear a loud noise)',

      Answer: '',
    },

    {
      QuestionID: 19,

      Question:
        'Having trouble paying attention (for example, losing track of a story on TV, forgetting what you read, unable to pay attention in class)',

      Answer: '',
    },

    {
      QuestionID: 20,

      Question: 'Having trouble falling or staying asleep',

      Answer: '',
    },
  ]);

  const [callData, setCallData] = useState({
    CaseID: route.params.CaseID,
    SupportiveCall: 1,
    SupportiveCallDate: currentDate,
    Consent: '',
    Counselling: '',
    TraumaScreeningTool: null,
    IsNextSupportiveCallScheduled: 'false',
    NextSupportiveCallDate: '',
  });
  const [supportive, setSupportive] = useState([]);

  const [activeSession, setactiveSession] = useState(false);

  const [initiate, setinitiate] = useState(true);

  let mhpssresponse = useSelector(
    state => state.Incidentlist.sendMhpssDataResponse,
  );

  useEffect(() => {
    console.log('route', route);
    dispatch(getMhpss(route.params.CaseID));
  }, []);

  useEffect(() => {
    if (mhpssresponse && mhpssresponse?.StatusCode == 201) {
      alert(mhpssresponse.StatusMessage);
      let paramasData = route.params;
      paramasData.MHPSSID = mhpssresponse.MHPSSSupportiveCall_ID;
      navigation.navigate('Viewcard', paramasData);
      dispatch(sendMhpssDataResponse(''));
    }
  }, [mhpssresponse]);

  useEffect(() => {
    if (
      mhpssSample &&
      mhpssSample.StatusCode == 201 &&
      mhpssSample?.Result.length > 0
    ) {
      setSupportive([...mhpssSample.Result]);
      let checkSupportive = mhpssSample.Result[mhpssSample.Result.length - 1];
      if (checkSupportive.NextSupportiveCallDate == currentDate) {
        setactiveSession(true);
        setCallData({
          ...callData,
          SupportiveCall: mhpssSample.Result.length + 1,
        });
      }
    } else if (
      mhpssSample &&
      mhpssSample.StatusCode == 400 &&
      mhpssSample?.Result == null
    ) {
      setCallData({...callData, SupportiveCall: 1});
    }
  }, [mhpssSample]);

  const handleSupportive = () => {
    setinitiate(false);
    setactiveSession(true);
  };

  const handleQuestion = (index, value) => {
    let Answer = questionArray;
    questionArray[index].Answer = value;

    setQuestionArray([...Answer]);
  };

  const handleSumbit = () => {
    if (
      mhpssSample &&
      mhpssSample.StatusCode == 201 &&
      mhpssSample?.Result.length == 1 
    ) {
      let reqData = callData;
      reqData.Counselling = null;
      reqData.TraumaScreeningTool = questionArray;

      dispatch(sendMhpssData(reqData));
    }else{
      dispatch(sendMhpssData(callData));
    }
   
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.reintegration}>
            <Text style={styles.reintegrationTitle}>MHPSS </Text>
          </View>
          {supportive.length < 1 && initiate && (
            <TouchableOpacity style={styles.Initiatebutton}>
              <Text
                style={styles.formbuttoninput}
                onPress={() => handleSupportive()}>
                Initiate{' '}
              </Text>
            </TouchableOpacity>
          )}

          {supportive.map((data, i) => {
            return (
              <>
                <View style={{marginTop: 10}}>
                  <Text style={styles.FormTitle2}>Case Id -{data.CaseID}:</Text>
                  <Text style={styles.FormTitle}>
                    Supportive Call -{data.SupportiveCall}:
                  </Text>
                  <View style={{marginTop: 20, marginLeft: 5}}>
                    <Text style={styles.FormTitle}>Date & Time</Text>
                    <View style={{marginTop: 5}}>
                      <TextInput
                        key={i}
                        style={styles.textInput1}
                        value={data.SupportiveCallDate}
                        editable={false}
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
                      value="yes"
                      status={data.Consent == 'yes' ? 'checked' : 'unchecked'}
                      disabled
                    />
                    <Text style={styles.gender}>Yes</Text>
                    <RadioButton
                      uncheckedColor={'gray'}
                      color={'#ff6b00'}
                      value="no"
                      status={data.Consent == 'no' ? 'checked' : 'unchecked'}
                      disabled></RadioButton>
                    <Text style={styles.gender}>No</Text>
                  </View>
                  <View style={styles.container}>
                    {data.Consent == 'yes' && (
                      <View style={{marginTop: 15}}>
                        <View style={{bottom: 5}}>
                          {data.TraumaScreeningTool.length > 0 ? (
                            <View style={styles.Dsmtrauma}>
                              <DSMTrauma
                                question={JSON.parse(data.TraumaScreeningTool)}
                                change={handleQuestion}
                              />
                            </View>
                          ) : (
                            <View style={{bottom: 5}}>
                              <Text style={styles.FormTitle}>
                                Counselling:<Text style={styles.star}>*</Text>
                              </Text>
                              <View style={styles.tabfourfirst1}>
                                <TextInput
                                  style={styles.counsInput}
                                  value={data.Counselling}
                                  editable={false}
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
                            value={data.NextSupportiveCallDate}
                            editable={false}
                          />
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              </>
            );
          })}
          {activeSession == true && (
            <>
              <View style={{marginTop: 10}}>
                <Text style={styles.FormTitle2}>
                  Case Id -{callData.CaseID}:
                </Text>
                <Text style={styles.FormTitle}>
                  Supportive Call -{callData.SupportiveCall}:
                </Text>
                <View style={{marginTop: 20, marginLeft: 5}}>
                  <Text style={styles.FormTitle}>Date & Time</Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput1}
                      value={callData.SupportiveCallDate}
                      placeholder="  Enter Date"
                      placeholderTextColor={'gray'}
                      editable={false}
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
                    value="yes"
                    status={callData.Consent == 'yes' ? 'checked' : 'unchecked'}
                    onPress={() => setCallData({...callData, Consent: 'yes'})}
                  />
                  <Text style={styles.gender}>Yes</Text>
                  <RadioButton
                    uncheckedColor={'gray'}
                    color={'#ff6b00'}
                    value="no"
                    status={callData.Consent == 'no' ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setCallData({...callData, Consent: 'no'})
                    }></RadioButton>
                  <Text style={styles.gender}>No</Text>
                </View>
                <View style={styles.container}>
                  {callData.Consent == 'yes' && (
                    <View style={{marginTop: 15}}>
                      <View style={{bottom: 5}}>
                        {supportive.length == 1 ? (
                          <View style={styles.Dsmtrauma}>
                            <DSMTrauma
                              question={questionArray}
                              change={handleQuestion}
                            />
                          </View>
                        ) : (
                          <View style={{bottom: 5}}>
                            <Text style={styles.FormTitle}>
                              Counselling:<Text style={styles.star}>*</Text>
                            </Text>
                            <View style={styles.tabfourfirst1}>
                              <TextInput
                                style={styles.counsInput}
                                value={callData.Counselling}
                                type="text"
                                placeholder="Enter Counselling "
                                placeholderTextColor="gray"
                                onChangeText={newText =>
                                  setCallData({
                                    ...callData,
                                    Counselling: newText,
                                  })
                                }
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
                          value={callData.NextSupportiveCallDate}
                          placeholder="  Enter Date"
                          placeholderTextColor={'gray'}
                        />

                        <Text
                          style={{left: 300, bottom: 35}}
                          onPress={() => setDatePickerVisibility(true)}>
                          <FontAwesomeIcon
                            size={20}
                            icon={faCalendarDays}
                            title="Show Picker"
                            color="#00bad7"
                          />
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </>
          )}
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={value => {
            let dateIns = new Date(value);
            let date = String(dateIns.getDate()).padStart(2, '0');
            let month = String(dateIns.getMonth() + 1).padStart(2, '0');
            let year = dateIns.getFullYear();
            let currentDate = `${year}-${month}-${date}`;
            setCallData({
              ...callData,
              NextSupportiveCallDate: currentDate,
              IsNextSupportiveCallScheduled: 'true',
            });
            setDatePickerVisibility(false);
          }}
          onCancel={() => setDatePickerVisibility(false)}
        />
        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.formbutton}
            onPress={() => handleSumbit()}>
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
