import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPersonDress,
  faBuildingColumns,
  faFileCircleCheck,
  faCircleQuestion,
  faBriefcaseMedical,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
} from '@fortawesome/free-solid-svg-icons';

const Viewcard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.Viewcard}>
          <TouchableOpacity>
            <Card style={styles.card}>
              <View style={styles.viewcontent}>
                <View style={styles.viewcontrol}>
                  <FontAwesomeIcon
                    style={{top: 25, marginLeft: 20}}
                    icon={fa1}
                    size={30}
                    color={'#fff'}
                  />

                  <Text
                    style={styles.paragraph}
                    onPress={() => navigation.navigate('victim')}>
                    Victim
                  </Text>
                </View>
                <View>
                  <FontAwesomeIcon
                    style={{marginRight: 20, marginTop: hp('5.5%')}}
                    icon={faPersonDress}
                    size={35}
                    color={'#fff'}
                  />
                </View>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={styles.card1}>
              <View style={styles.viewcontent}>
                <View style={styles.viewcontrol}>
                  <FontAwesomeIcon
                    style={{top: 25, marginLeft: 20}}
                    icon={fa2}
                    size={30}
                    color={'#fff'}
                  />
                  <Text
                    style={styles.paragraph}
                    onPress={() => navigation.navigate('complaints')}>
                    Complaints
                  </Text>
                </View>
                <FontAwesomeIcon
                  style={{marginRight: 20, marginTop: hp('5.5%')}}
                  icon={faBuildingColumns}
                  size={32}
                  color={'#fff'}
                />
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={styles.card2}>
              <View style={styles.viewcontent}>
                <View style={styles.viewcontrol}>
                  <FontAwesomeIcon
                    style={{top: 25, marginLeft: 20}}
                    icon={fa3}
                    size={30}
                    color={'#fff'}
                  />
                  <Text
                    style={styles.paragraph}
                    onPress={() => navigation.navigate('legal')}>
                    Legal
                  </Text>
                </View>
                <FontAwesomeIcon
                  style={{marginRight: 20, marginTop: hp('5.5%')}}
                  icon={faFileCircleCheck}
                  size={32}
                  color={'#fff'}
                />
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={styles.card3}>
              <View style={styles.viewcontent}>
                <View style={styles.viewcontrol}>
                  <FontAwesomeIcon
                    style={{top: 25, marginLeft: 20}}
                    icon={fa4}
                    size={30}
                    color={'#fff'}
                  />
                  <Text
                    style={styles.paragraph}
                    onPress={() => navigation.navigate('service')}>
                    Reintegration
                  </Text>
                </View>
                <FontAwesomeIcon
                  style={{marginRight: 20, marginTop: hp('5.5%')}}
                  icon={faCircleQuestion}
                  size={32}
                  color={'#fff'}
                />
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={styles.card4}>
              <View style={styles.viewcontent}>
                <View style={styles.viewcontrol}>
                  <FontAwesomeIcon
                    style={{top: 25, marginLeft: 20}}
                    icon={fa5}
                    size={30}
                    color={'#fff'}
                  />
                  <Text
                    style={styles.paragraph}
                    onPress={() => navigation.navigate('mhpss')}>
                    MHPSS
                  </Text>
                </View>
                <FontAwesomeIcon
                  style={{marginRight: 20, marginTop: hp('5.5%')}}
                  icon={faBriefcaseMedical}
                  size={32}
                  color={'#fff'}
                />
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Viewcard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  paragraph: {
    top: 45,
    fontSize: 24,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'Lato-Bold',
  },

  Viewcard: {
    alignItems: 'center',
  },
  viewcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewcontrol: {
    flexDirection: 'column',
  },
  card: {
    width: wp('90%'),
    height: hp('17%'),
    borderRadius: 5,
    backgroundColor: '#46bb95',
    marginTop: hp('1.5%'),
  },
  card1: {
    backgroundColor: '#00acca',
    width: wp('90%'),
    height: hp('17%'),
    borderRadius: 5,
    marginTop: hp('1.5%'),
  },
  card2: {
    backgroundColor: '#9054a1',
    width: wp('90%'),
    height: hp('17%'),
    borderRadius: 5,
    marginTop: hp('1.5%'),
  },
  card3: {
    backgroundColor: '#006661',
    width: wp('90%'),
    height: hp('17%'),
    borderRadius: 5,
    marginTop: hp('1.5%'),
  },
  card4: {
    backgroundColor: '#ff6b00',
    width: wp('90%'),
    height: hp('17%'),
    borderRadius: 5,
    marginTop: hp('1.5%'),
    marginBottom: hp('4%'),
  },
});
