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
  sendReintegrationData,
  sendReintegrationDataResponse,
} from '../../Redux/IncidentLog/IncidentList/Action';

const Service = () => {
  const [date, setDate] = React.useState('');
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
    let d = new Date(date);
    let dat = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    if (month.toString.length === 1) month = `0${d.getMonth() + 1}`;
    if (dat.toString.length === 1) dat = `${d.getDate()}`;
    // setDate(date);
    setValidation3({...validation3, [dateKey]: `${year}-${month}-${dat}`});
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  const [checked, setChecked] = React.useState('');
  const [checked1, setChecked1] = React.useState('');
  const [checked2, setChecked2] = React.useState('');
  const [checked3, setChecked3] = React.useState('');
  const [checked4, setChecked4] = React.useState('');
  const [checked5, setChecked5] = React.useState('');
  const [checked6, setChecked6] = React.useState('');
  const [checked7, setChecked7] = React.useState('');
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [open, setOpen] = React.useState(false);
  const [supportive, setSupportive] = React.useState([]);
  let dispatch = useDispatch();
  let reintegrationresponse = useSelector(
    state => state.Incidentlist.sendReintegrationResponse,
  );
  useEffect(() => {
    if (reintegrationresponse?.StatusCode == 201) {
      alert(reintegrationresponse.StatusMessage);
      dispatch(sendReintegrationData(''));
    }
  }, [reintegrationresponse]);

  let d = new Date();
  let dat = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  if (month.toString.length === 1) month = `0${d.getMonth() + 1}`;
  if (dat.toString.length === 1) dat = `0${d.getDate()}`;

  const [validation3, setValidation3] = useState({
    CaseID: 2,
    UserID: 1,
    IsFacilitatedToCompensation: '',
    CompensatedDate: '',
    CompensationAmount: '',
    CompensationRemarks: '',
    AnyMedicalAssistance: '',
    MedicalTreatmentDate: '',
    NatureOfIllness: '',
    MedicalAssistanceRemarks: '',
    IsEnrolledInSchool: '',
    EnrollmentDate: '',
    ClassName: '',
    NameOfTheSchool: '',
    EnrollmentRemarks: '',
    IsEnrolledInVocationalTraining: '',
    institutionEnrollmentDate: '',
    NameOfTheCourse: '',
    NameOfTheInstitue: '',
    VocationalTrainingRemark: '',
    IsAnyProtectiveActionTaken: '',
    DateOfActionTaken: '',
    isGDEDone: '',
    GDENumber: '',
    ActionTakenRemarks: '',
  });

  console.log('gfhgf', validation3);

  const initialErrorMessage = {
    CaseID: '',
    UserID: '',
    IsFacilitatedToCompensation: '',
    CompensatedDate: '',
    CompensationAmount: '',
    CompensationRemarks: '',
    AnyMedicalAssistance: '',
    MedicalTreatmentDate: '',
    NatureOfIllness: '',
    MedicalAssistanceRemarks: '',
    IsEnrolledInSchool: '',
    EnrollmentDate: '',
    ClassName: '',
    NameOfTheSchool: '',
    EnrollmentRemarks: '',
    IsEnrolledInVocationalTraining: '',
    institutionEnrollmentDate: '',
    NameOfTheCourse: '',
    NameOfTheInstitue: '',
    VocationalTrainingRemark: '',
    IsAnyProtectiveActionTaken: '',
    DateOfActionTaken: '',
    isGDEDone: '',
    GDENumber: '',
    ActionTakenRemarks: '',
  };

  const [error, setError] = useState(initialErrorMessage);

  function myFunction() {
    let a = {
      CaseID: '',
      UserID: '',
      IsFacilitatedToCompensation: '',
      CompensatedDate: '',
      CompensationAmount: '',
      CompensationRemarks: '',
      AnyMedicalAssistance: '',
      MedicalTreatmentDate: '',
      NatureOfIllness: '',
      MedicalAssistanceRemarks: '',
      IsEnrolledInSchool: '',
      EnrollmentDate: '',
      ClassName: '',
      NameOfTheSchool: '',
      EnrollmentRemarks: '',
      IsEnrolledInVocationalTraining: '',
      institutionEnrollmentDate: '',
      NameOfTheCourse: '',
      NameOfTheInstitue: '',
      VocationalTrainingRemark: '',
      IsAnyProtectiveActionTaken: '',
      DateOfActionTaken: '',
      isGDEDone: '',
      GDENumber: '',
      ActionTakenRemarks: '',
    };

    var letters = /[A-Za-z]{3,15}/;
    var empty = /^$/;
    var Age = /^[0-9]{1,2}$/;
    dispatch(sendReintegrationData(validation3));
    if (!validation3.IsFacilitatedToCompensation) {
      a.IsFacilitatedToCompensation =
        '*Please select is facilated to compensation';
    }
    if (!validation3.CompensationAmount) {
      a.CompensationAmount = '*Please enter the compensation amount';
    }
    if (!validation3.CompensationRemarks) {
      a.CompensationRemarks = '*Please enter the compensation remarks';
    }
    if (!validation3.AnyMedicalAssistance) {
      a.AnyMedicalAssistance = '*Please select the any medical assitence ';
    }
    if (!validation3.MedicalTreatmentDate) {
      a.MedicalTreatmentDate = '*Please select the medical treatmentdate ';
    }
    if (!validation3.AnyMedicalAssistance) {
      a.AnyMedicalAssistance = '*Please select the any medical assitence ';
    }
    if (!validation3.NatureOfIllness) {
      a.NatureOfIllness = '*Please enter the nature of iliness ';
    }
    if (!validation3.MedicalAssistanceRemarks) {
      a.MedicalAssistanceRemarks =
        '*Please select the medical assistance remark ';
    }
    if (!validation3.IsEnrolledInSchool) {
      a.IsEnrolledInSchool = '*Please select the is enrolled in school ';
    }

    if (!validation3.ClassName) {
      a.ClassName = '*Please enter the class name ';
    }
    if (!validation3.NameOfTheSchool) {
      a.NameOfTheSchool = '*Please enter the name of the school ';
    }
    if (!validation3.EnrollmentRemarks) {
      a.EnrollmentRemarks = '*Please enter the enrolled remarks';
    }
    if (!validation3.IsEnrolledInVocationalTraining) {
      a.IsEnrolledInVocationalTraining =
        '*Please enter the enrolled vacation training';
    }
    if (!validation3.institutionEnrollmentDate) {
      a.institutionEnrollmentDate = '*Please enter the instition enrolled date';
    }
    if (!validation3.NameOfTheCourse) {
      a.NameOfTheCourse = '*Please enter the name of te course';
    }
    if (!validation3.NameOfTheInstitue) {
      a.NameOfTheInstitue = '*Please enter the name of the institute';
    }
    if (!validation3.VocationalTrainingRemark) {
      a.VocationalTrainingRemark = '*Please enter the remark';
    }
    if (!validation3.IsAnyProtectiveActionTaken) {
      a.IsAnyProtectiveActionTaken =
        '*Please select the protective Action Taken';
    }
    if (!validation3.isGDEDone) {
      a.isGDEDone = '*Please select the GDE ';
    }
    if (!validation3.GDENumber) {
      a.GDENumber = '*Please enter the GDE number ';
    }
    if (!validation3.GDENumber) {
      a.GDENumber = '*Please enter the GDE number ';
    }
    if (!validation3.ActionTakenRemarks) {
      a.ActionTakenRemarks = '*Please enter the action taken remarks ';
    }
    if (Object.values(a).every(el => el === '')) {
      setError(a);
    } else {
      setError(a);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.reintegration}>
          <Text style={styles.reintegrationTitle}>REINTEGRATION DOMAINS</Text>
        </View>
        <View style={styles.lasttab}>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Is the victim facilitated to submit application for Victim
              Compensation?:<Text style={styles.star}></Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={1}
                status={
                  validation3.IsFacilitatedToCompensation === 1
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsFacilitatedToCompensation: parseInt(1),
                  });
                  setChecked('yes');
                }}
              />

              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={0}
                status={
                  validation3.IsFacilitatedToCompensation === 0
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsFacilitatedToCompensation: parseInt(0),
                  });
                  setChecked('no');
                }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
          </View>
          <View>
                  {error?.IsFacilitatedToCompensation && (
                    <Text style={styles.errormessage}>
                      {error?.IsFacilitatedToCompensation}
                    </Text>
                  )}
                </View>
          <View style={styles.container}>
            {checked === 'yes' && (
              <View style={{marginTop: 20, marginLeft: 5}}>
                <Text style={styles.FormTitle}>Compensation Date </Text>
                <View style={{marginTop: 5}}>
                  <TextInput
                    style={styles.textInput1}
                    value={validation3.CompensatedDate}
                    placeholder="  Enter Date"
                    placeholderTextColor={'gray'}
                  />

                  <Text
                    style={{left: 300, bottom: 39}}
                    onPress={() => showDatePicker('CompensatedDate')}>
                    <FontAwesomeIcon
                      size={20}
                      icon={faCalendarDays}
                      title="Show Picker"
                      color="#00bad7"
                    />
                  </Text>
                </View>
                <View style={{marginTop: 0}}>
                  <Text style={styles.FormTitle}>
                    Compensation Amount:<Text style={styles.star}>*</Text>
                  </Text>
                  <View style={styles.tabfourfirst}>
                    <TextInput
                      style={styles.FormInput}
                      keyboardType="numeric"
                      placeholder="Enter Compensation Amount"
                      placeholderTextColor="gray"
                      onChangeText={text => {
                        setValidation3({
                          ...validation3,
                          CompensationAmount: parseInt(text),
                        });
                      }}
                    />
                  </View>
                </View>
                <View>
                  {error?.CompensationAmount && (
                    <Text style={styles.errormessage}>
                      {error?.CompensationAmount}
                    </Text>
                  )}
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.FormTitle}>
                    Remarks:<Text style={styles.star}>*</Text>
                  </Text>
                  <View style={styles.tabfourfirst}>
                    <TextInput
                      style={styles.FormInput}
                      placeholder="Enter compensation remarks"
                      placeholderTextColor="gray"
                      onChangeText={text => {
                        setValidation3({
                          ...validation3,
                          CompensationRemarks: text,
                        });
                      }}
                    />
                  </View>
                </View>
                <View>
                  {error?.CompensationRemarks && (
                    <Text style={styles.errormessage}>
                      {error?.CompensationRemarks}
                    </Text>
                  )}
                </View>
              </View>
            )}
          </View>

          <View style={{marginTop: 3, marginLeft: 12}}>
            <Text style={styles.radioname}>
              Is the victim given any medical assistance/ treatment? :
              <Text style={styles.star}></Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={1}
                status={
                  validation3.AnyMedicalAssistance === 1
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    AnyMedicalAssistance: parseInt(1),
                  });
                  setChecked1('yes');
                }}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={0}
                status={
                  validation3.AnyMedicalAssistance === 0
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    AnyMedicalAssistance: parseInt(0),
                  });
                  setChecked1('no');
                }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
            <View>
                    {error?.AnyMedicalAssistance && (
                      <Text style={styles.errormessage}>
                        {error?.AnyMedicalAssistance}
                      </Text>
                    )}
                  </View>
            <View style={styles.container}>
              {checked1 === 'yes' && (
                <View style={{marginTop: 20, right: 5}}>
                  <Text style={styles.FormTitle}>Treatment Date </Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput1}
                      value={validation3.MedicalTreatmentDate}
                      placeholder="  Enter Treatment Date"
                      placeholderTextColor={'gray'}
                    />

                    <Text
                      style={{left: 300, bottom: 39}}
                      onPress={() => showDatePicker('MedicalTreatmentDate')}>
                      <FontAwesomeIcon
                        size={20}
                        icon={faCalendarDays}
                        title="Show Picker"
                        color="#00bad7"
                      />
                    </Text>
                  </View>
                  <View style={{marginTop: 0}}>
                    <Text style={styles.FormTitle}>
                      Nature Of illness :<Text style={styles.star}>*</Text>
                    </Text>
                    <View style={styles.tabfourfirst}>
                      <TextInput
                        style={styles.FormInput}
                        type="text"
                        placeholder="Enter Nature Of illness"
                        placeholderTextColor="gray"
                        onChangeText={text => {
                          setValidation3({
                            ...validation3,
                            NatureOfIllness: text,
                          });
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    {error?.NatureOfIllness && (
                      <Text style={styles.errormessage}>
                        {error?.NatureOfIllness}
                      </Text>
                    )}
                  </View>
                  <View style={{marginTop: 0}}>
                    <Text style={styles.FormTitle}>
                      Remarks:<Text style={styles.star}>*</Text>
                    </Text>
                    <View style={styles.tabfourfirst}>
                      <TextInput
                        style={styles.FormInput}
                        type="text"
                        placeholder="Enter Nature Of illness"
                        placeholderTextColor="gray"
                        onChangeText={text => {
                          setValidation3({
                            ...validation3,
                            MedicalAssistanceRemarks: text,
                          });
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    {error?.MedicalAssistanceRemarks && (
                      <Text style={styles.errormessage}>
                        {error?.MedicalAssistanceRemarks}
                      </Text>
                    )}
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 13}}>
            <Text style={styles.radioname}>
              Has the survivor been re-enrolled in school?
              <Text style={styles.star}></Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={1}
                status={
                  validation3.IsEnrolledInSchool === 1 ? 'checked' : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsEnrolledInSchool: parseInt(1),
                  });
                  setChecked2('first');
                }}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={0}
                status={
                  validation3.IsEnrolledInSchool === 0 ? 'checked' : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsEnrolledInSchool: parseInt(0),
                  });
                  setChecked2('second');
                }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
            <View>
                    {error?.IsEnrolledInSchool && (
                      <Text style={styles.errormessage}>
                        {error?.IsEnrolledInSchool}
                      </Text>
                    )}
                  </View>
            <View style={styles.container}>
              {checked2 === 'first' && (
                <View style={{marginTop: 20, right: 5}}>
                  <Text style={styles.FormTitle}>Date</Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput1}
                      value={validation3.EnrollmentDate}
                      placeholder="  Enter Date"
                      placeholderTextColor={'gray'}
                    />

                    <Text
                      style={{left: 300, bottom: 39}}
                      onPress={() => showDatePicker('EnrollmentDate')}>
                      <FontAwesomeIcon
                        size={20}
                        icon={faCalendarDays}
                        title="Show Picker"
                        color="#00bad7"
                      />
                    </Text>
                  </View>
                  <View style={{marginTop: 0}}>
                    <Text style={styles.FormTitle}>
                      Class:<Text style={styles.star}>*</Text>
                    </Text>
                    <View style={styles.tabfourfirst}>
                      <TextInput
                        style={styles.FormInput}
                        type="text"
                        placeholder="Enter class"
                        placeholderTextColor="gray"
                        onChangeText={text => {
                          setValidation3({
                            ...validation3,
                            ClassName: text,
                          });
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    {error?.ClassName && (
                      <Text style={styles.errormessage}>
                        {error?.ClassName}
                      </Text>
                    )}
                  </View>
                  <View style={{marginTop: 15}}>
                    <Text style={styles.FormTitle}>
                      Name Of the School:<Text style={styles.star}>*</Text>
                    </Text>
                    <View style={styles.tabfourfirst}>
                      <TextInput
                        style={styles.FormInput}
                        type="text"
                        placeholder="Enter name of the school"
                        placeholderTextColor="gray"
                        onChangeText={text => {
                          setValidation3({
                            ...validation3,
                            NameOfTheSchool: text,
                          });
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    {error?.NameOfTheSchool && (
                      <Text style={styles.errormessage}>
                        {error?.NameOfTheSchool}
                      </Text>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text style={styles.FormTitle}>
                      Remarks:<Text style={styles.star}>*</Text>
                    </Text>
                    <View style={styles.tabfourfirst}>
                      <TextInput
                        style={styles.FormInput}
                        type="text"
                        placeholder="Enter class"
                        placeholderTextColor="gray"
                        onChangeText={text => {
                          setValidation3({
                            ...validation3,
                            EnrollmentRemarks: text,
                          });
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    {error?.EnrollmentRemarks && (
                      <Text style={styles.errormessage}>
                        {error?.EnrollmentRemarks}
                      </Text>
                    )}
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 14}}>
            <Text style={styles.radioname}>
              Is the survivor enrolled in any Vocational Training?
              <Text style={styles.star}></Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={1}
                status={
                  validation3.IsEnrolledInVocationalTraining === 1
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsEnrolledInVocationalTraining: parseInt(1),
                  });
                  setChecked3('yes');
                }}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={0}
                status={
                  validation3.IsEnrolledInVocationalTraining === 0
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsEnrolledInVocationalTraining: parseInt(0),
                  });
                  setChecked3('no');
                }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
            <View>
                    {error?.IsEnrolledInVocationalTraining && (
                      <Text style={styles.errormessage}>
                        {error?.IsEnrolledInVocationalTraining}
                      </Text>
                    )}
                  </View>
          </View>
          <View style={{marginLeft: 5}}>
            {checked3 === 'yes' && (
              <View style={{marginTop: 20}}>
                <Text style={styles.FormTitle}>Date</Text>
                <View style={{marginTop: 5}}>
                  <TextInput
                    style={styles.textInput1}
                    value={validation3.institutionEnrollmentDate}
                    placeholder="  Enter Date"
                    placeholderTextColor={'gray'}
                  />

                  <Text
                    style={{marginLeft: 300, bottom: 35}}
                    onPress={() => showDatePicker('institutionEnrollmentDate')}>
                    <FontAwesomeIcon
                      size={20}
                      icon={faCalendarDays}
                      title="Show Picker"
                      color="#00bad7"
                    />
                  </Text>
                </View>
                <View style={{marginTop: 0}}>
                  <Text style={styles.FormTitle}>
                    Class:<Text style={styles.star}>*</Text>
                  </Text>
                  <View style={styles.tabfourfirst}>
                    <TextInput
                      style={styles.FormInput}
                      type="text"
                      placeholder="Enter class"
                      placeholderTextColor="gray"
                      onChangeText={text => {
                        setValidation3({
                          ...validation3,
                          NameOfTheCourse: text,
                        });
                      }}
                    />
                  </View>
                </View>
                <View>
                  {error?.NameOfTheCourse && (
                    <Text style={styles.errormessage}>
                      {error?.NameOfTheCourse}
                    </Text>
                  )}
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={styles.FormTitle}>
                    Name Of the Institution:<Text style={styles.star}>*</Text>
                  </Text>
                  <View style={styles.tabfourfirst}>
                    <TextInput
                      style={styles.FormInput}
                      type="text"
                      placeholder="Enter name of the Institution"
                      placeholderTextColor="gray"
                      onChangeText={text => {
                        setValidation3({
                          ...validation3,
                          NameOfTheInstitue: text,
                        });
                      }}
                    />
                  </View>
                </View>
                <View>
                  {error?.NameOfTheInstitue && (
                    <Text style={styles.errormessage}>
                      {error?.NameOfTheInstitue}
                    </Text>
                  )}
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.FormTitle}>
                    Remarks:<Text style={styles.star}>*</Text>
                  </Text>
                  <View style={styles.tabfourfirst}>
                    <TextInput
                      style={styles.FormInput}
                      type="text"
                      placeholder="Enter the remark"
                      placeholderTextColor="gray"
                      onChangeText={text => {
                        setValidation3({
                          ...validation3,
                          VocationalTrainingRemark: text,
                        });
                      }}
                    />
                  </View>
                </View>
                <View>
                  {error?.VocationalTrainingRemark && (
                    <Text style={styles.errormessage}>
                      {error?.VocationalTrainingRemark}
                    </Text>
                  )}
                </View>
              </View>
            )}
          </View>
          <View style={{marginTop: 3, marginLeft: 15}}>
            <Text style={styles.radioname}>
              Any protective action taken? :<Text style={styles.star}></Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={1}
                status={
                  validation3.IsAnyProtectiveActionTaken === 1
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsAnyProtectiveActionTaken: parseInt(1),
                  });
                  setChecked4('yes');
                }}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value={0}
                status={
                  validation3.IsAnyProtectiveActionTaken === 0
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setValidation3({
                    ...validation3,
                    IsAnyProtectiveActionTaken: parseInt(0),
                  });
                  setChecked4('no');
                }}
              />
              <Text style={styles.gender}>No</Text>
            </View>
            <View>
                    {error?.IsAnyProtectiveActionTaken && (
                      <Text style={styles.errormessage}>
                        {error?.IsAnyProtectiveActionTaken}
                      </Text>
                    )}
                  </View>
            <View style={styles.container}>
              {checked4 === 'yes' && (
                <View style={{marginTop: 20, right: 5}}>
                  <Text style={styles.FormTitle}>Date</Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput1}
                      value={validation3.DateOfActionTaken}
                      placeholder="  Enter Date"
                      placeholderTextColor={'gray'}
                    />

                    <Text
                      style={{left: 300, bottom: 39}}
                      onPress={() => showDatePicker('DateOfActionTaken')}>
                      <FontAwesomeIcon
                        size={20}
                        icon={faCalendarDays}
                        title="Show Picker"
                        color="#00bad7"
                      />
                    </Text>
                  </View>
                  <View style={{marginTop: 3, marginLeft: 5}}>
                    <Text style={styles.radioname}>
                      Whether GDE done<Text style={styles.star}></Text>
                    </Text>
                    <View style={styles.SectionStyle1}>
                      <RadioButton
                        uncheckedColor={'gray'}
                        color={'#ff6b00'}
                        value={1}
                        status={
                          validation3.isGDEDone === 1 ? 'checked' : 'unchecked'
                        }
                        onPress={() => {
                          setValidation3({
                            ...validation3,
                            isGDEDone: parseInt(1),
                          });
                          setChecked7('yes');
                        }}
                      />

                      <Text style={styles.gender}>Yes</Text>
                      <RadioButton
                        uncheckedColor={'gray'}
                        color={'#ff6b00'}
                        value={0}
                        status={
                          validation3.isGDEDone === 0 ? 'checked' : 'unchecked'
                        }
                        onPress={() => {
                          setValidation3({
                            ...validation3,
                            isGDEDone: parseInt(0),
                          });
                          setChecked7('no');
                        }}
                      />
                      <Text style={styles.gender}>No</Text>
                    </View>
                    <View>
                    {error?.isGDEDone && (
                      <Text style={styles.errormessage}>
                        {error?.isGDEDone}
                      </Text>
                    )}
                  </View>
                    <View style={{marginLeft: 5}}>
                      {checked7 === 'yes' && (
                        <View style={{marginTop: 20}}>
                          <View style={{marginTop: 0, right: 8}}>
                            <Text style={styles.FormTitle}>
                              GDE number<Text style={styles.star}>*</Text>
                            </Text>
                            <View style={styles.tabfourfirst}>
                              <TextInput
                                style={styles.FormInput}
                                type="text"
                                keyboardType="numeric"
                                placeholder="Enter GDE number"
                                placeholderTextColor="gray"
                                onChangeText={text => {
                                  setValidation3({
                                    ...validation3,
                                    GDENumber: text,
                                  });
                                }}
                              />
                            </View>
                          </View>
                          <View>
                            {error?.GDENumber && (
                              <Text style={styles.errormessage}>
                                {error?.GDENumber}
                              </Text>
                            )}
                          </View>
                        </View>
                      )}
                    </View>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text style={styles.FormTitle}>
                      Remarks:<Text style={styles.star}>*</Text>
                    </Text>
                    <View style={styles.tabfourfirst}>
                      <TextInput
                        style={styles.FormInput}
                        type="text"
                        placeholder="Enter the remark"
                        placeholderTextColor="gray"
                        onChangeText={text => {
                          setValidation3({
                            ...validation3,
                            ActionTakenRemarks: text,
                          });
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    {error?.ActionTakenRemarks && (
                      <Text style={styles.errormessage}>
                        {error?.ActionTakenRemarks}
                      </Text>
                    )}
                  </View>
                </View>
              )}
            </View>
          </View>

{ 
          <View style={{marginTop: 3, marginLeft: 16}}>
            <Text style={styles.radioname}>
              Is the survivor enrolled in survivor support program?
              <Text style={styles.star}></Text>
            </Text>
            <View style={styles.SectionStyle1}>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="first"
                status={checked5 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked5('first')}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="second"
                status={checked5 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked5('second')}
              />
              <Text style={styles.gender}>No</Text>
              
              <View style={{right: 122, top: 30}}>
                {checked5 === 'first' && (
                  <View style={{marginTop: 20, right: 10}}>
                    <Text style={styles.FormTitle}>Date</Text>
                    <View style={{}}>
                      <TextInput
                        style={styles.textInput1}
                        value={getDate()}
                        placeholder="  Enter Date"
                        placeholderTextColor={'gray'}
                      />

                      <Text
                        style={{marginLeft: 300, bottom: 35}}
                        onPress={showDatePicker}>
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
          </View> }
        </View>

        <View style={{bottom:10}}>
          <TouchableOpacity
            style={styles.formbutton}
            onPress={() => myFunction()}>
            <Text style={styles.formbuttoninput}>Submit </Text>
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Service;
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
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 5,
    lineHeight: 20,
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
    height: 50,
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
  errormessage: {
    color: 'red',
    marginLeft: 10,
  },
});
