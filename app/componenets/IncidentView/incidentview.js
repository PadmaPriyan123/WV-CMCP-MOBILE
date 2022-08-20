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
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons/faCircleChevronRight';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

import {ScrollView} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

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

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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
                  <Text style={styles.cardcontentheading}>Id:125647</Text>
                  <Text></Text>
                  <View>
                    <FontAwesomeIcon
                      style={{marginRight: 15, marginTop: 10}}
                      icon={faCircleChevronRight}
                      size={20}
                      color={'#fff'}
                    />
                    <Text onPress={() => navigation.navigate('Form')}></Text>
                  </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={styles.cardcontentpara}>
                    <Text style={styles.carddetail}> Date:18.05.2021</Text>
                    <Text style={styles.carddetail}>Gd Entry:678945</Text>
                    <Text style={styles.carddetail}>FIR no:678945</Text>
                  </View>
                  <View style={{right: 120}}>
                    <Text style={styles.carddetail}> District:Barpeta</Text>
                    <Text style={styles.carddetail}>State:Assam</Text>
                  </View>
                </View>
                <View style={styles.linethrough}></View>
                <View style={styles.iconmain}>
                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      View
                    </Text>
                  </View>
                  <View style={styles.verticleLine}></View>
                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      Edit
                    </Text>
                  </View>
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
                  <Text style={styles.cardcontentheading}> Id:125651</Text>
                  <View>
                    <FontAwesomeIcon
                      style={{marginRight: 15, marginTop: 10}}
                      icon={faCircleChevronRight}
                      size={20}
                      color={'#fff'}
                    />
                    <Text onPress={() => navigation.navigate('Form')}></Text>
                  </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={styles.cardcontentpara}>
                    <Text style={styles.carddetail}> Date:17.05.2021</Text>
                    <Text style={styles.carddetail}>Gd Entry:678991</Text>
                    <Text style={styles.carddetail}>FIR no:678015</Text>
                  </View>
                  <View style={{right: 120}}>
                    <Text style={styles.carddetail}> District:Udalguri</Text>
                    <Text style={styles.carddetail}>State:WestBengal</Text>
                  </View>
                </View>
                <View style={styles.linethrough}></View>
                <View style={styles.iconmain}>
                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      View
                    </Text>
                  </View>
                  <View style={styles.verticleLine}></View>

                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      Edit
                    </Text>
                  </View>
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
                  <Text style={styles.cardcontentheading}> Id:125761</Text>
                  <View>
                    <FontAwesomeIcon
                      style={{marginRight: 15, marginTop: 10}}
                      icon={faCircleChevronRight}
                      size={20}
                      color={'#fff'}
                    />
                    <Text onPress={() => navigation.navigate('Form')}></Text>
                  </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={styles.cardcontentpara}>
                    <Text style={styles.carddetail}> Date:28.05.2021</Text>
                    <Text style={styles.carddetail}>Gd Entry:678990</Text>
                    <Text style={styles.carddetail}>FIR no:678715</Text>
                  </View>
                  <View style={{right: 120}}>
                    <Text style={styles.carddetail}> District:Dibrugarh</Text>
                    <Text style={styles.carddetail}>State:WestBengal</Text>
                  </View>
                </View>
                <View style={styles.linethrough}></View>
                <View style={styles.iconmain}>
                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      View
                    </Text>
                  </View>
                  <View style={styles.verticleLine}></View>

                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      Edit
                    </Text>
                  </View>
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
                  <Text style={styles.cardcontentheading}>Id:124704</Text>
                  <View>
                    <FontAwesomeIcon
                      style={{marginRight: 15, marginTop: 10}}
                      icon={faCircleChevronRight}
                      size={20}
                      color={'#fff'}
                    />
                    <Text onPress={() => navigation.navigate('Form')}></Text>
                  </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row',}}>
                  <View style={styles.cardcontentpara}>
                    <Text style={styles.carddetail}> Date:18.08.2021</Text>
                    <Text style={styles.carddetail}>Gd Entry:958945</Text>
                    <Text style={styles.carddetail}>FIR no:609945</Text>
                  </View>
                  <View style={{right: 120}}>
                    <Text style={styles.carddetail}> District:Chirang</Text>
                    <Text style={styles.carddetail}>State:Assam</Text>
                  </View>
                </View>
                <View style={styles.linethrough}></View>
                <View style={styles.iconmain}>
                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      View
                    </Text>
                  </View>
                  <View style={styles.verticleLine}></View>

                  <View style={styles.iconmain1}>
                    <Text
                      style={styles.iconname}
                      onPress={() => navigation.navigate('Form')}>
                      {' '}
                      Edit
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </Card>
          </DropShadow>

          <Card style={styles.card1}>
            <ImageBackground
              source={images.worldvision_card}
              style={styles.cardbackground}>
              <View style={styles.cardfirstline}>
                <Text style={styles.cardcontentheading}>Id:635647</Text>
                <View>
                  <FontAwesomeIcon
                    style={{marginRight: 15, marginTop: 10}}
                    icon={faCircleChevronRight}
                    size={20}
                    color={'#fff'}
                  />
                  <Text onPress={() => navigation.navigate('Form')}></Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={styles.cardcontentpara}>
                    <Text style={styles.carddetail}> Date:01.09.2021</Text>
                    <Text style={styles.carddetail}>Gd Entry:178945</Text>
                    <Text style={styles.carddetail}>FIR no:679045</Text>
                  </View>
                  <View style={{right: 120}}>
                    <Text style={styles.carddetail}> District:Hojai</Text>
                    <Text style={styles.carddetail}>State:Assam</Text>
                  </View>
                </View>
              <View style={styles.linethrough}></View>
              <View style={styles.iconmain}>
                <View style={styles.iconmain1}>
                  <Text
                    style={styles.iconname}
                    onPress={() => navigation.navigate('Form')}>
                    {' '}
                    View
                  </Text>
                </View>
                <View style={styles.verticleLine}></View>

                <View style={styles.iconmain1}>
                  <Text
                    style={styles.iconname}
                    onPress={() => navigation.navigate('Form')}>
                    {' '}
                    Edit
                  </Text>
                </View>
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
    marginRight: 240,
    fontSize: 18,
    bottom: 18,
    fontFamily: 'Lato-Regular',
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
    bottom: 20,

    backgroundColor: '#fff',

    height: 35,
  },
  iconmain1: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconname: {
    color: '#000',
    marginTop: 9,
    fontFamily: 'Lato-Regular',
  },
  carddetail: {
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    marginLeft: 7,
    alignItems:'stretch'
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
    top: 15,
  },
  fillter: {
    width: 104,
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
});
