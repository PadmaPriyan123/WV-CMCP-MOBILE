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

  const [mhpss, setMhpss] = React.useState([]);
  const [mhpss2, setMhpss2] = React.useState([]);

  useEffect(() => {
    var incidenterr = {
      legalerr: '',
      mphsserr: '',
    };
    setIncidentError(incidenterr);
    setAssignValue1('');
    setAssignValue2('');
    setMhpss([]);
    setMhpss2([]);
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
        <MenuItem
          onPress={() => {
            setModalVisible2(!modalVisible2);
          }}>
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
    {label: 'Biju', id: '1'},
    {label: 'Murali ', id: '2'},
    {label: 'Bharat ', id: '3'},
    {label: 'Arun', id: '4'},
    {label: 'Bala', id: '5'},
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
    var incidenterr = {
      legalerr: '',
    };
    if (!mhpss2.length) {
      incidenterr.legalerr = '*Please select atleast one User';
      ++err;
    } else {
      incidenterr.legalerr = '';
    }
    if (!mhpss.length) {
      incidenterr.mphsserr = '*Please select atleast one User';
      ++err;
    } else {
      incidenterr.mphsserr = '';
    }
    setIncidentError(incidenterr);
    if (err == 0) {
      alert('Case assigned successfully');
    }
  }

  function caseAssignValidation() {
    console.log('validation');
    console.log(mhpss);
    console.log(mhpss2);
    console.log(incidentError);
    let cnt = 0;
    var incidenterr = {
      legalerr: '',
      mphsserr: '',
    };
    if (incidentError.legalerr != '') {
      ++cnt;
      if (!mhpss2.length) {
        incidenterr.legalerr = '*Please select atleast one User';
      } else {
        incidenterr.legalerr = '';
      }
    }
    if (incidentError.mphsserr != '') {
      ++cnt;
      if (!mhpss.length) {
        incidenterr.mphsserr = '*Please select atleast one User';
      } else {
        incidenterr.mphsserr = '';
      }
    }
    console.log();
    if (cnt > 0) {
      setIncidentError(incidenterr);
    }
  }

  function setMhpssPerson(item) {
    if (mhpss.length < 3) {
      if (mhpss.map(val => val?.id).includes(item.id)) {
        alert('The name already exists');
        return '';
      } else {
        let a = assignLegal2.filter(val => val.id == item.id);
        setMhpss([...mhpss, ...a]);
      }
    } else {
      alert('You can able to select only 3 persons');
    }
  }

  function setLegalPerson(item) {
    if (mhpss2.length < 3) {
      if (mhpss2.map(val => val?.id).includes(item.id)) {
        alert('The name already exists');
        return '';
      } else {
        let c = assignLegal.filter(val => val.id == item.id);
        setMhpss2([...mhpss2, ...c]);
      }
    } else {
      alert('You can able to select only 3 persons');
    }
  }

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
            <View style={styles.assignmodalView}>
              <View>
                <Text
                  style={styles.close}
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <FontAwesomeIcon icon={faXmark} size={20} color={'red'} />
                </Text>
              </View>
              <View>
                <Text style={styles.caseAssignment}>Case Assignment</Text>
              </View>
              <View>
                <Text style={styles.AssignPopup}>Legal Person</Text>
                <View style={styles.mhpsscontent}>
                  {mhpss2 &&
                    mhpss2.length > 0 &&
                    mhpss2.map((val, i) => {
                      return (
                        <TouchableOpacity
                          key={i}
                          onPress={() => {
                            let c = mhpss2.filter((d, index) => index != i);
                            setMhpss2([...c]);
                          }}>
                          <View style={styles.selectedStyle2}>
                            <Text style={styles.textSelectedStyle2}>
                              {val.label}
                            </Text>
                            <FontAwesomeIcon
                              icon={faXmark}
                              size={16}
                              color={'#000'}
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </View>
                <View style={styles.assingnmentdrop}>
                  <Dropdown
                    containerStyle={{backgroundColor: '#ddd'}}
                    style={styles.droppingpopup}
                    placeholderStyle={styles.AssignplaceholderStyle}
                    selectedTextStyle={styles.AssignselectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={assignLegal}
                    maxHeight={250}
                    maxSelect={3}
                    labelField="label"
                    valueField="id"
                    placeholder="Assign the Legal Person"
                    value={assignValue1}
                    onChange={item => {
                      setAssignValue1(item);
                      setLegalPerson(item);
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
                <View style={styles.mhpsscontent}>
                  {mhpss &&
                    mhpss.length > 0 &&
                    mhpss.map((val, i) => {
                      return (
                        <TouchableOpacity
                          key={i}
                          onPress={() => {
                            let a = mhpss.filter((b, index) => index != i);
                            setMhpss([...a]);
                          }}>
                          <View style={styles.selectedStyle2}>
                            <Text style={styles.textSelectedStyle2}>
                              {val.label}
                            </Text>
                            <FontAwesomeIcon
                              icon={faXmark}
                              size={16}
                              color={'#000'}
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </View>
                <View style={styles.assingnmentdrop}>
                  <Dropdown
                    containerStyle={{backgroundColor: '#ddd'}}
                    style={styles.droppingpopup}
                    placeholderStyle={styles.AssignplaceholderStyle}
                    selectedTextStyle={styles.AssignselectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={assignLegal2}
                    maxSelect={3}
                    maxHeight={250}
                    labelField="label"
                    valueField="id"
                    placeholder="Assign the MHPSS Person"
                    value={assignValue2}
                    dropdownPosition="bottom"
                    onChange={item => {
                      setAssignValue2(item);
                      setMhpssPerson(item);
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
            </View>

            <Pressable style={styles.button1} onPress={() => incidentmodal()}>
              <Text style={styles.assigntextStyle}>Submit</Text>
            </Pressable>
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
  assignmodalView: {
    width: wp('90%'),
    height: hp('75%'),
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
    width: wp('50%'),
    height: hp('6%'),
    backgroundColor: '#e26a00',
    alignSelf: 'center',
    marginTop: -80,
  },

  buttonClose: {
    backgroundColor: '#e26a00',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  assigntextStyle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
  },
  assigncontent: {
    bottom: 30,
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
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    bottom: 20,
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
    marginTop: 5,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
  },

  droppingpopup: {
    height: hp('7%'),
    borderRadius: 5,
    Color: 'gray',
    top: 5,
    width: wp('70%'),
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ecf0f1',
  },
  close: {
    marginLeft: 250,
    bottom: 20,
  },
  AssignselectedTextStyle: {
    marginLeft: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 12,
  },
  selectedTextStyle: {
    marginLeft: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 12,
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#e26a00',
    color: 'white',
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
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  selectedStyle2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#e26a00',
    color: 'white',
    marginTop: 8,
    marginRight: 12,
    bottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: wp('20%'),
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textSelectedStyle2: {
    marginRight: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    flexDirection: 'row',
  },
  placeholderStyle: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    padding: 5,
  },
  AssignplaceholderStyle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    padding: 4,
  },
  caseAssignment: {
    bottom: 40,
    color: '#e26a00',
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  assingnmentdrop: {
    height: hp('20%'),
  },

  incidenterrmessage: {
    color: 'red',
    padding: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  mhpsscontent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
