import React, {useCallback, useState} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
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

import DateTimePicker from '@react-native-community/datetimepicker';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {MultiSelect} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const FirstRoute = ({route}) => {
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

  return (
    <View style={styles.Tab}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.Form}>
          <View style={{marginTop: -5}}>
            <Text style={styles.FormTitle}>
              Reporter's Name:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter Reporter's name"
                placeholderTextColor="gray"
              />
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Designation:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Enter Designation"
                  placeholderTextColor="gray"
                />
              </View>
            </View>

            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Date Of Reporting:<Text style={styles.star}>*</Text>
              </Text>
              <View style={{marginTop: 5}}>
                <TextInput
                  style={styles.textInput}
                  value={getDate()}
                  placeholder="  Enter Date"
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
                Name of the Victim:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Enter Name of the victim"
                  placeholderTextColor="gray"
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Guardian's Name:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Enter Guardian's name"
                  placeholderTextColor="gray"
                />
              </View>
            </View>
            <View style={{marginTop: 3, marginLeft: 10}}>
              <Text style={styles.radioname}>
                Victim's Dob (is available):<Text style={styles.star}>*</Text>
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
                      <Text style={styles.Filefill}>File Upload</Text>

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
                Victim's Age:<Text style={styles.star}>*</Text>
              </Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  keyboardType="numeric"
                  placeholder="Enter Victims age"
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
                  containerStyle={{backgroundColor: '#fff'}}
                  style={styles.dropping}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data}
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Nature of incident"
                  value={value}
                  onChange={item => {
                    setValue(item.value);
                  }}
                />
              </View>
            </View>
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
                  placeholder="Select State"
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
                  placeholder="Select District"
                  value={value2}
                  onChange={item => {
                    setValue2(item.value);
                  }}
                />
              </View>
              <View style={{marginTop: 25}}>
                <Text style={styles.FormTitle}>Block </Text>
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
                    placeholder="Select Block"
                    value={value3}
                    onChange={item => {
                      setValue3(item.value);
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 25}}>
              <Text style={styles.FormTitle}>Gram Panchayat</Text>

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
                  placeholder="Select Gram Panchayat"
                  value={value4}
                  onChange={item => {
                    setValue4(item.value);
                  }}
                />
              </View>
            </View>
            <View style={{marginTop: 25}}>
              <Text style={styles.FormTitle}>
                Village Name:<Text style={styles.star}>*</Text>{' '}
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
                  placeholder="Select Village"
                  value={value5}
                  onChange={item => {
                    setValue5(item.value);
                  }}
                />
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.FormTitle}>Police Station </Text>
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
                  placeholder="Select Police Station"
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
      <View>
        <TouchableOpacity
          style={styles.formbutton}
          onPress={() => route.change()}>
          <Text style={styles.formbuttoninput}>NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SecondRoute = ({route}) => {
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
              Date Of Incident:<Text style={styles.star}>*</Text>
            </Text>
            <View style={{marginTop: 5}}>
              <TextInput
                style={styles.textInput}
                value={getDate()}
                placeholder="  Enter Date"
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
              Description of the Incident:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter Description of the incident"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Name of alleged Offender</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter Name of alleged offender"
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
                placeholder="Enter Offender relationship to victim"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Offenders approximate Age:</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                keyboardType="numeric"
                placeholder="Enter Offenders approximate Age"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle1}>
              Who informed about the Incident:<Text style={styles.star}>*</Text>
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
                placeholder="Select Who Informed about the incident"
                value={value1}
                onChange={item => {
                  setValue1(item.value);
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Complaint Lodged In PS:<Text style={styles.star}>*</Text>
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
              GD Entry:<Text style={styles.star}>*</Text>
            </Text>
            <View style={{marginTop: 5, marginLeft: 3}}>
              <TextInput
                style={styles.textInput}
                value={getDate()}
                placeholder="  Enter Date"
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
              FIR Filled Or Not:<Text style={styles.star}>*</Text>
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
                    Victim's Number:<Text style={styles.star}>*</Text>
                  </Text>
                  <View style={styles.formtotalinput}>
                    <TextInput
                      style={styles.FormInput}
                      keyboardType="numeric"
                      placeholder="Enter Victim's Number"
                      placeholderTextColor="#000"
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>
              Whether The Incident Report:<Text style={styles.star}>*</Text>
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
              What sections applied in FIR?:<Text style={styles.star}>*</Text>
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
                placeholder="Select What sections applied in FIR?"
                value={value2}
                onChange={item => {
                  setValue2(item.value);
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.FormTitle}>
              Incident Report Others:<Text style={styles.star}>*</Text>
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Enter Incident Report Others"
                placeholderTextColor="gray"
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={{backgroundColor: ''}}>
        <TouchableOpacity
          style={styles.formbutton}
          onPress={() => route.change()}>
          <Text style={styles.formbuttoninput}>NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ThirdRoute = ({route}) => {
  const [checked3, setChecked3] = React.useState('first2');
  const [checked4, setChecked4] = React.useState('first2');

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
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Has the accused arrested?:<Text style={styles.star}>*</Text>
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
          </View>
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
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      <View>
        <TouchableOpacity
          style={styles.formbutton}
          onPress={() => route.change()}>
          <Text style={styles.formbuttoninput}>Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const FourthRoute = () => {
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
              <View style={{right:122,top:30}}>
            {/*Here we will return the view when state is true 
        and will return false if state is false*/}
            {checked5 === 'first' && (
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
              
            
              </View>
            )}
          </View>
            </View>
          </View>

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

          {supportive.map((data, i) => {
            return (
              <>
                <View style={{marginTop: 10}}>
                  <Text style={styles.FormTitle}>
                    Supprotive Call -{i + 1}:
                  </Text>
                  <View style={{marginTop: 20, marginLeft: 5}}>
                    <Text style={styles.FormTitle}>Date & Time</Text>
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
                      status={checked6 === 'first' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked6('first')}
                    />
                    <Text style={styles.gender}>Yes</Text>
                    <RadioButton
                      uncheckedColor={'gray'}
                      color={'#ff6b00'}
                      value="second"
                      status={checked6 === 'second' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked6('second')}
                    />
                    <Text style={styles.gender}>No</Text>
                  </View>
                  <View style={styles.container}>
                    {checked6 === 'first' && (
                      <View style={{marginTop: 15}}>
                        <View style={{bottom: 5}}>
                          <Text style={styles.FormTitle}>
                            Counselling:<Text style={styles.star}>*</Text>
                          </Text>
                          <View style={styles.tabfourfirst1}>
                            <TextInput
                              style={styles.counsInput}
                              type="text"
                              placeholder="Enter Counselling "
                              placeholderTextColor="gray"
                            />
                          </View>
                        </View>
                        <Text style={styles.FormTitle}>
                          Scheduling for next session date & Time{' '}
                        </Text>
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
        <View style={{bottom: 15}}>
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
export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'VICTIMS', change: () => setIndex(1)},
    {key: 'second', title: 'COMPLAINTS', change: () => setIndex(2)},
    {key: 'third', title: 'LEGAL', change: () => setIndex(3)},
    {key: 'fourth', title: 'SERVICES', change: () => setIndex(Login)},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#f37e20'}
      inactiveColor={'gray'}
      indicatorStyle={{
        backgroundColor: '#f37e20',

        borderColor: '#ccc',
        fontSize: 16,
        marginLeft: 5,
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: -10,
        backgroundColor: '#fff',
        margin: 'auto',

        borderWidth: 0.5,
        borderColor: '#f2f7fa',
        top: 10,
      }}
      labelStyle={{fontSize: 9, fontFamily: 'Lato-Bold'}}
    />
  );
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: '#fff'}}></TabView>
  );
}
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
    bottom:10
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
  tabfourfirst1:{
    height: hp('15%'),
    borderRadius: 5,
    width: wp('90%'),

    borderWidth: 2,
    marginTop: 10,
    marginLeft: 8,
    borderColor: '#ccc',
  }
  
});
