import React, {useState} from 'react';
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
import {Dropdown} from 'react-native-element-dropdown';

import {MultiSelect} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Complaints = ({route}) => {
  const [dates, setDates] = React.useState('');
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

  const data1 = [
    {label: 'Victim self', value: 'Victim sel'},
    {label: 'Victims Family member ', value: 'Victims Family member '},
    {label: 'Victims relative', value: 'Victims relative'},

    {label: 'Men Care Group member', value: 'Men Care Group member'},

    {label: 'CFLRC facilitator ', value: ' CFLRC facilitator '},

    {label: 'Girl Power Group Members', value: 'Girl Power Group Members'},
    {label: 'GPG/MCG/VLCPC Volunteers', value: ' GPG/MCG/VLCPC Volunteers'},
    {label: 'WV staff', value: 'WV staff'},
    {
      label: 'Anti-Trafficking Warrior member',
      value: 'Anti-Trafficking Warrior member',
    },
    {label: 'Others', value: 'others'},
  ];
  const [value1, setValue1] = useState('');

  const data = [
    {label: 'Other    ', value: '3'},
    {label: 'District Child Protection Unit', value: '4'},
    {label: 'Child Welfare Committee', value: '5'},
    {label: 'Child Line- 1098    ', value: '6'},
    {label: ' Police Helpline 100', value: '7'},
    {label: ' Local Police station ', value: '8'},
  ];
  const [selected, setSelected] = useState('');

  const data2 = [
    {label: '161 Statement is done', value: '161 Statement is done'},
    {label: 'Medical Examination Done ', value: 'Medical Examination Done '},
    {label: '164 Statement Done', value: '164 Statement Done'},

    {
      label: 'Victim Produced Before CWC    ',
      value: 'Victim Produced Before CWC   ',
    },

    {label: 'Victim admitted in CCI    ', value: 'Victim admitted in CCI    '},

    {
      label: 'MHPSS services given to victim',
      value: 'MHPSS services given to victim',
    },
    {
      label: 'Medical Aid given to victim',
      value: ' Medical Aid given to victim',
    },
    {
      label: 'Victim Compensation application filed',
      value: 'Victim Compensation application filed',
    },
    {
      label: 'Charge sheet submitted',
      value: 'Charge sheet submitted',
    },
    {label: 'Examination Chief', value: 'Examination Chief'},
    {label: 'Cross Examination    ', value: 'Cross Examination    '},

    {label: 'Re-examination    ', value: 'Re-examination    '},

    {
      label: 'Accused convicted / acquitted?    ',
      value: 'Accused convicted / acquitted?     ',
    },
    {label: 'Appeal under process', value: 'Appeal under process    '},
  ];
  const [value2, setValue2] = useState('');

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
                value={getDate()}
                placeholder="  Enter date"
                color="gray"
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
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Name of alleged offender:</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter name of alleged offender"
                placeholderTextColor="gray"
              />
            </View>
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
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Offenders approximate age:</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                keyboardType="numeric"
                placeholder="Enter offenders approximate age"
                placeholderTextColor="gray"
              />
            </View>
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
                  setValue1(item.value);
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Complaint lodged in ps:<Text style={styles.star}>*</Text>
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
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>
              Gd entry:<Text style={styles.star}>*</Text>
            </Text>
            <View style={{marginTop: 5, marginLeft: 3}}>
              <TextInput
                style={styles.textInput}
                value={getDate()}
                placeholder="  Enter date"
                color="gray"
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
          </View>
          <View style={{marginTop: -10, marginLeft: 10}}>
            <Text style={styles.radioname}>
              FIR filled or not:<Text style={styles.star}>*</Text>
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
              <View style={{marginTop: 20}}>
                <Text style={styles.FormTitle}>Date </Text>
                <View style={{marginTop: 5}}>
                  <TextInput
                    style={styles.textInput}
                    value={getDate()}
                    placeholder="  Enter Date"
                    Color={'gray'}
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
                    Victim's number:<Text style={styles.star}>*</Text>
                  </Text>
                  <View style={styles.formtotalinput}>
                    <TextInput
                      style={styles.FormInput}
                      keyboardType="numeric"
                      placeholder="Enter victim's number"
                      placeholderTextColor="#000"
                    />
                  </View>
                </View>
              </View>
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
                  setSelected(item);
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle1}>
              What sections applied in fir?:<Text style={styles.star}>*</Text>
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
                placeholder="Select what sections applied in fir?"
                value={value2}
                onChange={item => {
                  setValue2(item.value);
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.FormTitle}>
              Incident report others:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter incident report others"
                placeholderTextColor="gray"
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.complaintbutton}>
      <TouchableOpacity
          style={styles.formbutton1}
          onPress={() => route.change(1)}>
          <Text style={styles.formbuttoninput}>BACK </Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={styles.formbutton0}
          onPress={() => route.change()}>
          <Text style={styles.formbuttoninput}>SAVE </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.formbutton}
          onPress={() => route.change()}>
          <Text style={styles.formbuttoninput}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Complaints;
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
    width: wp('30%'),
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
  complaintbutton:{
    flexDirection:'row',
    justifyContent:'center',
    top:10

  },
  formbutton0:{
    alignSelf: 'center',
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#46bb95',
    marginTop: 14,
    marginLeft: 5,
   
  },
  formbutton1:{
    alignSelf: 'center',
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#00bad7',
    marginTop: 14,
    marginLeft: 5,

  }
});