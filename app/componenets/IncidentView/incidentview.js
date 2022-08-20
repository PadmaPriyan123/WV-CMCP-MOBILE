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
import images from '../Images/image';
import {Card, TextInput} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';

import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

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
            size={25}
            color={'gray'}
          />
          <TouchableOpacity
            style={styles.fillter}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.input}>Filter</Text>
            <FontAwesomeIcon
              style={{bottom: 5, marginLeft: 70}}
              icon={faAngleDown}
              size={15}
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <DropShadow
            style={{
              shadowColor: '#000',

              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 1,
              shadowRadius: 1,
            }}>
            <Card style={styles.card}>
              <ImageBackground
                source={images.worldvision_card}
                style={styles.cardbackground}>
                <View style={styles.cardfirstline}>
                  <Text style={styles.cardcontentheading}>Case No:125647</Text>
                  <View style={{marginTop: 8}}>
                    <Menu
                      visible={visible}
                      anchor={
                        <Text onPress={showMenu}>
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            size={20}
                            color={'#fff'}
                          />
                        </Text>
                      }
                      onRequestClose={hideMenu}>
                      <MenuItem onPress={()=>navigation.navigate('Form')}>View</MenuItem>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>Edit</MenuItem>
                      <MenuItem onPress={hideMenu}>Case Assign</MenuItem>
                    </Menu>
                  </View>
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>
                    Incident Date:18.05.2021
                  </Text>
                  <Text style={styles.carddetail1}>Case active Status</Text>
                </View>
                <View
                  style={{
                    marginLeft: 150,
                    backgroundColor: 'gray',
                    borderRadius: 40,
                    height: 35,
                    width: 100,
                    borderColor: '#fff',
                    top: 15,
                  }}>
                  <Text style={styles.initiate}>Initiate</Text>
                </View>
              </ImageBackground>
            </Card>
          </DropShadow>
          <DropShadow
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 2,
              shadowRadius: 2,
            }}>
            <Card style={styles.card1}>
              <ImageBackground
                source={images.worldvision_card}
                style={styles.cardbackground}>
                <View style={styles.cardfirstline}>
                  <Text style={styles.cardcontentheading}>Case No:165647</Text>
                  <View style={{marginTop: 8}}>
                    <Menu
                      visible={visible1}
                      anchor={
                        <Text onPress={showMenu1}>
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            size={20}
                            color={'#fff'}
                          />
                        </Text>
                      }
                      onRequestClose={hideMenu1}>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>View</MenuItem>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>Edit</MenuItem>
                      <MenuItem onPress={hideMenu1}>Case Assign</MenuItem>
                    </Menu>
                  </View>
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>
                    Incident Date:17.05.2019
                  </Text>
                  <Text style={styles.carddetail1}>Case active Status</Text>
                </View>
                <View
                  style={{
                    marginLeft: 150,
                    backgroundColor: 'gray',
                    borderRadius: 40,
                    height: 35,
                    width: 100,
                    borderColor: '#fff',
                    top: 15,
                  }}>
                  <Text style={styles.initiate}>Initiate</Text>
                </View>
              </ImageBackground>
            </Card>
          </DropShadow>
          <DropShadow
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 2,
              shadowRadius: 2,
            }}>
            <Card style={styles.card1}>
              <ImageBackground
                source={images.worldvision_card}
                style={styles.cardbackground}>
                <View style={styles.cardfirstline}>
                  <Text style={styles.cardcontentheading}>Case No:187463</Text>

                  <View style={{marginTop: 8}}>
                    <Menu
                      visible={visible2}
                      anchor={
                        <Text onPress={showMenu2}>
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            size={20}
                            color={'#fff'}
                          />
                        </Text>
                      }
                      onRequestClose={hideMenu2}>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>View</MenuItem>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>Edit</MenuItem>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>Case Assign</MenuItem>
                    </Menu>
                  </View>
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>
                    {' '}
                    Incident Date:10.03.2018
                  </Text>
                  <Text style={styles.carddetail1}>Case active Status</Text>
                </View>
                <View
                  style={{
                    marginLeft: 150,
                    backgroundColor: 'gray',
                    borderRadius: 40,
                    height: 35,
                    width: 100,
                    borderColor: '#fff',
                    top: 15,
                  }}>
                  <Text style={styles.initiate}>Initiate</Text>
                </View>
              </ImageBackground>
            </Card>
          </DropShadow>
          <DropShadow
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 2,
              shadowRadius: 2,
            }}>
            <Card style={styles.card1}>
              <ImageBackground
                source={images.worldvision_card}
                style={styles.cardbackground}>
                <View style={styles.cardfirstline}>
                  <Text style={styles.cardcontentheading}>Case No:187631</Text>
                  <View style={{marginTop: 8}}>
                    <Menu
                      visible={visible3}
                      anchor={
                        <Text onPress={showMenu3}>
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            size={20}
                            color={'#fff'}
                          />
                        </Text>
                      }
                      onRequestClose={hideMenu3}>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>View</MenuItem>
                      <MenuItem  onPress={()=>navigation.navigate('Form')}>Edit</MenuItem>
                      <MenuItem onPress={hideMenu3}>Case Assign</MenuItem>
                    </Menu>
                  </View>
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>
                    Incident Date:07.05.2021
                  </Text>
                  <Text style={styles.carddetail1}>Case active Status</Text>
                </View>
                <View
                  style={{
                    marginLeft: 150,
                    backgroundColor: 'gray',
                    borderRadius: 40,
                    height: 35,
                    width: 100,
                    borderColor: '#fff',
                    top: 15,
                  }}>
                  <Text style={styles.initiate}>Initiate</Text>
                </View>
              </ImageBackground>
            </Card>
          </DropShadow>

          <Card style={styles.card1}>
            <ImageBackground
              source={images.worldvision_card}
              style={styles.cardbackground}>
              <View style={styles.cardfirstline}>
                <Text style={styles.cardcontentheading}>Case No:314578</Text>
                <View style={{marginTop: 8}}>
                  <Menu
                    visible={visible4}
                    anchor={
                      <Text onPress={showMenu4}>
                        <FontAwesomeIcon
                          icon={faEllipsisVertical}
                          size={20}
                          color={'#fff'}
                        />
                      </Text>
                    }
                    onRequestClose={hideMenu4}>
                    <MenuItem  onPress={()=>navigation.navigate('Form')}>View</MenuItem>
                    <MenuItem  onPress={()=>navigation.navigate('Form')}>Edit</MenuItem>
                    <MenuItem onPress={hideMenu4}>Case Assign</MenuItem>
                  </Menu>
                </View>
              </View>
              <View style={styles.cardcontentpara}>
                <Text style={styles.carddetail}>Incident Date:29.05.2021</Text>
                <Text style={styles.carddetail1}>Case active Status</Text>
              </View>
              <View
                style={{
                  marginLeft: 150,
                  backgroundColor: 'gray',
                  borderRadius: 40,
                  height: 35,
                  width: 100,
                  borderColor: '#fff',
                  top: 15,
                }}>
                <Text style={styles.initiate}>Initiate</Text>
              </View>
            </ImageBackground>
          </Card>
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
              <View style={{marginTop: 16}}>
                <Text style={styles.Formpopup}>
                  From Date:<Text style={styles.star}>*</Text>
                </Text>
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
              <View style={{marginTop: 16}}>
                <Text style={styles.Formpopup}>
                  To Date:<Text style={styles.star}>*</Text>
                </Text>
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
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
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
    fontSize: 20,
    marginLeft: 11,
    marginTop: 5,
    color: '#fff',
    fontFamily: 'Lato-Bold',
  },
  cardcontentpara: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    top: 20,
  },
  card: {
    height: 150,
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
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    alignItems: 'stretch',
    marginRight: 150,
  },
  verticleLine: {
    height: '70%',
    width: 1,
    top: 5,

    backgroundColor: '#000',
  },
  cardbackground: {
    height: 150,
  },
  cardfirstline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linethrough: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    top: 45,
  },
  fillter: {
    width: 90,
    height: 47,
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
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: wp('90%'),
    height: hp('50%'),
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    top: 30,
    width: wp('50%'),
    height: hp('6%'),
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
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
    marginLeft: 7,
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
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    top: 5,
  },
  carddetail1: {
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-bold',
    fontSize: 15,
    alignItems: 'stretch',
    marginRight: 172,
    top: 20,
  },
});
