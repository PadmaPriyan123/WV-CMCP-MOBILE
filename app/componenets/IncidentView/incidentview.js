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
  Alert,
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
import {faCalendarDays, faFilter} from '@fortawesome/free-solid-svg-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {Dropdown} from 'react-native-element-dropdown';

const Incident = ({navigation}, props) => {
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

  const minDate = new Date('2015-05-01');
  const maxDate = new Date('2022-09-02');
  const {onChangeText, mode = 'date', min = minDate, max = maxDate} = props;

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };
  const [modalVisible, setModalVisible] = React.useState(false);

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
        <MenuItem onPress={() => navigation.navigate('Viewcard')}>
          <View style={{flexDirection: 'row'}}>
            <Text>
              <FontAwesomeIcon icon={faEye} size={14} />
            </Text>
            <Text style={styles.popStyles}>View</Text>
          </View>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('Viewcard')}>
          <View style={{flexDirection: 'row'}}>
            <Text>
              <FontAwesomeIcon icon={faPen} size={14} />
            </Text>
            <Text style={styles.popStyles}>Edit</Text>
          </View>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('CaseAssignment')}>
          <View style={{flexDirection: 'row'}}>
            <Text>
              <FontAwesomeIcon icon={faStamp} size={14} />
            </Text>
            <Text style={styles.popStyles}>Case Assign</Text>
          </View>
        </MenuItem>
      </Menu>
    );
  };

  const status = [
    {label: 'Initiated', value: '1'},
    {label: 'Inprogress ', value: '2'},
    {label: 'Completed ', value: '3'},
    {label: 'Closed', value: '4'},
  ];
  const [value1, setValue1] = React.useState('');

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
          <View style={{marginTop: 10}}>
            <Card style={styles.card}>
              <View style={styles.cardfirstline}>
                <Text style={styles.cardcontentheading}>
                  Case No:{' '}
                  <Text style={{fontFamily: 'Lato-Bold', color: '#000'}}>
                    567894
                  </Text>
                </Text>
                <View style={{marginTop: 17, marginRight: 10}}>
                  <PopIncidentMenu />
                </View>
              </View>
              <View style={styles.cardcontentpara}>
                <Text style={styles.carddetail}>7-06-201</Text>
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
                  activeUnderlineColor="gray"
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
                    style={{marginLeft: 230, bottom: hp('5%')}}
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
                    minimumDate={min}
                    maximumDate={max}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.Formpopup}>Case status:</Text>
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
                    placeholder="Select case"
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
            width: 50,
            height: 50,
            justifyContent: 'center',
            position: 'absolute',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: '#e26a00',
            marginLeft: 300,
            bottom: 10,
          }}>
          <Text style={styles.initiate}>
            <View>
              <FontAwesomeIcon
                style={{bottom: 5}}
                icon={faFilter}
                size={30}
                color={'#fff'}
              />
            </View>
          </Text>
        </View>
      </TouchableOpacity>
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
  buttonClose: {
    backgroundColor: '#e26a00',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  textpopup: {
    height: hp('7%'),
    borderRadius: 5,
    Color: 'gray',
    width: wp('69%'),
    marginTop: 10,
    fontFamily: 'Lato-Regular',
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

  close: {
    marginLeft: wp('70%'),
    bottom: hp('3%'),
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

  placeholderStyle: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    padding: 5,
  },
  popStyles: {
    marginLeft: 8,
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'Lato-Bold',
    color: '#000000',
  },
});
