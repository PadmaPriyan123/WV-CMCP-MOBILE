import React, {useCallback, useState} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DocumentPicker from 'react-native-document-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';

import {ScrollView} from 'react-native-gesture-handler';

import DateTimePicker from '@react-native-community/datetimepicker';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
const FirstRoute = ({route}) => {
  
  const [modalVisible, setModalVisible] = React.useState(false);
  const [PhotoFile, setPhotoFile] = React.useState(null);
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
  const [open2, setOpen2] = React.useState(false);
  const [value2, setValue2] = React.useState(null);
  const [items2, setItems2] = React.useState([
    {label: 'Child Trafficking', value: 'Child Trafficking'},
    {label: 'Forced Marraige', value: 'Forced Marraige'},
    {label: 'Child Missing', value: 'Child Missing'},
    {label: 'Kidnap/abduction', value: 'Kidnap/abduction'},
    {label: 'Sexual abuse', value: 'Sexual abuse'},
    {label: 'Sexual harassment', value: 'Sexual harassment'},
    {label: 'Online sexual harassment', value: 'Online sexual harassment'},
    {label: 'others', value: 'others'},
  ]);
  const [checked, setChecked] = React.useState('first');

  const [open3, setOpen3] = React.useState(false);
  const [value3, setValue3] = React.useState(null);
  const [items3, setItems3] = React.useState([
    {label: 'Assam', value: 'Assam'},
    {label: 'WestBenagl', value: 'WestBengal'},
  ]);
  const [open4, setOpen4] = React.useState(false);
  const [value4, setValue4] = React.useState(null);
  const [items4, setItems4] = React.useState([
    {label: 'Assam', value: 'Assam'},
    {label: 'WestBenagl', value: 'WestBengal'},
  ]);
  const [open5, setOpen5] = React.useState(false);
  const [value5, setValue5] = React.useState(null);
  const [items5, setItems5] = React.useState([
    {label: 'Assam', value: 'Assam'},
    {label: 'WestBenagl', value: 'WestBengal'},
  ]);
  const [open6, setOpen6] = React.useState(false);
  const [value6, setValue6] = React.useState(null);
  const [items6, setItems6] = React.useState([
    {label: 'Assam', value: 'Assam'},
    {label: 'WestBenagl', value: 'WestBengal'},
  ]);
  const [open7, setOpen7] = React.useState(false);
  const [value7, setValue7] = React.useState(null);
  const [items7, setItems7] = React.useState([
    {label: 'Assam', value: 'Assam'},
    {label: 'WestBenagl', value: 'WestBengal'},
  ]);
  const [open8, setOpen8] = React.useState(false);
  const [value8, setValue8] = React.useState(null);
  const [items8, setItems8] = React.useState([
    {label: 'Assam', value: 'Assam'},
    {label: 'WestBenagl', value: 'WestBengal'},
  ]);

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
  const [countryOpen, setCountryOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const onCountryOpen = useCallback(() => {
    setCityOpen(false);
  }, []);

  const onCityOpen = useCallback(() => {
    setCountryOpen(false);
  }, []);

  return (
    <View style={styles.Tab}>
      <View style={styles.casemanagenmentmain}>
        <Text style={styles.casemanagenmenttitle}>Case Management System</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.Form}>
          <View style={{marginTop:-10}}>
            
            <Text style={styles.FormTitle}>Reporter's Name:*</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Reporter name"
              />
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>Desigination:*</Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Desigination"
                />
              </View>
            </View>

            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>Date Of Reporting:*</Text>
              {!isPickerShow && (
                <View style={{marginLeft: 10, marginTop: 18}}>
                  <Text onPress={showPicker}>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      title="Show Picker"
                      color="#22A7F0"
                    />
                  </Text>
                  <TextInput style={styles.FormInputdate}>
                    {date.toUTCString()}/
                  </TextInput>
                </View>
              )}

              {isPickerShow && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>

            <View style={{marginTop: -25}}>
              <Text style={styles.FormTitle}>Name of the Victim:*</Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Name of the victim"
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>Guardian's Name:*</Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Guardian's name"
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>Victim's Age:*</Text>
              <View style={styles.formtotalinput}>
                <TextInput
                  style={styles.FormInput}
                  type="text"
                  placeholder="Victim's Age"
                />
              </View>
            </View>

            <View style={{marginTop: 3, marginLeft: 10}}>
              <Text style={styles.radioname}>
                Victim's Dob (if available):*
              </Text>
              <View style={styles.SectionStyle1}>
                <Text style={styles.gender}> Yes</Text>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#46bb95'}
                  value="first"
                  onPress={() => setModalVisible(true)}
                />
                <Text style={styles.gender}>No</Text>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#46bb95'}
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
              </View>
            </View>

            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>
                Types of Nature of incident:*{' '}
              </Text>

              <View style={styles.formdrop}>
                <DropDownPicker
                  open11={countryOpen}
                  onOpen={onCountryOpen}
                  listMode="SCROLLVIEW"
                  open={open2}
                  value={value2}
                  items={items2}
                  setOpen={setOpen2}
                  setValue={setValue2}
                  setItems={setItems2}
                  zIndex={19000}
                  zIndexInverse={1000}
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>Village Name:* </Text>

              <View style={styles.formdrop}>
                <DropDownPicker
                  open11={cityOpen}
                  onOpen={onCityOpen}
                  listMode="SCROLLVIEW"
                  open={open3}
                  value={value3}
                  items={items3}
                  setOpen={setOpen3}
                  setValue={setValue3}
                  setItems={setItems3}
                  zIndex={9000}
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>Gram Panchayat:*</Text>
              <View style={styles.formdrop}>
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  open={open4}
                  value={value4}
                  items={items4}
                  setOpen={setOpen4}
                  setValue={setValue4}
                  setItems={setItems4}
                  zIndex={8000}
                />
              </View>
              <View style={{marginTop: 16}}>
                <Text style={styles.FormTitle}>Block:* </Text>
                <View style={styles.formdrop}>
                  <DropDownPicker
                    listMode="SCROLLVIEW"
                    open={open5}
                    value={value5}
                    items={items5}
                    setOpen={setOpen5}
                    setValue={setValue5}
                    setItems={setItems5}
                    zIndex={7000}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}> District :*</Text>

              <View style={styles.formdrop}>
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  open={open6}
                  value={value6}
                  items={items6}
                  setOpen={setOpen6}
                  setValue={setValue6}
                  setItems={setItems6}
                  zIndex={6000}
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>State:* </Text>
              <View style={styles.formdrop}>
                <DropDownPicker
                  dropDownStyle={{backgroundColor: '#fafafa', marginTop: 2}}
                  listMode="SCROLLVIEW"
                  open={open7}
                  value={value7}
                  items={items7}
                  setOpen={setOpen7}
                  setValue={setValue7}
                  setItems={setItems7}
                  zIndex={5000}
                />
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.FormTitle}>Police Station:* </Text>
              <View style={styles.formdrop}>
                <DropDownPicker
                  dropDownStyle={{backgroundColor: '#fafafa', marginTop: 2}}
                  listMode="SCROLLVIEW"
                  open={open8}
                  value={value8}
                  items={items8}
                  setOpen={setOpen8}
                  setValue={setValue8}
                  setItems={setItems8}
                  zIndex={4000}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{marginTop: 16}}>
                <Text style={styles.FormTitle}>Date Of Reporting</Text>
                {!isPickerShow && (
                  <View style={{marginLeft: 35, marginTop: 15}}>
                    <Text onPress={showPicker}>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        title="Show Picker"
                        color="#22A7F0"
                      />
                    </Text>
                    <TextInput style={styles.FormInputdate1}>
                      {date.toUTCString()}/
                    </TextInput>
                  </View>
                )}

                {isPickerShow && (
                  <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
              </View>

              <View style={{}}>
                <View style={styles.SectionStyle}>
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
                      color="#22A7F0"
                      style={styles.fileUpload}
                    />
                  </Text>
                </View>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      </ScrollView>
    
      <TouchableOpacity
      
        style={styles.formbutton}
        onPress={() => route.change()}>
        <Text style={styles.formbuttoninput}>NEXT </Text>
      </TouchableOpacity>
   
    </View>
  );
};

