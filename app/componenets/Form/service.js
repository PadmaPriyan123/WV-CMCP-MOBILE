import React, {useCallback, useState} from 'react';
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

const Service = () => {
  const [date, setDate] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
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

  const handleSupportive = () => {
    if (supportive.length < 5) {
      let obj = {
        scheduleDate: '',
        consent: '',
        counselling: '',
        nextScheduleData: '',
      };
      setSupportive([...supportive, obj]);
    }
  };
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
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={styles.gender}>No</Text>
            </View>
          </View>
          <View style={styles.container}>
            {/*Here we will return the view when state is true 
					and will return false if state is false*/}
            {checked === 'first' && (
              <View style={{marginTop: 20, marginLeft: 5}}>
                <Text style={styles.FormTitle}>Compensation Date </Text>
                <View style={{marginTop: 5}}>
                  <TextInput
                    style={styles.textInput1}
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
                    />
                  </View>
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
                value="first"
                status={checked1 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked1('first')}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="second"
                status={checked1 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked1('second')}
              />
              <Text style={styles.gender}>No</Text>
            </View>
            <View style={styles.container}>
              {/*Here we will return the view when state is true 
					and will return false if state is false*/}
              {checked1 === 'first' && (
                <View style={{marginTop: 20}}>
                  <Text style={styles.FormTitle}>Treatment Date </Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput1}
                      value={getDate()}
                      placeholder="  Enter Treatment Date"
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
                      />
                    </View>
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
                value="first"
                status={checked2 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked2('first')}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="second"
                status={checked2 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked2('second')}
              />
              <Text style={styles.gender}>No</Text>
            </View>
            <View style={styles.container}>
              {/*Here we will return the view when state is true 
					and will return false if state is false*/}
              {checked2 === 'first' && (
                <View style={{marginTop: 20}}>
                  <Text style={styles.FormTitle}>Date</Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput1}
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
                      />
                    </View>
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
                      />
                    </View>
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
                value="first"
                status={checked3 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked3('first')}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="second"
                status={checked3 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked3('second')}
              />
              <Text style={styles.gender}>No</Text>
            </View>
          </View>
          <View style={{marginLeft: 5}}>
            {/*Here we will return the view when state is true 
					and will return false if state is false*/}
            {checked3 === 'first' && (
              <View style={{marginTop: 20}}>
                <Text style={styles.FormTitle}>Date</Text>
                <View style={{marginTop: 5}}>
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
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
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
                    />
                  </View>
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
                    />
                  </View>
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
                value="first"
                status={checked4 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked4('first')}
              />
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#ff6b00'}
                value="second"
                status={checked4 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked4('second')}
              />
              <Text style={styles.gender}>No</Text>
            </View>
            <View style={styles.container}>
              {/*Here we will return the view when state is true 
					and will return false if state is false*/}
              {checked4 === 'first' && (
                <View style={{marginTop: 20}}>
                  <Text style={styles.FormTitle}>Date</Text>
                  <View style={{marginTop: 5}}>
                    <TextInput
                      style={styles.textInput1}
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
                  <View style={{marginTop: 3}}>
                    <Text style={styles.radioname}>
                      Whether GDE done<Text style={styles.star}></Text>
                    </Text>
                    <View style={styles.SectionStyle1}>
                      <RadioButton
                        uncheckedColor={'gray'}
                        color={'#ff6b00'}
                        value="first"
                        status={checked7 === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked7('first')}
                      />

                      <Text style={styles.gender}>Yes</Text>
                      <RadioButton
                        uncheckedColor={'gray'}
                        color={'#ff6b00'}
                        value="second"
                        status={checked7 === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked7('second')}
                      />
                      <Text style={styles.gender}>No</Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                      {/*Here we will return the view when state is true 
					and will return false if state is false*/}
                      {checked7 === 'first' && (
                        <View style={{marginTop: 20}}>
                          <View style={{marginTop: 0, right: 8}}>
                            <Text style={styles.FormTitle}>
                              GDE No<Text style={styles.star}>*</Text>
                            </Text>
                            <View style={styles.tabfourfirst}>
                              <TextInput
                                style={styles.FormInput}
                                type="text"
                                placeholder="Enter class"
                                placeholderTextColor="gray"
                              />
                            </View>
                          </View>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>

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
                {/*Here we will return the view when state is true 
					and will return false if state is false*/}
                {checked5 === 'first' && (
                  <View style={{marginTop: 20,right:10}}>
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
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>

        </View>

       
        <View style={{}}>
          <TouchableOpacity
            style={styles.formbutton}
            onPress={() => route.change()}>
            <Text style={styles.formbuttoninput}>Submit </Text>
          </TouchableOpacity>
        </View>
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
});
