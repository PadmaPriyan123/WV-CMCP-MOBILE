import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import images from '../Images/image';
import {Card} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons/faCircleChevronRight';
import {ScrollView} from 'react-native-gesture-handler';
const Incident = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <DropShadow
            style={{
              shadowColor: '#000',
              
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 1,
              shadowRadius: 2,
            }}>
            <Card style={styles.card}>
              <ImageBackground
                source={images.worldvision_card}
                style={styles.cardbackground}>
                <View style={styles.cardfirstline}>
                  <Text style={styles.cardcontentheading}>Kumaran</Text>
                  <FontAwesomeIcon
                    style={{marginRight: 15, marginTop: 10}}
                    icon={faCircleChevronRight}
                    size={20}
                    color={'#fff'}
                  />
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>Reporter Name :Chandru </Text>
                  <Text style={styles.carddetail}>District:Assam</Text>
                  <Text style={styles.carddetail}>State:Assam</Text>
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
                  <View style={styles.verticleLine}></View>

                  <View style={styles.iconmain1}>
                    <Text style={styles.iconname}> Download</Text>
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
                  <Text style={styles.cardcontentheading}>Gunasekaran</Text>
                  <FontAwesomeIcon
                    style={{marginRight: 15, marginTop: 10}}
                    icon={faCircleChevronRight}
                    size={20}
                    color={'#fff'}
                  />
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>Reporter Name :Selvam </Text>
                  <Text style={styles.carddetail}>District:west Bengal</Text>
                  <Text style={styles.carddetail}>State:West Bengal</Text>
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
                  <View style={styles.verticleLine}></View>

                  <View style={styles.iconmain1}>
                    <Text style={styles.iconname}> Downlaod</Text>
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
                  <Text style={styles.cardcontentheading}>Rajukumar</Text>
                  <FontAwesomeIcon
                    style={{marginRight: 15, marginTop: 10}}
                    icon={faCircleChevronRight}
                    size={20}
                    color={'#fff'}
                  />
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>
                    Reporter Name :Parthiban{' '}
                  </Text>
                  <Text style={styles.carddetail}>District:Assam</Text>
                  <Text style={styles.carddetail}>State:Assam</Text>
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
                  <View style={styles.verticleLine}></View>

                  <View style={styles.iconmain1}>
                    <Text style={styles.iconname}> Downlaod</Text>
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
                  <Text style={styles.cardcontentheading}>Kadhar</Text>
                  <FontAwesomeIcon
                    style={{marginRight: 15, marginTop: 10}}
                    icon={faCircleChevronRight}
                    size={20}
                    color={'#fff'}
                  />
                </View>
                <View style={styles.cardcontentpara}>
                  <Text style={styles.carddetail}>Reporter Name :Muthu </Text>
                  <Text style={styles.carddetail}>District:West Bengal</Text>
                  <Text style={styles.carddetail}>State:WestBengal</Text>
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
                  <View style={styles.verticleLine}></View>

                  <View style={styles.iconmain1}>
                    <Text style={styles.iconname}> Downlaod</Text>
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
                <Text style={styles.cardcontentheading}>Parthiban</Text>
                <FontAwesomeIcon
                  style={{marginRight: 15, marginTop: 10}}
                  icon={faCircleChevronRight}
                  size={20}
                  color={'#fff'}
                />
              </View>
              <View style={styles.cardcontentpara}>
                <Text style={styles.carddetail}>Reporter Name :Siva </Text>
                <Text style={styles.carddetail}>District:Assam</Text>
                <Text style={styles.carddetail}>State:Assam</Text>
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
                <View style={styles.verticleLine}></View>

                <View style={styles.iconmain1}>
                  <Text style={styles.iconname}> Downlaod</Text>
                </View>
              </View>
            </ImageBackground>
          </Card>
        </View>
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
    backgroundColor: '#fff',
  },
  cardcontentheading: {
    fontSize: 20,
    marginLeft: 8,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardcontentpara: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
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
    marginTop: 25,
    borderRadius: 10,
  },
  iconmain1: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconname: {
    color: '#fff',
  },
  carddetail: {
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
  },
  verticleLine: {
    height: '80%',
    width: 1,
    backgroundColor: '#fff',
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
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    top: 15,
  },
});