const SecondRoute = ({route}) => {
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
      <View
        style={styles.casemanagenmentmain}>
        <Text
          style={styles.casemanagenmenttitle}>
          Case Management System
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.Form}>
          <View style={{marginTop: -10}}>
            <Text style={styles.FormTitle}>Date Of Incident:*</Text>
            {!isPickerShow && (
              <View style={{marginLeft: 10, marginTop: 18}}>
                <Text onPress={showPicker}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    title="Show Picker"
                    color="#22A7F0"
                  />
                </Text>
                <TextInput style={styles.FormInputdate}>
                  {date.toUTCString()}/
                </TextInput>
              </View>
            )}

            {isPickerShow && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>

          <View style={{marginTop: -25}}>
            <Text style={styles.FormTitle}>Description of the Incident:*</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Description of the incident"
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Name of Alleged Offender:*</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Name of Alleged Offender"
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>
              Offenders relationship to victim
            </Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Offender relationship to victim"
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle}>Offenders approximate Age:*</Text>
            <View style={styles.formtotalinput}>
              <TextInput
                style={styles.FormInput}
                type="text"
                placeholder="Offenders approximate Age
          "
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={{backgroundColor:''}}>
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
  const [modalVisible, setModalVisible] = React.useState(false);

  const [isPickerShow, setIsPickerShow] = React.useState(false);
  const [date, setDate] = React.useState(new Date(Date.now()));
  const [PhotoFile, setPhotoFile] = React.useState(null);

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Victim selF', value: 'Victim sel'},
    {label: 'Victims Family member ', value: 'Victims Family member '},
    {label: 'Victims relative', value: 'Victims relative'},

    {label: 'Men Care Group member', value: 'Men Care Group member'},

    {label: ' CFLRC facilitator ', value: ' CFLRC facilitator '},

    {label: 'Girl Power Group Members', value: 'Girl Power Group Members'},
    {label: ' GPG/MCG/VLCPC Volunteers', value: ' GPG/MCG/VLCPC Volunteers'},
    {label: 'WV staff', value: 'WV staff'},
    {
      label: 'Anti-Trafficking Warrior member',
      value: 'Anti-Trafficking Warrior member',
    },
    {label: 'Others', value: 'others'},
  ]);
  const [open1, setOpen1] = React.useState(false);
  const [value1, setValue1] = React.useState(null);
  const [items1, setItems1] = React.useState([
    {label: 'Local Police station', value: 'Local Police station'},
    {label: 'Police Helpline 100 ', value: 'Police Helpline 100 '},
    {label: ' Child Line- 1098', value: ' Child Line- 1098'},

    {label: 'Child Welfare Committee', value: 'Child Welfare Committee'},

    {
      label: ' District Child Protection Unit    ',
      value: ' District Child Protection Unit    ',
    },

    {label: 'Other', value: 'Other'},
  ]);

  const [checked, setChecked] = React.useState('first');
  const [checked1, setChecked1] = React.useState('first1');
  const [checked2, setChecked2] = React.useState('first2');
  const [checked3, setChecked3] = React.useState('first2');
  const [checked4, setChecked4] = React.useState('first2');
  const [checked5, setChecked5] = React.useState('first2');

  return (
    <View style={styles.Tab}>
      <View
       style={styles.casemanagenmentmain}>
        <Text
          style={styles.casemanagenmenttitle}>
          Case Management System
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.Form}>
          <View style={{marginTop: -10}}>
            <Text style={styles.FormTitle1}>
              Who informed about the Incident:*
            </Text>
            <View style={styles.formdrop}>
              <DropDownPicker
                listMode="SCROLLVIEW"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                zIndex={9000}
              />
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.FormTitle1}>
              Whether the incident reported to (tick all that apply){' '}
            </Text>

            <View style={styles.formdrop}>
              <DropDownPicker
                listMode="SCROLLVIEW"
                open={open1}
                value={value1}
                items={items1}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setItems1}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>
              Whether the complaint was lodged in PS
            </Text>
            <View style={styles.SectionStyle1}>
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.gender}>No</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>FIR is filed or not?</Text>
            <View style={styles.SectionStyle1}>
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="first"
                status={checked1 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked1('first')}
              />
              <Text style={styles.gender}>No</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="second"
                status={checked1 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked1('second')}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>If yes</Text>
            <View style={styles.SectionStyle1}>
              <Text style={styles.gender}>FIR No</Text>
              <RadioButton
                color={'#46bc96'}
                value="first"
                status={checked2 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked2('first')}
              />
              <Text style={styles.gender}>Date</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="second"
                status={checked2 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setModalVisible(true)}
                style={styles.hhh}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>Victim recovered or not?</Text>
            <View style={styles.SectionStyle1}>
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="first"
                status={checked3 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked3('first')}
              />
              <Text style={styles.gender}>No</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="second"
                status={checked3 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked3('second')}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>Has the accused arrested?</Text>
            <View style={styles.SectionStyle1}>
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="first"
                status={checked4 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked4('first')}
              />
              <Text style={styles.gender}>No</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="second"
                status={checked4 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked4('second')}
              />
            </View>
          </View>
          <View style={{marginTop: 3, marginLeft: 10}}>
            <Text style={styles.radioname}>Number of accused arrested?</Text>
            <View style={styles.SectionStyle1}>
              <Text style={styles.gender}>Yes</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="first"
                status={checked5 === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked5('first')}
              />
              <Text style={styles.gender}>No</Text>
              <RadioButton
                uncheckedColor={'gray'}
                color={'#46bc96'}
                value="second"
                status={checked5 === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked5('second')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{marginTop: 16}}>
              <Text style={styles.FormTitle}>Date Of Reporting</Text>
              {!isPickerShow && (
                <View style={{marginLeft: 35, marginTop: 15}}>
                  <Text onPress={showPicker}>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      title="Show Picker"
                      color="#22A7F0"
                    />
                  </Text>
                  <TextInput style={styles.FormInputdate1}>
                    {date.toUTCString()}/
                  </TextInput>
                </View>
              )}

              {isPickerShow && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.formeditbutton}>
        <TouchableOpacity
          style={styles.formbuttonedit}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.formbuttoninput}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.formbuttonsubmit}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.formbuttoninput}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.formbuttoncancel}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.formbuttoninput}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'VICTIM', change: () => setIndex(1)},
    {key: 'second', title: ' COMPLAIN', change: () => setIndex(2)},
    {key: 'third', title: 'ACTIONS', change: () => setIndex(Login)},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#ff6b00'}
      inactiveColor={'gray'}
      indicatorStyle={{
        labelPosition: 'below-icon',
        backgroundColor: '#ff6b00',
        height: 3,
       
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: -10,
        backgroundColor: '#f2f7fa',

        margin: 'auto',

        borderWidth: 0.5,
        borderColor: '#f2f7fa',
        top: 10,
      }}
      labelStyle={{fontWeight: 'bold'}}
    />
  );
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: '#fff',}}></TabView>
  );
}
const styles = StyleSheet.create({
  Tab: {
    backgroundColor: '#fff',

    height: hp('91%'),
    width: wp('99%'),
  },
  FormTitle: {
    color: '#000',
    fontFamily: "Lora",
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 13,
  },
  FormTitle1: {
    color: '#000',
    fontFamily: 'Lora',
    fontSize: 13.5,
    alignSelf: 'flex-start',
    marginLeft: 12,
    
  },
  FormInput: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 201,
    borderRadius: 10,
    color: '#212121',
    marginVertical: 6,
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#ffff',
    
  },
  Form: {
    padding:15,
  
  },
  radioname: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 10,
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
    fontFamily: 'Montserrat-SemiBold',
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
    width: 300,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ff6b00',
    marginTop: 30,
    
  },
  formbuttonedit: {
    alignSelf: 'center',
    width: 89,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#19B5FE',
    marginTop: 30,
    marginRight: 10,
  },
  formbuttoncancel: {
    alignSelf: 'center',
    width: 89,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
    marginTop: 30,
    marginRight: 10,
  },
  formbuttoninput: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    
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
    fontFamily: 'Poppins-Bold',
  },
  scrollView: {
    paddingVertical: 8,
    marginTop: 12,
    topBounceColor: 'white',
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
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    width: 320,
    borderRadius: 10,
    height: 47,
    marginTop: 10,
    marginLeft: 6,
  },
  formdrop: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
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
    backgroundColor: '#2196F3',
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
    borderRadius: 11,
    backgroundColor: '#ffff',
    marginVertical: 6,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginRight: 20,
    bottom: 40,
    padding: 10,
    borderWidth: 1,
    width: wp('79%'),
    marginTop: 12,
    marginLeft: 32,
  },
  FormInputdate1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 11,
    color: '#212121',
    marginVertical: 6,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginRight: 20,
    bottom: 40,
    marginLeft: 30,
  },
  formeditbutton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 33,
  },
  formbuttonsubmit:{
    alignSelf: 'center',
    width: 89,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#F37021',
    marginTop: 30,
    marginRight: 10,
  },
  casemanagenmentmain: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#00bad7',
    height: 40,
    right: 10,
    width: 380,
  },
  casemanagenmenttitle: {
    fontSize: 18,
    color: '#fff',
    
    fontFamily: 'Lora',
    marginTop: 5,
  },
});
