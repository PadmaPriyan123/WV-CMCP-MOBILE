import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DocumentPicker from 'react-native-document-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';

import {ScrollView} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';

import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  IncidentLog,
  IncidentLogResponse,
} from '../../../Redux/IncidentLog/Action';

const Victim = ({route}) => {
  const navigation = useNavigation();

  const [date, setDate] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('date', date);
    let d = new Date(date);
    let dat = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    setValidation({
      ...validation,
      Victims_DoB: `${year}-${month}-${dat}`,
    });
    setDate(date);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  const [checked, setChecked] = React.useState('');

  const [fileResponse, setFileResponse] = React.useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const data = [
    {label: 'Child Trafficking', value: '1'},
    {label: 'Online sexual harassment ', value: '2'},
    {label: 'Sexual assault ', value: '3'},
    {label: 'Sexual harassment    ', value: '4'},
    {label: 'Sexual abuse', value: '5'},
    {label: 'Rape ', value: '6'},
    {label: 'Kidnap/ abduction    ', value: '7'},
    {label: 'Child Missing    ', value: '8'},
    {label: 'Forced Marriage', value: '9'},
    {label: ' Others  ', value: '10'},
  ];
  const [value, setValue] = useState(null);
  const data1 = [
    {label: 'Assam ', value: '1'},

    {label: 'West Bengal ', value: '2'},
  ];
  const [value1, setValue1] = useState(null);
  const data2 = [
    {label: 'Barpeta ', value: '1'},

    {label: 'West Baksa ', value: '2'},
  ];
  const [value2, setValue2] = useState(null);
  const data3 = [
    {label: 'Baganpara ', value: '1'},

    {label: ' Bajali ', value: '2'},
  ];
  const [value3, setValue3] = useState(null);
  const data4 = [
    {label: 'Amingaon ', value: '1'},

    {label: 'Angardhua ', value: '2'},
  ];
  const [value4, setValue4] = useState(null);
  const data5 = [
    {label: 'Balaibill', value: '1'},

    {label: 'Bamuni Gaon', value: '2'},
  ];
  const [value5, setValue5] = useState(null);
  const data6 = [
    {label: 'Lakhisarai Thana ', value: '1'},

    {label: 'Virupur Thana ', value: '2'},
  ];
  const [value6, setValue6] = useState(null);
  const data7 = [
    {label: 'Development Facilitator', value: '1'},
    {label: 'TS ', value: '2'},
    {label: 'SC ', value: '3'},
    {label: 'Case Manager', value: '4'},
    {label: 'DME', value: '5'},
    {label: 'MIS ', value: '6'},
    {label: 'Project Head   ', value: '7'},
  ];
  const [value7, setValue7] = useState(null);
  const [other, setOther] = useState(false);

  let dispatch = useDispatch();
  let incidentlogResponse = useSelector(
    state => state.Incidentlog.incidentlogSuccessfull,
  );
  useEffect(() => {
    // if (incidentlogResponse?.StatusCode === 201) {
    //   alert(incidentlogResponse.StatusMessage);
    //   navigation.navigate('Drawer');
    // }
    // dispatch(IncidentLog(''));
  }, [incidentlogResponse]);

  useEffect(() => {
    dispatch(IncidentLog(validation));
  }, []);

  let d = new Date();
  let dat = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  const [validation, setValidation] = useState({
    ReportersName: '',
    ReporterDesignationID: '',
    Date_of_reporting: `${year}-${month}-${dat}`,
    Name_of_the_Victim: '',
    Guardians_name: '',
    Victim_DoB_if_available: '',
    Victims_DoB: '',
    Proof_of_DoB: '',
    Victim_age: '',
    Nature_of_incident: '',
    StateID: '',
    DistrictID: '',
    BlockID: '',
    PanchayatID: '',
    VillageID: '',
    PoliceStationID: '',
    UserID: '',
  });

  const initialErrorMessage = {
    ReportersName: '',
    ReporterDesignationID: '',
    Date_of_reporting: '',
    Name_of_the_Victim: '',
    Guardians_name: '',
    Victim_DoB_if_available: '',
    Victims_DoB: '',
    Proof_of_DoB: '',
    Victim_age: '',
    Nature_of_incident: '',
    StateID: '',
    DistrictID: '',
    BlockID: '',
    PanchayatID: '',
    VillageID: '',
    PoliceStationID: '',
    UserID: '',
  };

  const [error, setError] = useState(initialErrorMessage);

  function myFunction() {
    dispatch(IncidentLog(validation));

    let a = {
      ReportersName: '',
      ReporterDesignationID: '',
      Date_of_reporting: '',
      Name_of_the_Victim: '',
      Guardians_name: '',
      Victim_DoB_if_available: '',
      Victims_DoB: '',
      Proof_of_DoB: '',
      Victim_age: '',
      Nature_of_incident: '',
      StateID: '',
      DistrictID: '',
      BlockID: '',
      PanchayatID: '',
      VillageID: '',
      PoliceStationID: '',
      UserID: '',
    };

    var letters = /[A-Za-z]{3,15}/;
    var empty = /^$/;
    var Age = /^[0-9]{1,2}$/;

    if (!validation.ReportersName) {
      a.ReportersName = '*Please enter the reporters name';
    }
    if (
      !letters.test(validation.ReportersName) &&
      !empty.test(validation.ReportersName)
    ) {
      a.ReportersName = 'Enter a valid reporter name';
    }
    if (!validation.ReporterDesignationID) {
      a.ReporterDesignationID = '*Please enter the designation';
    }
    if (!validation.Date_of_reporting) {
      a.Date_of_reporting = '*Please enter the date of reporting';
    }
    if (!validation.Name_of_the_Victim) {
      a.Name_of_the_Victim = '*Please enter the name of the victim';
    }
    if (
      !letters.test(validation.Name_of_the_Victim) &&
      !empty.test(validation.Name_of_the_Victim)
    ) {
      a.Name_of_the_Victim = 'Enter a valid  victim name';
    }
    if (!validation.Guardians_name) {
      a.Guardians_name = '*Please enter the gardian name';
    }
    if (
      !letters.test(validation.Guardians_name) &&
      !empty.test(validation.Guardians_name)
    ) {
      a.Guardians_name = 'Enter a valid guardian name';
    }
    if (!validation.Victim_age) {
      a.Victim_age = '*Please enter the victim age';
    }
    if (
      !Age.test(validation.Victim_age) &&
      !empty.test(validation.Victim_age)
    ) {
      a.Victim_age = 'Enter a valid victim age';
    }
    if (!validation.Victims_DoB) {
      a.Victims_DoB = '*Please select the victim date of birth';
    }
    if (!validation.Nature_of_incident) {
      a.Nature_of_incident = '*Please select the nature of incident';
    }
    if (!validation.StateID) {
      a.StateID = '*Please select the state';
    }
    if (!validation.DistrictID) {
      a.DistrictID = '*Please select the district';
    }
    if (!validation.BlockID) {
      a.BlockID = '*Please select the block';
    }
    if (!validation.PanchayatID) {
      a.PanchayatID = '*Please select the gram panchayat';
    }
    if (!validation.VillageID) {
      a.VillageID = '*Please select the village';
    }
    if (!validation.PoliceStationID) {
      a.PoliceStationID = '*Please select the police station';
    }
    if (Object.values(a).every(el => el === '')) {
      setError(a);
      dispatch(IncidentLog(validation));
    } else {
      setError(a);
    }
  }

  return (
    <View style={styles.Tab}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.Form}>
          <View style={{marginTop: -5}}>
            <Text style={styles.FormTitle}>
              Reporter's name:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter reporter's name"
                placeholderTextColor="gray"
                onChangeText={text => {
                  setValidation({...validation, ReportersName: text});
                }}
              />
            </View>
            <View>
              {error?.ReportersName && (
                <Text style={styles.errormessage}>{error?.ReportersName}</Text>
              )}
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Designation:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.droppingn}>
                <Dropdown
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data7}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select designation"
                  value={value7}
                  onChange={item => {
                    {
                      setValue7(item.value);
                      setValidation({
                        ...validation,
                        ReporterDesignationID: item.value,
                      });
                    }
                  }}
                />
              </View>
            </View>
            <View>
              {error?.ReporterDesignationID && (
                <Text style={styles.errormessage}>
                  {error?.ReporterDesignationID}
                </Text>
              )}
            </View>
            {/* <View style={{marginTop: 18}}>
              <Text style={styles.FormTitle}>
                Date of reporting:<Text style={styles.star}>*</Text>
              </Text>
              <View>
                <TextInput
                  style={styles.textInput}
                  value={getDate()}
                  placeholder="  Enter date"
                  placeholderTextColor={'gray'}
                />

                <Text style={{left: 300, bottom: 39}} onPress={showDatePicker}>
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
            </View> */}

            <View style={{top: 20}}>
              <Text style={styles.FormTitle}>
                Name of the victim:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Enter name of the victim"
                  placeholderTextColor="gray"
                  onChangeText={text => {
                    setValidation({...validation, Name_of_the_Victim: text});
                  }}
                />
              </View>
            </View>
            <View>
              {error?.Name_of_the_Victim && (
                <Text style={styles.errormessage}>
                  {error?.Name_of_the_Victim}
                </Text>
              )}
            </View>
            <View style={{marginTop: 25}}>
              <Text style={styles.FormTitle}>
                Guardian's name:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Enter guardian's name"
                  placeholderTextColor="gray"
                  onChangeText={text => {
                    setValidation({...validation, Guardians_name: text});
                  }}
                />
              </View>
            </View>
            <View>
              {error?.Guardians_name && (
                <Text style={styles.errormessage}>{error?.Guardians_name}</Text>
              )}
            </View>
            <View style={{marginTop: 3, marginLeft: 10}}>
              <Text style={styles.radioname}>
                Victim's dob (is available):<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.SectionStyle1}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  status={
                    validation.Victim_DoB_if_available === 'Yes'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    setValidation({
                      ...validation,
                      Victim_DoB_if_available: 'Yes',
                    })
                  }
                />
                <Text style={styles.gender}> Yes</Text>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="Second"
                  status={
                    validation.Victim_DoB_if_available === 'No'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    setValidation({
                      ...validation,
                      Victim_DoB_if_available: 'No',
                    })
                  }
                />
                <Text style={styles.gender}>No</Text>
              </View>
            </View>

            <View style={styles.container}>
              {/*Here we will return the view when state is true 
        and will return false if state is false*/}
              {validation.Victim_DoB_if_available === 'Yes' && (
                <View style={{marginTop: 20}}>
                  <Text style={styles.FormTitle}>Victim (dob) : </Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput}
                      value={getDate()}
                      placeholder="  Enter Date"
                      placeholderTextColor={'gray'}
                    />

                    <Text
                      style={{left: 300, bottom: 39}}
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
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                  </View>
                  <View>
                    <View style={{marginTop: 20}}>
                      <Text style={styles.Filefill}>Victim Documents:</Text>

                      {fileResponse.map((file, index) => (
                        <Text
                          key={index.toString()}
                          style={styles.uri}
                          numberOfLines={1}
                          ellipsizeMode={'middle'}>
                          {file?.uri}
                        </Text>
                      ))}

                      <Text onPress={handleDocumentSelection}>
                        <FontAwesomeIcon
                          icon={faFile}
                          color="gray"
                          style={styles.fileUpload}
                        />
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Victim's age:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  keyboardType="numeric"
                  placeholder="Enter victims age"
                  placeholderTextColor="gray"
                  onChangeText={text => {
                    setValidation({...validation, Victim_age: text});
                  }}
                />
              </View>
            </View>
            <View>
              {error?.Victim_age && (
                <Text style={styles.errormessage}>{error?.Victim_age}</Text>
              )}
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Nature of incident:<Text style={styles.star}>*</Text>
              </Text>

              <View style={styles.droppingn}>
                <Dropdown
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select nature of incident"
                  value={value}
                  onChange={item => {
                    {
                      setValue(item.value);
                      item.value === '10' ? setOther(true) : setOther(false);
                      setValidation({
                        ...validation,
                        Nature_of_incident: item.value,
                      });
                    }
                  }}
                />
              </View>
              <View>
                {error?.Nature_of_incident && (
                  <Text style={styles.errormessage}>
                    {error?.Nature_of_incident}
                  </Text>
                )}
              </View>
            </View>
            {other === true && (
              <View style={{marginTop: 25}}>
                <Text style={styles.FormTitle}>
                  Others (Nature of incident):<Text style={styles.star}>*</Text>
                </Text>
                <View style={styles.formtotalinput}>
                  <TextInput
                    style={styles.FormInput}
                    type="text"
                    placeholder="Others"
                    placeholderTextColor="gray"
                  />
                </View>
              </View>
            )}
            <View style={{marginTop: 25}}>
              <Text style={styles.FormTitle}>
                State:<Text style={styles.star}>*</Text>{' '}
              </Text>

              <View style={styles.droppingn}>
                <Dropdown
                  containerStyle={{backgroundColor: '#fff'}}
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data1}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select state"
                  value={value1}
                  onChange={item => {
                    {
                      setValue1(item.value);
                      setValidation({...validation, StateID: item.value});
                    }
                  }}
                />
              </View>
            </View>
            <View>
              {error?.StateID && (
                <Text style={styles.errormessage}>{error?.StateID}</Text>
              )}
            </View>
            <View style={{marginTop: 25}}>
              <Text style={styles.FormTitle}>
                District:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.droppingn}>
                <Dropdown
                  containerStyle={{backgroundColor: '#fff'}}
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data2}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select district"
                  value={value2}
                  onChange={item => {
                    {
                      setValue2(item.value);
                      setValidation({...validation, DistrictID: item.value});
                    }
                  }}
                />
              </View>
              <View>
                {error?.DistrictID && (
                  <Text style={styles.errormessage}>{error?.DistrictID}</Text>
                )}
              </View>
              <View style={{marginTop: 25}}>
                <Text style={styles.FormTitle}>Block: </Text>
                <View style={styles.droppingn}>
                  <Dropdown
                    containerStyle={{backgroundColor: '#fff'}}
                    style={styles.dropping}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={data3}
                    maxHeight={250}
                    labelField="label"
                    valueField="value"
                    placeholder="Select block"
                    value={value3}
                    onChange={item => {
                      setValue3(item.value);
                      setValidation({...validation, BlockID: item.value});
                    }}
                  />
                </View>
              </View>
            </View>
            <View>
              {error?.BlockID && (
                <Text style={styles.errormessage}>{error?.BlockID}</Text>
              )}
            </View>
            <View style={{marginTop: 25}}>
              <Text style={styles.FormTitle}>Gram panchayat:</Text>

              <View style={styles.droppingn}>
                <Dropdown
                  containerStyle={{backgroundColor: '#fff'}}
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data4}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Gram panchayat"
                  value={value4}
                  onChange={item => {
                    setValue4(item.value);
                    setValidation({...validation, PanchayatID: item.value});
                  }}
                />
              </View>
            </View>
            <View>
              {error?.PanchayatID && (
                <Text style={styles.errormessage}>{error?.PanchayatID}</Text>
              )}
            </View>
            <View style={{marginTop: 25}}>
              <Text style={styles.FormTitle}>
                Village:<Text style={styles.star}>*</Text>{' '}
              </Text>
              <View style={styles.droppingn}>
                <Dropdown
                  containerStyle={{backgroundColor: '#fff'}}
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data5}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select village"
                  value={value5}
                  onChange={item => {
                    {
                      setValue5(item.value);
                      setValidation({...validation, VillageID: item.value});
                    }
                  }}
                />
              </View>
            </View>
            <View>
              {error?.VillageID && (
                <Text style={styles.errormessage}>{error?.VillageID}</Text>
              )}
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.FormTitle}>Police station:</Text>
              <View style={styles.droppingn}>
                <Dropdown
                  containerStyle={{backgroundColor: '#fff'}}
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data6}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select police station"
                  value={value6}
                  onChange={item => {
                    setValue6(item.value);
                    setValidation({...validation, PoliceStationID: item.value});
                  }}
                />
              </View>
            </View>
            <View>
              {error?.PoliceStationID && (
                <Text style={styles.errormessage}>
                  {error?.PoliceStationID}
                </Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.victimbutton}>
        <TouchableOpacity
          style={styles.formbutton0}
          onPress={() => route.change()}>
          <Text style={styles.formbuttoninput}>SAVE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.formbutton}
          onPress={() => myFunction()}>
          <Text style={styles.formbuttoninput}>NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Victim;
const styles = StyleSheet.create({
  Tab: {
    backgroundColor: '#fff',
    height: hp('100%'),
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
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    bottom: 40,

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
    fontSize: 14,
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
    width: wp('88%'),
  },
  droppingn: {
    marginLeft: 8,
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
  victimbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: hp('20%'),
  },
  formbutton0: {
    alignSelf: 'center',
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#46bb95',
    marginLeft: 5,
    bottom: 40,
  },
  errormessage: {
    color: 'red',
    marginLeft: 10,
    top: 5,
  },
});
