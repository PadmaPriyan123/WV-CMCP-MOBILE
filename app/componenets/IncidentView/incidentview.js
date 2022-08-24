import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';

import {MultiSelect} from 'react-native-element-dropdown';

import {Card, TextInput} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faPen} from '@fortawesome/free-solid-svg-icons/faPen';
import {faStamp} from '@fortawesome/free-solid-svg-icons/faStamp';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {Dropdown} from 'react-native-element-dropdown';

const Incident = ({navigation}) => {
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);

  useEffect(() => {
    var incidenterr = {
      legalerr: '',
      mphss: '',
    };
    setIncidentError(incidenterr);
    setAssignValue1('');
    setAssignValue2('');
  }, [modalVisible2]);
  const PopIncidentMenu = () => {
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    const [visible, setVisible] = React.useState(false);
    return (
      <Menu
        visible={visible}
        anchor={
          <Text onPress={showMenu}>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              size={20}
              color={'gray'}
            />
          </Text>
        }
        onRequestClose={hideMenu}>
        <MenuItem onPress={() => navigation.navigate('Form')}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon icon={faEye} size={20} color={'gray'} />
            <Text style={{marginLeft: 10, color: '#000'}}>View</Text>
          </View>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('Form')}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon icon={faPen} size={20} color={'gray'} />
            <Text style={{marginLeft: 10, color: '#000'}}>Edit</Text>
          </View>
        </MenuItem>
        <MenuItem onPress={() => setModalVisible2(!modalVisible2)}>
          {' '}
          <View style={{flexDirection: 'row'}}>
            <Text>
              <FontAwesomeIcon icon={faStamp} size={20} color={'gray'} />
            </Text>
            <Text style={{marginLeft: 8, color: '#000'}}>Case Assign</Text>
          </View>
        </MenuItem>
      </Menu>
    );
  };

  const [assignValue1, setAssignValue1] = React.useState('');
  const assignLegal = [
    {label: 'Biju', value: '1'},
    {label: 'Murali ', value: '2'},
    {label: 'Bharath ', value: '3'},
    {label: 'Arun', value: '4'},
    {label: 'Bala', value: '5'},
  ];

  const [incidentError, setIncidentError] = React.useState({
    legalerr: '',
    mphsserr: '',
  });

  const [assignValue2, setAssignValue2] = React.useState('');
  const assignLegal2 = [
    {label: 'Mano', id: '1'},
    {label: 'Vino ', id: '2'},
    {label: 'Ajay ', id: '3'},
    {label: 'Varun', id: '4'},
    {label: 'Gopal', id: '5'},
  ];

  const status = [
    {label: 'Initiated', value: '1'},
    {label: 'Inprogress ', value: '2'},
    {label: 'Completed ', value: '3'},
    {label: 'Closed', value: '4'},
  ];
  const [value1, setValue1] = React.useState('');

  useEffect(() => {
    caseAssignValidation();
  }, [assignValue1, assignValue2]);

  function incidentmodal() {
    let err = 0;
    console.log(assignValue1);
    var incidenterr = {
      legalerr: '',
    };
    if (!assignValue1.length) {
      incidenterr.legalerr = '*Please select atleast one person';
      ++err;
    } else {
      incidenterr.legalerr = '';
    }
    if (!assignValue2.length) {
      incidenterr.mphsserr = '*Please select atleast one person from MHPSS';
      ++err;
    } else {
      incidenterr.mphsserr = '';
    }
    setIncidentError(incidenterr);
    if (err == 0) {
      alert('Case successfully assigned!!!');
    }
  }

  function caseAssignValidation() {
    let cnt = 0;
    var incidenterr = {
      legalerr: '',
      mphss: '',
    };
    if (incidentError.legalerr != '') {
      ++cnt;
      if (!assignValue1.length) {
        incidenterr.legalerr = '*Please select atleast one person';
      } else {
        incidenterr.legalerr = '';
      }
    }
    if (incidentError.mphsserr != '') {
      ++cnt;
      if (!assignValue2.length) {
        incidenterr.mphsserr = '*Please select atleast one person from MHPSS';
      } else {
        incidenterr.mphsserr = '';
      }
    }
    console.log();
    if (cnt > 0) {
      setIncidentError(incidenterr);
    }
  }

  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <View style={styles.cardfirstline}>
              <Text style={styles.cardcontentheading}>
                Case No:{' '}
                <Text style={{fontFamily: 'Lato-Bold', color: '#000'}}>
                  125647
                </Text>
              </Text>
              <View style={{marginTop: 17, marginRight: 10}}>
                <PopIncidentMenu />
              </View>
            </View>
            <View style={styles.cardcontentpara}>
              <Text style={styles.carddetail}>17-05-2021</Text>
            </View>
            <View
              style={{
                marginLeft: 200,
                backgroundColor: '#00bad7',
                top: 1,
                borderRadius: 40,
                borderWidth: 1,
                height: 30,
                width: 100,
                borderColor: '#fff',
              }}>
              <Text style={styles.initiate}>Initiated</Text>
            </View>
          </Card>
          <View style={{marginTop: 8}}>
            <Card style={styles.card}>
              <View style={styles.cardfirstline}>
                <Text style={styles.cardcontentheading}>
                  Case No:{' '}
                  <Text style={{fontFamily: 'Lato-Bold', color: '#000'}}>
                    226746
                  </Text>
                </Text>
                <View style={{marginTop: 17, marginRight: 10}}>
                  <PopIncidentMenu />
                </View>
              </View>
              <View style={styles.cardcontentpara}>
                <Text style={styles.carddetail}>09-03-2016</Text>
              </View>
              <View
                style={{
                  marginLeft: 200,
                  backgroundColor: '#46bb95',
                  borderRadius: 40,
                  borderWidth: 1,
                  height: 30,
                  width: 100,
                  borderColor: '#fff',
                }}>
                <Text style={styles.Completed}>Completed</Text>
              </View>
            </Card>
          </View>
          <View style={{marginTop: 10}}>
            <Card style={styles.card}>
              <View style={styles.cardfirstline}>
                <Text style={styles.cardcontentheading}>
                  Case No:{' '}
                  <Text style={{fontFamily: 'Lato-Bold', color: '#000'}}>
                    778965
                  </Text>
                </Text>
                <View style={{marginTop: 17, marginRight: 10}}>
                  <PopIncidentMenu />
                </View>
              </View>
              <View style={styles.cardcontentpara}>
                <Text style={styles.carddetail}>05-02-2021</Text>
              </View>
              <View
                style={{
                  marginLeft: 200,
                  backgroundColor: '#e26a00',
                  borderRadius: 40,
                  borderWidth: 1,
                  height: 30,
                  width: 100,
                  borderColor: '#fff',
                }}>
                <Text style={styles.Assigned}>Assigned</Text>
              </View>
            </Card>
          </View>
          <View style={{marginTop: 10}}>
            <Card style={styles.card}>
              <View style={styles.cardfirstline}>
                <Text style={styles.cardcontentheading}>
                  Case No:{' '}
                  <Text style={{fontFamily: 'Lato-Bold', color: '#000'}}>
                    112657
                  </Text>
                </Text>
                <View style={{marginTop: 17, marginRight: 10}}>
                  <PopIncidentMenu />
                </View>
              </View>
              <View style={styles.cardcontentpara}>
                <Text style={styles.carddetail}>01-09-2020</Text>
              </View>
              <View
                style={{
                  marginLeft: 200,
                  backgroundColor: '#46bb95',
                  borderRadius: 40,
                  borderWidth: 1,
                  height: 30,
                  width: 100,
                  borderColor: '#fff',
                }}>
                <Text style={styles.Completed}>Completed</Text>
              </View>
            </Card>
          </View>

          <View style={{marginTop: 10}}>
            <Card style={styles.card}>
              <View style={styles.cardfirstline}>
                <Text style={styles.cardcontentheading}>
                  Case No:{' '}
                  <Text style={{fontFamily: 'Lato-Bold', color: '#000'}}>
                    111895
                  </Text>
                </Text>
                <View style={{marginTop: 17, marginRight: 10}}>
                  <PopIncidentMenu />
                </View>
              </View>
              <View style={styles.cardcontentpara}>
                <Text style={styles.carddetail}>13-02-2015</Text>
              </View>
              <View
                style={{
                  marginLeft: 200,
                  backgroundColor: '#00bad7',
                  top: 1,
                  borderRadius: 40,
                  borderWidth: 1,
                  height: 30,
                  width: 100,
                  borderColor: '#fff',
                }}>
                <Text style={styles.initiate}>Initiated</Text>
              </View>
            </Card>
          </View>
        </View>
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
              <View>
                <Text
                  style={styles.close}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <FontAwesomeIcon icon={faXmark} size={20} color={'gray'} />
                </Text>
              </View>
              <View>
                <Text style={styles.Formpopup}>Case Id:</Text>
                <TextInput
                  style={styles.textpopup}
                  placeholder="Search by Case id"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 16}}>
                <Text style={styles.Formpopup}>Incident Date:</Text>
                <View style={{marginTop: 5}}>
                  <TextInput
                    style={styles.textpopup}
                    value={getDate()}
                    placeholder="  Enter Date"
                    placeholderTextColor="gray"
                  />

                  <Text
                    style={{marginLeft: 230, bottom: 40}}
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
              <View>
                <Text style={styles.Formpopup}>Cast status:</Text>
                <View>
                  <Dropdown
                    containerStyle={{backgroundColor: '#fff'}}
                    style={styles.dropping}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={status}
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
              <Pressable style={[styles.button, styles.buttonClose]}>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
      </ScrollView>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View
          style={{
            marginTop: 10,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: '#e26a00',
            marginLeft: 270,
          }}>
          <Text style={styles.initiate}>
            <View>
              <FontAwesomeIcon
                style={{bottom: 5}}
                icon={faPlus}
                size={30}
                color={'#fff'}
              />
            </View>
          </Text>
        </View>
      </TouchableOpacity>

      {/* Case Assignment Modal */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible2(!modalVisible2);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text
                  style={styles.close}
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <FontAwesomeIcon icon={faXmark} size={20} color={'gray'} />
                </Text>
              </View>
              <View>
                <Text style={styles.caseAssignment}>Case Assigned</Text>
              </View>
              <View styles={styles.assigncontent}>
                <Text style={styles.AssignPopup}>Legal Persons</Text>
                <View style={styles.assingnmentdrop}>
                  <MultiSelect
                    containerStyle={{backgroundColor: '#ddd'}}
                    style={styles.dropping}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={assignLegal}
                    maxHeight={250}
                    maxSelect={3}
                    labelField="label"
                    valueField="value"
                    placeholder="Assign the Person"
                    submitButtonText="Submit"
                    value={assignValue1}
                    onChange={item => {
                      console.log(item);
                      setAssignValue1(item);
                      // caseAssignValidation();
                    }}
                  />
                  <View>
                    {incidentError.legalerr && (
                      <Text style={styles.incidenterrmessage}>
                        {incidentError.legalerr}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <View styles={styles.assigncontent}>
                <Text style={styles.AssignPopup}>MHPSS</Text>
                <View style={styles.assingnmentdrop}>
                  <MultiSelect
                    containerStyle={{backgroundColor: '#ddd'}}
                    style={styles.dropping}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={assignLegal2}
                    maxSelect={3}
                    maxHeight={250}
                    labelField="label"
                    valueField="id"
                    placeholder="Assign the Person"
                    value={assignValue2}
                    submitButtonText="Submit"
                    onChange={item => {
                      setAssignValue2(item);
                      // caseAssignValidation();
                    }}
                  />
                  <View>
                    {incidentError.mphsserr && (
                      <Text style={styles.incidenterrmessage}>
                        {incidentError.mphsserr}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.modalbuttons}>
                <Pressable
                  style={styles.button1}
                  onPress={() => incidentmodal()}>
                  <Text style={styles.textStyle}>Case Assigned</Text>
                </Pressable>
                <Pressable style={styles.button2}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Incident;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ecf0f1',
  },
  cardcontentheading: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 20,
    color: 'gray',
    fontFamily: 'Lato-Lightitalic',
  },
  cardcontentpara: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    top: 25,
  },
  card: {
    height: 110,
  },

  carddetail: {
    color: '#000',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    alignItems: 'stretch',
    marginRight: 220,
  },

  cardfirstline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000000aa',
  },
  modalView: {
    width: wp('90%'),
    height: hp('70%'),
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    top: 30,
    width: wp('50%'),
    height: hp('6%'),
  },
  button1: {
    borderRadius: 10,
    padding: 10,
    top: 10,
    width: wp('30%'),
    height: hp('6%'),
    marginRight: wp('10%'),
    backgroundColor: '#e26a00',
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    top: 10,
    width: wp('30%'),
    height: hp('6%'),
    marginLeft: wp('10%'),
    backgroundColor: 'red',
  },

  buttonClose: {
    backgroundColor: '#e26a00',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textpopup: {
    height: hp('7%'),
    borderRadius: 5,
    Color: 'gray',
    width: wp('69%'),
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 5,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
  },
  Formpopup: {
    color: '#000',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 13,
  },
  AssignPopup: {
    color: '#000',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 20,
    bottom: 40,
    marginLeft: 12,
  },
  initiate: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    top: 5,
    color: '#fff',
  },

  Completed: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    top: 5,
    color: '#fff',
  },
  Assigned: {
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    top: 5,
  },

  dropping: {
    height: hp('7%'),
    borderRadius: 5,
    Color: 'gray',
    width: wp('70%'),
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
  },
  close: {
    marginLeft: 250,
    bottom: 20,
  },
  selectedTextStyle: {
    marginLeft: 10,
  },
  placeholderStyle: {
    marginLeft: 10,
  },
  caseAssignment: {
    bottom: 40,
    color: '#000',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  assingnmentdrop: {
    bottom: 40,
  },
  assigncontent: {
    bottom: 30,
  },
  modalbuttons: {
    flexDirection: 'row',
    marginRight: 10,
    justifyContent: 'space-around',
  },
  incidenterrmessage: {
    color: 'red',
    padding: 2,
    top: 10,
    bottom: 5,
    marginLeft: 25,
  },
});
