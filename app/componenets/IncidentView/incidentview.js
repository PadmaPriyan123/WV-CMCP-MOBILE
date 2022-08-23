import React from 'react';
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
import DropShadow from 'react-native-drop-shadow';
import {SearchBar} from '@rneui/themed';
import {Card, TextInput} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';

import {faPen} from '@fortawesome/free-solid-svg-icons/faPen';
import {faStamp} from '@fortawesome/free-solid-svg-icons/faStamp';

import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
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

  const [visible, setVisible] = React.useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  const [visible1, setVisible1] = React.useState(false);

  const hideMenu1 = () => setVisible1(false);

  const showMenu1 = () => setVisible1(true);
  const [visible2, setVisible2] = React.useState(false);

  const hideMenu2 = () => setVisible2(false);

  const showMenu2 = () => setVisible2(true);
  const [visible3, setVisible3] = React.useState(false);

  const hideMenu3 = () => setVisible3(false);

  const showMenu3 = () => setVisible3(true);
  const [visible4, setVisible4] = React.useState(false);

  const hideMenu4 = () => setVisible4(false);

  const showMenu4 = () => setVisible4(true);

  const status = [
    {label: 'Initiate', value: '1'},

    {label: 'Progress ', value: '2'},
    {label: 'Completed ', value: '3'},
    {label: 'Close ', value: '4'},
  ];
  const [value1, setValue1] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TextInput
            style={{
              width: wp('60%'),
              height: hp('6%'),
              borderRadius: 5,
              marginLeft: 10,
              backgroundColor: '#fff',
            }}
            placeholder="Search"
          />
          <FontAwesomeIcon
            style={{right: 30, top: 10}}
            icon={faSearch}
            size={20}
            color={'gray'}
          />
          <TouchableOpacity
            style={styles.fillter}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.input}>Filter</Text>
            <FontAwesomeIcon
              style={{bottom: 3, marginLeft: 60}}
              icon={faAngleDown}
              size={15}
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
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
                  <MenuItem onPress={hideMenu}>
                    {' '}
                    <View style={{flexDirection: 'row'}}>
                      <Text>
                        <FontAwesomeIcon
                          icon={faStamp}
                          size={20}
                          color={'gray'}
                        />
                      </Text>
                      <Text style={{marginLeft: 8, color: '#000'}}>
                        Case Assign
                      </Text>
                    </View>
                  </MenuItem>
                </Menu>
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
                  <Menu
                    visible={visible1}
                    anchor={
                      <Text onPress={showMenu1}>
                        <FontAwesomeIcon
                          icon={faEllipsisVertical}
                          size={20}
                          color={'gray'}
                        />
                      </Text>
                    }
                    onRequestClose={hideMenu1}>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faEye}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          View
                        </Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faPen}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          Edit
                        </Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={hideMenu1}>
                      {' '}
                      <View style={{flexDirection: 'row'}}>
                        <Text>
                          <FontAwesomeIcon
                            icon={faStamp}
                            size={20}
                            color={'gray'}
                          />
                        </Text>
                        <Text style={{marginLeft: 8, color: '#000'}}>
                          Case Assign
                        </Text>
                      </View>
                    </MenuItem>
                  </Menu>
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
                  <Menu
                    visible={visible2}
                    anchor={
                      <Text onPress={showMenu2}>
                        <FontAwesomeIcon
                          icon={faEllipsisVertical}
                          size={20}
                          color={'gray'}
                        />
                      </Text>
                    }
                    onRequestClose={hideMenu2}>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faEye}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          View
                        </Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faPen}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          Edit
                        </Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={hideMenu2}>
                      {' '}
                      <View style={{flexDirection: 'row'}}>
                        <Text>
                          <FontAwesomeIcon
                            icon={faStamp}
                            size={20}
                            color={'gray'}
                          />
                        </Text>
                        <Text style={{marginLeft: 8, color: '#000'}}>
                          Case Assign
                        </Text>
                      </View>
                    </MenuItem>
                  </Menu>
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
                  <Menu
                    visible={visible3}
                    anchor={
                      <Text onPress={showMenu3}>
                        <FontAwesomeIcon
                          icon={faEllipsisVertical}
                          size={20}
                          color={'gray'}
                        />
                      </Text>
                    }
                    onRequestClose={hideMenu3}>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faEye}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          View
                        </Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faPen}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 8, color: '#000'}}>Edit</Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={hideMenu3}>
                      <View style={{flexDirection: 'row'}}>
                        <Text>
                          <FontAwesomeIcon
                            icon={faStamp}
                            size={20}
                            color={'gray'}
                          />
                        </Text>
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          Case Assign
                        </Text>
                      </View>
                    </MenuItem>
                  </Menu>
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
                  <Menu
                    visible={visible4}
                    anchor={
                      <Text onPress={showMenu4}>
                        <FontAwesomeIcon
                          icon={faEllipsisVertical}
                          size={20}
                          color={'gray'}
                        />
                      </Text>
                    }
                    onRequestClose={hideMenu4}>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faEye}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          View
                        </Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={() => navigation.navigate('Form')}>
                      <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                          icon={faPen}
                          size={20}
                          color={'gray'}
                        />
                        <Text style={{marginLeft: 10, color: '#000'}}>
                          Edit
                        </Text>
                      </View>
                    </MenuItem>
                    <MenuItem onPress={hideMenu4}>
                      <View style={{flexDirection: 'row'}}>
                        <Text>
                          <FontAwesomeIcon
                            icon={faStamp}
                            size={20}
                            color={'gray'}
                          />
                        </Text>
                        <Text style={{marginLeft: 8, color: '#000'}}>
                          Case Assign
                        </Text>
                      </View>
                    </MenuItem>
                  </Menu>
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
  card1: {
    marginTop: 20,
    height: 150,
    backgroundColor: '#e26a00',
    borderRadius: 13,
  },
  iconmain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 45,

    backgroundColor: '#fff',

    height: 41,
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
  verticleLine: {
    height: '70%',
    width: 1,
    top: 5,

    backgroundColor: '#000',
  },
  cardbackground: {
    height: 150,
    backgroundColor: '#fff',
  },
  cardfirstline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fillter: {
    width: 90,
    height: 40,
    backgroundColor: '#00bad7',

    borderRadius: 5,
    marginLeft: -10,
  },
  input: {
    textAlign: 'center',
    color: '#fff',
    marginRight: 10,
    top: 12,
    fontFamily: 'Lato-Bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000000aa',
  },
  modalView: {
    width: wp('90%'),
    height: hp('60%'),
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

  buttonClose: {
    backgroundColor: '#e26a00',
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
  initiate: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    top: 5,
    color: '#fff',
  },
  carddetail1: {
    color: 'gray',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-bold',
    fontSize: 15,
    alignItems: 'stretch',
    marginRight: 172,
    top: 20,
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
    width: wp('69%'),
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 7,
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
});
