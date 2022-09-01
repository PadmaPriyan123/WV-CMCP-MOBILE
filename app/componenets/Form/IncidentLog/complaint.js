import React, {useState, useCallback, useEffect} from 'react';
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
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';

import {ScrollView} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';

import {MultiSelect} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  sendComplaintsData,
  sendComplaintsDataResponse,
} from '../../../Redux/IncidentLog/IncidentCreation/Action';
const Complaints = ({navigation}) => {
  const [dates, setDates] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [dateKey, setDateKey] = useState('');
  const showDatePicker = key => {
    setDatePickerVisibility(true);
    setDateKey(key);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('date', date);

    let d = new Date(date);
    let dat = String(d.getDate()).padStart(2, '0');
    let month = String(d.getMonth() + 1).padStart(2, '0');
    let year = d.getFullYear();
    setValidation1({
      ...validation1,
      [dateKey]: `${year}-${month}-${dat}`,
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

  const data1 = [
    {label: 'Victim self', value: 1},
    {label: 'Victims Family member ', value: 2},
    {label: 'Victims relative', value: 3},

    {label: 'Men Care Group member', value: 4},

    {label: 'CFLRC facilitator ', value: 5},

    {label: 'Girl Power Group Members', value: 6},
    {label: 'GPG/MCG/VLCPC Volunteers', value: 7},
    {label: 'WV staff', value: 8},
    {
      label: 'Anti-Trafficking Warrior member',
      value: 9,
    },
    {label: 'Others', value: 10},
  ];
  const [value1, setValue1] = useState(null);

  const data = [
    {
      label: 'District Child Protection Unit',
      value: 'District Child Protection Unit',
    },
    {label: 'Child Welfare Committee', value: 'Child Welfare Committee'},
    {label: 'Child Line- 1098    ', value: 'Child Line- 1098    '},
    {label: ' Police Helpline 100', value: ' Police Helpline 100'},
    {label: ' Local Police station ', value: ' Local Police station '},
  ];
  const [selected, setSelected] = useState('');

  const data2 = [
    {label: '161 Statement is done', value: [1]},
    {label: 'Medical Examination Done ', value: [2]},
    {label: '164 Statement Done', value: [3]},

    {
      label: 'Victim Produced Before CWC    ',
      value: [4],
    },

    {label: 'Victim admitted in CCI    ', value: [5]},

    {
      label: 'MHPSS services given to victim',
      value: [6],
    },
    {
      label: 'Medical Aid given to victim',
      value: [7],
    },
    {
      label: 'Victim Compensation application filed',
      value: [8],
    },
    {
      label: 'Charge sheet submitted',
      value: [9],
    },
    {label: 'Examination Chief', value: [10]},
    {label: 'Cross Examination    ', value: [11]},

    {label: 'Re-examination    ', value: [12]},

    {
      label: 'Accused convicted / acquitted?    ',
      value: [13],
    },
    {label: 'Appeal under process', value: [14]},
  ];

  const [value2, setValue2] = useState('');
  const [checked0, setChecked0] = React.useState('');

  const [checked, setChecked] = React.useState('');
  const [checked1, setChecked1] = React.useState('');

  const [isPickerShow, setIsPickerShow] = React.useState(false);
  const [date, setDate] = React.useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  const [others, setOthers] = useState(false);
  const [others1, setOthers1] = useState(false);
  const [lodged, setLodged] = useState(false);
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
  let dispatch = useDispatch();
  let complaintresponse = useSelector(
    state => state.Incidentlog.sendComplaintsDataResponse,
  );
  useEffect(() => {
    if (complaintresponse?.StatusCode === 201) {
      alert('complaint was successfully created');
      // dispatch(sendVictimData(''));
    }
    // dispatch(sendVictimData(''));
  }, [complaintresponse]);

  let d = new Date();
  let dat = String(d.getDate()).padStart(2, '0');
  let month = String(d.getMonth() + 1).padStart(2, '0');
  let year = d.getFullYear();
  const [validation1, setValidation1] = useState({
    CaseID: 1,
    UserID: 1,
    Date_of_incident: `${year}-${month}-${dat}`,
    Description_of_the_incident: '',
    Name_of_Alleged_Offender: '',
    Offenders_relationship_to_victim: '',
    Offenders_approximate_Age: 0,
    Who_informed_about_the_incident: '',
    Whether_Incident_Reported_Others: '',
    complaint_lodged_PS: '',
    gdNumber: '',
    GD_EntryDate: '',
    FIR_filed_or_not: '',
    FIR_Num: '',
    FIR_date: '',
    Action_Taken: 'hello',
    Sections_AppliedIn_FIR: [],
  });
  console.log('hdhjf', validation1);

  const initialErrorMessage = {
    CaseID: '',
    UserID: '',
    Date_of_incident: ``,
    Description_of_the_incident: '',
    Name_of_Alleged_Offender: '',
    Offenders_relationship_to_victim: '',
    Offenders_approximate_Age: '',
    Who_informed_about_the_incident: '',
    Whether_Incident_Reported_Others: '',
    complaint_lodged_PS: '',
    gdNumber: '',
    GD_EntryDate: '',
    FIR_filed_or_not: '',
    FIR_Num: '',
    FIR_date: '',
    Action_Taken: '',
    Sections_AppliedIn_FIR: '',
  };

  const [error, setError] = useState(initialErrorMessage);

  function myFunction() {
    let a = {
      CaseID: 1,
      UserID: 1,
      Date_of_incident: '',
      Description_of_the_incident: '',
      Name_of_Alleged_Offender: '',
      Offenders_relationship_to_victim: '',
      Offenders_approximate_Age: '',
      Who_informed_about_the_incident: '',
      Whether_Incident_Reported_Others: '',
      complaint_lodged_PS: '',
      gdNumber: '',
      GD_EntryDate: '',
      FIR_filed_or_not: '',
      FIR_Num: '',
      FIR_date: '',
      Action_Taken: '',
      Sections_AppliedIn_FIR: '',
    };

    var letters = /[A-Za-z]{3,15}/;
    var empty = /^$/;
    var Age = /^[0-9]{1,2}$/;
    dispatch(sendComplaintsData(validation1));

    if (!validation1.Date_of_incident) {
      a.Date_of_incident = '*Please Select the Date Of Incident';
    }
    if (!validation1.Description_of_the_incident) {
      a.Description_of_the_incident =
        '*Please enter the description Of the incident';
    }
    if (!validation1.Name_of_Alleged_Offender) {
      a.Name_of_Alleged_Offender = '*Please enter the name of offender';
    }
    if (!validation1.Offenders_relationship_to_victim) {
      a.Offenders_relationship_to_victim =
        '*Please select the offender relation to the victim';
    }
    if (!validation1.Who_informed_about_the_incident) {
      a.Who_informed_about_the_incident =
        '*Please Enter the Who Informed About Incident';
    }
    if (!validation1.Offenders_approximate_Age) {
      a.Offenders_approximate_Age =
        '*Please enter the offender approximate age';
    }
    if (!validation1.complaint_lodged_PS) {
      a.complaint_lodged_PS = '*Please Select the Complaint lodged in PS';
    }
    if (!validation1.gdNumber) {
      a.gdNumber = '*Please Enter the GD-Entry';
    }
    if (!validation1.FIR_filed_or_not) {
      a.FIR_filed_or_not = '*Please Enter  FIR is Filed or Not';
    }
    if (!validation1.FIR_Num) {
      a.FIR_Num = '*Please Enter  FIR is number';
    }
    if (!validation1.Action_Taken) {
      a.Action_Taken = '*Please Enter the FIR/GD Action Taken';
    }
    if (incidentValue.length <= 0) {
      console.log(incidentValue);
      a.Whether_Incident_Reported_Others = '*Please select Incident report';
    }
    if (!validation1.Sections_AppliedIn_FIR) {
      a.Sections_AppliedIn_FIR = '*Please Enter the Section applied fir';
    }
    console.log(a);
    if (Object.values(a).every(el => el === '')) {
      console.log(Object.values(a).every(el => el === ''));
      setError(a);
      let reqData = validation1;
      reqData.Sections_AppliedIn_FIR = JSON.stringify(
        validation1.Sections_AppliedIn_FIR,
      );
      console.log('bhhf', reqData);

      dispatch(sendComplaintsData(reqData));
      console.log('vjv', validation1);
    } else {
      setError(a);
    }
  }

  return (
    <View style={styles.Tab}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.Form}>
          <View style={{marginTop: -10}}>
            <Text style={styles.FormTitle}>
              Date of incident:<Text style={styles.star}>*</Text>
            </Text>
            <View style={{marginTop: 5}}>
              <TextInput
                style={styles.textInput}
                value={validation1.Date_of_incident}
                placeholder="  Enter date"
                color="#000"
              />

              <Text
                style={{left: 300, bottom: 39}}
                onPress={() => showDatePicker('Date_of_incident')}>
                <FontAwesomeIcon
                  size={20}
                  icon={faCalendarDays}
                  title="Show Picker"
                  color="#00bad7"
                />
              </Text>
            </View>
          </View>

          <View style={{marginTop: -5}}>
            <Text style={styles.FormTitle}>
              Description of the incident:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter description of the incident"
                placeholderTextColor="gray"
                onChangeText={text => {
                  setValidation1({
                    ...validation1,
                    Description_of_the_incident: text,
                  });
                }}
              />
            </View>
          </View>
          <View>
            {error?.Description_of_the_incident && (
              <Text style={styles.errormessage}>
                {error?.Description_of_the_incident}
              </Text>
            )}
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Name of alleged offender:</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter name of alleged offender"
                placeholderTextColor="gray"
                onChangeText={text => {
                  setValidation1({
                    ...validation1,
                    Name_of_Alleged_Offender: text,
                  });
                }}
              />
            </View>
          </View>
          <View>
            {error?.Name_of_Alleged_Offender && (
              <Text style={styles.errormessage}>
                {error?.Name_of_Alleged_Offender}
              </Text>
            )}
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>
              Offenders relationship to victim:
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter offender relationship to victim"
                placeholderTextColor="gray"
                onChangeText={text => {
                  setValidation1({
                    ...validation1,
                    Offenders_relationship_to_victim: text,
                  });
                }}
              />
            </View>
          </View>
          <View>
            {error?.Offenders_relationship_to_victim && (
              <Text style={styles.errormessage}>
                {error?.Offenders_relationship_to_victim}
              </Text>
            )}
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Offenders approximate age:</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                keyboardType="numeric"
                placeholder="Enter offenders approximate age"
                placeholderTextColor="gray"
                onChangeText={text => {
                  setValidation1({
                    ...validation1,
                    Offenders_approximate_Age: parseInt(text),
                  });
                }}
              />
            </View>
          </View>
          <View>
            {error?.Offenders_approximate_Age && (
              <Text style={styles.errormessage}>
                {error?.Offenders_approximate_Age}
              </Text>
            )}
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle1}>
              Who informed about the incident:<Text style={styles.star}>*</Text>
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
                placeholder="Select who informed about the incident"
                value={value1}
                onChange={item => {
                  {
                    setValue1(item.value);
                    item.value === '10' ? setOthers(true) : setOthers(false);
                    setValidation1({
                      ...validation1,
                      Who_informed_about_the_incident: item.label,
                    });
                  }
                }}
              />
            </View>
          </View>

          <View>
            {error?.Who_informed_about_the_incident && (
              <Text style={styles.errormessage}>
                {error?.Who_informed_about_the_incident}
              </Text>
            )}
          </View>
          {others == true && (
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Others ( Who informed about the incident):
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
          <View>
            {error?.district && (
              <Text style={styles.errormessage}>{error?.district}</Text>
            )}
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>
              Whether the incident report:<Text style={styles.star}>*</Text>
            </Text>
            <View style={{marginTop: 5}}>
              <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select whether the incident"
                value={selected}
                onChange={item => {
                  {
                    setSelected(item);
                    console.log('ggf', item);
                    item.selected === '3'
                      ? setOthers1(true)
                      : setOthers1(false);
                    setValidation1({
                      ...validation1,
                      Whether_Incident_Reported_Others: item,
                    });
                  }
                }}
              />
            </View>
          </View>

          <View>
            {error?.Whether_Incident_Reported_Others && (
              <Text style={styles.errormessage}>
                {error?.Whether_Incident_Reported_Others}
              </Text>
            )}
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Complaint lodged in ps:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="yes"
                status={
                  validation1.complaint_lodged_PS === 'yes'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation1({
                    ...validation1,
                    complaint_lodged_PS: 'yes',
                  });
                  setLodged(true);
                }}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="no"
                status={
                  validation1.complaint_lodged_PS === 'no'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation1({
                    ...validation1,
                    complaint_lodged_PS: 'no',
                  });
                  setLodged(false);
                }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
          </View>

          {lodged === true ? (
            <View>
              <View style={{marginTop: 3, marginLeft: 10}}>
                <Text style={styles.radioname}>
                  GDE entry:<Text style={styles.star}>*</Text>
                </Text>
                <View style={styles.SectionStyle1}>
                  <RadioButton
                    uncheckedColor={'gray'}
                    color={'#ff6b00'}
                    value="yes"
                    status={checked0 === 'yes' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked0('yes')}
                  />
                  <Text style={styles.gender}>Yes</Text>
                  <RadioButton
                    uncheckedColor={'gray'}
                    color={'#ff6b00'}
                    value="no"
                    status={checked0 === 'no' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked0('no')}
                  />
                  <Text style={styles.gender}>No</Text>
                </View>
              </View>
              {checked0 === 'yes' && (
                <View style={{marginTop: 20}}>
                  <Text style={styles.FormTitle}>GDE Date: </Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput}
                      value={validation1.GD_EntryDate}
                      placeholder="  Enter Date"
                      Color={'gray'}
                    />

                    <Text
                      style={{left: 300, bottom: 39}}
                      onPress={() => showDatePicker('GD_EntryDate')}>
                      <FontAwesomeIcon
                        size={20}
                        icon={faCalendarDays}
                        title="Show Picker"
                        color="#00bad7"
                      />
                    </Text>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="Date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                  </View>
                  <View style={{marginTop: 0}}>
                    <Text style={styles.FormTitle}>
                      GDE Number:<Text style={styles.star}>*</Text>
                    </Text>
                    <View style={styles.formtotalinput}>
                      <TextInput
                        style={styles.FormInput}
                        keyboardType="numeric"
                        placeholder="Enter GDE number"
                        placeholderTextColor="#000"
                        onChangeText={text => {
                          setValidation1({
                            ...validation1,
                            gdNumber: text,
                          });
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    {error?.gdNumber && (
                      <Text style={styles.errormessage}>{error?.gdNumber}</Text>
                    )}
                  </View>
                  <View>
                    <View style={{marginTop: 30}}>
                      <Text style={styles.Filefill}>GDE Document:</Text>

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
              <View style={{marginLeft: 10}}>
                <Text style={styles.radioname}>
                  FIR filled or not:<Text style={styles.star}>*</Text>
                </Text>
                <View style={styles.SectionStyle1}>
                  <RadioButton
                    uncheckedColor={'gray'}
                    color={'#ff6b00'}
                    value="yes"
                    status={
                      validation1.FIR_filed_or_not === 'yes'
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => {
                      setValidation1({
                        ...validation1,
                        FIR_filed_or_not: 'yes',
                      });
                      setChecked('yes');
                    }}
                  />
                  <Text style={styles.gender}>Yes</Text>
                  <RadioButton
                    uncheckedColor={'gray'}
                    color={'#ff6b00'}
                    value="no"
                    status={
                      validation1.FIR_filed_or_not === 'no'
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => {
                      setValidation1({
                        ...validation1,
                        FIR_filed_or_not: 'no',
                      });
                      setChecked('no');
                    }}
                  />
                  <Text style={styles.gender}>No</Text>
                </View>
              </View>

              <View style={styles.container}>
                {/*Here we will return the view when state is true 
          and will return false if state is false*/}
                {checked === 'yes' && (
                  <View style={{marginTop: 20}}>
                    <Text style={styles.FormTitle}>FIR Date: </Text>
                    <View style={{marginTop: 5}}>
                      <TextInput
                        style={styles.textInput}
                        value={validation1.FIR_date}
                        placeholder="  Enter Date"
                        Color={'gray'}
                      />

                      <Text
                        style={{left: 300, bottom: 39}}
                        onPress={() => showDatePicker('FIR_date')}>
                        <FontAwesomeIcon
                          size={20}
                          icon={faCalendarDays}
                          title="Show Picker"
                          color="#00bad7"
                        />
                      </Text>
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="Date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />
                    </View>
                    <View style={{marginTop: 0}}>
                      <Text style={styles.FormTitle}>
                        FIR Number:<Text style={styles.star}>*</Text>
                      </Text>
                      <View style={styles.formtotalinput}>
                        <TextInput
                          style={styles.FormInput}
                          keyboardType="numeric"
                          placeholder="Enter FIR Number"
                          placeholderTextColor="#000"
                          onChangeText={text => {
                            setValidation1({
                              ...validation1,
                              FIR_Num: text,
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View>
                      {error?.FIR_Num && (
                        <Text style={styles.errormessage}>
                          {error?.FIR_Num}
                        </Text>
                      )}
                    </View>
                    <View>
                      <View style={{marginTop: 30}}>
                        <Text style={styles.Filefill}>FIR Document</Text>

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
                      <View style={{marginTop: 16}}>
                        <Text style={styles.FormTitle1}>
                          What sections applied in FIR?:
                          <Text style={styles.star}>*</Text>
                        </Text>
                        <View style={styles.droppingn}>
                          <Dropdown
                            style={styles.dropping}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={data2}
                            maxHeight={250}
                            labelField="label"
                            valueField="value"
                            placeholder="Select what sections applied in FIR?"
                            value={value2}
                            onChange={item => {
                              setValue2(item.value);
                              setValidation1({
                                ...validation1,
                                Sections_AppliedIn_FIR: [item.label],
                              });
                            }}
                          />
                        </View>
                      </View>
                      <View>
                        {error?.Sections_AppliedIn_FIR && (
                          <Text style={styles.errormessage}>
                            {error?.Sections_AppliedIn_FIR}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                )}
              </View>
              {checked0 == 'second' && checked == 'second' && (
                <View style={{marginTop: 16}}>
                  <Text style={styles.FormTitle}>What action taken:</Text>
                  <View style={styles.formtotalinput}>
                    <TextInput
                      style={styles.FormInput}
                      type="text"
                      placeholder="Others"
                      placeholderTextColor="gray"
                      onChangeText={text => {
                        setValidation1({...validation1, Action_Taken: text});
                      }}
                    />
                  </View>
                  <View>
                    {error?.Action_Taken && (
                      <Text style={styles.errormessage}>
                        {error?.Action_Taken}
                      </Text>
                    )}
                  </View>
                </View>
              )}

              {others1 === true && (
                <View style={{marginTop: 16}}>
                  <Text style={styles.FormTitle}>Others:</Text>
                  <View style={styles.formtotalinput}>
                    <TextInput
                      style={styles.FormInput}
                      keyboardType="numeric"
                      placeholder="Others"
                      placeholderTextColor="gray"
                    />
                  </View>
                </View>
              )}
            </View>
          ) : (
            ''
          )}
        </SafeAreaView>
      </ScrollView>
      <View style={styles.complaintbutton}>
        <TouchableOpacity
          style={styles.formbutton1}
          onPress={() => navigation.navigate('victim')}>
          <Text style={styles.formbuttoninput}>BACK </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.formbutton}
          onPress={() => myFunction()}>
          <Text style={styles.formbuttoninput}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="Date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
export default Complaints;
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
  complaintbutton: {
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
  formbutton1: {
    alignSelf: 'center',
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#00bad7',
    bottom: 40,
    marginLeft: 5,
  },
  errormessage: {
    color: 'red',
    marginLeft: 10,
    top: 5,
  },
});
