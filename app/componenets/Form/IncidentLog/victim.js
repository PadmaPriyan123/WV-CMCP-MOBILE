import React, {useCallback, useState} from 'react';
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
    {label: 'Others', value: '1'},
    {label: 'Online sexual harassment ', value: '2'},
    {label: 'Sexual assault ', value: '3'},
    {label: 'Sexual harassment    ', value: '4'},
    {label: 'Sexual abuse', value: '5'},
    {label: 'Rape ', value: '6'},
    {label: 'Kidnap/ abduction    ', value: '7'},
    {label: 'Child Missing    ', value: '8'},
    {label: 'Forced Marriage', value: '9'},
    {label: 'Child Trafficking   ', value: '10'},
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
              />
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
                    setValue7(item.value);
                  }}
                />
              </View>
            </View>

            <View style={{marginTop: 18}}>
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
            </View>

            <View style={{marginTop: -5}}>
              <Text style={styles.FormTitle}>
                Name of the victim:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Enter name of the victim"
                  placeholderTextColor="gray"
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Guardian's name:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Enter guardian's name"
                  placeholderTextColor="gray"
                />
              </View>
            </View>
            <View style={{marginTop: 3, marginLeft: 10}}>
              <Text style={styles.radioname}>
                Victim's dob (is available):<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.SectionStyle1}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text style={styles.gender}> Yes</Text>
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
                      <Text style={styles.Filefill}>File upload</Text>

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
                />
              </View>
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
                      item.value === '1' ? setOther(true) : setOther(false);
                    }
                  }}
                />
              </View>
            </View>
            {other === true && (
              <View style={{marginTop: 25}}>
                <Text style={styles.FormTitle}>
                  Others:<Text style={styles.star}>*</Text>
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
                    setValue1(item.value);
                  }}
                />
              </View>
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
                    setValue2(item.value);
                  }}
                />
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
                    }}
                  />
                </View>
              </View>
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
                  }}
                />
              </View>
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
                    setValue5(item.value);
                  }}
                />
              </View>
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
                  }}
                />
              </View>
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
          onPress={() => route.change()}>
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
    top: 10,
  },
  formbutton0: {
    alignSelf: 'center',
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#46bb95',
    marginTop: 14,
    marginLeft: 5,
  },
});
