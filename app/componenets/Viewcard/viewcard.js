import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
import {color} from 'react-native-reanimated';

const Viewcard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Viewcard}>
        <TouchableOpacity>
          <View>
            <Card style={styles.card}>
              <FontAwesomeIcon
                style={{marginLeft: 20, top: 10}}
                icon={faPersonDress}
                size={40}
                color={'#fff'}
              />
<View>
              <FontAwesomeIcon
                style={{top: 30, marginLeft: 20,}}
                icon={fa1}
                size={40}
                color={'#fff'}
              />
</View>
              <Text
                style={styles.paragraph1}
                onPress={() => navigation.navigate('victim')}>
                Victim
              </Text>
            </Card>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Card style={styles.card1}>
              <FontAwesomeIcon
                style={{marginLeft: 20, top: 10}}
                icon={faBuildingColumns}
                size={30}
                color={'#fff'}
              />

              <FontAwesomeIcon
                style={{top: 30, marginLeft: 15}}
                icon={fa2}
                size={40}
                color={'#fff'}
              />
              <Text
                style={styles.paragraph1}
                onPress={() => navigation.navigate('complaints')}>
                Complaints
              </Text>
            </Card>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.Viewcard1}>
        <TouchableOpacity>
          <View>
            <Card style={styles.card2}>
              <FontAwesomeIcon
                style={{marginLeft: 20, top: 10}}
                icon={faFileCircleCheck}
                size={30}
                color={'#fff'}
              />
              <FontAwesomeIcon
                style={{top: 30, marginLeft: 15}}
                icon={fa3}
                size={40}
                color={'#fff'}
              />
              <Text style={styles.paragraph1}  onPress={() => navigation.navigate('legal')}>Legal</Text>
            </Card>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Card style={styles.card3}>
              <FontAwesomeIcon
                style={{marginLeft: 20, top: 10}}
                icon={faCircleQuestion}
                size={30}
                color={'#fff'}
              />
              <FontAwesomeIcon
                style={{top: 30, marginLeft: 15}}
                icon={fa4}
                size={40}
                color={'#fff'}
              />

              <Text
                style={styles.paragraph2}
                onPress={() => navigation.navigate('service')}>
                Reintegration
              </Text>
            </Card>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View
          style={{
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Card style={styles.card4}>
            <FontAwesomeIcon
              style={{marginLeft: 20, top: 10}}
              icon={faBriefcaseMedical}
              size={30}
              color={'#fff'}
            />
            <FontAwesomeIcon
              style={{top: 30, marginLeft: 15}}
              icon={fa5}
              size={40}
              color={'#fff'}
            />

            <Text
              style={styles.paragraph1}
              onPress={() => navigation.navigate('mhpss')}>
              MHPSS
            </Text>
          </Card>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Viewcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  paragraph: {
    fontWeight: 'bold',
    textAlign: 'center',
    top: 25,
    fontSize: 30,
    color: '#fff',
  },
  secondcard: {
    fontWeight: 'bold',
    textAlign: 'center',
    top: 25,
    fontSize: 30,
    color: '#fff',
  },
  paragraph1: {
    top: 50,
    fontSize: 22,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'Lato-Bold',
  },
  paragraph2:{
    top: 50,
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'Lato-Bold',

  },
  Viewcard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Viewcard1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 20,
  },

  card: {
    width: wp('40%'),
    height: hp('20%'),
    borderRadius: 10,
    backgroundColor: '#46bb95',
    bottom:50
  },
  card1: {
    backgroundColor: '#00acca',
    width: wp('40%'),
    height: hp('20%'),
    borderRadius: 10,
    bottom:50

  },
  card2: {
    backgroundColor: '#9054a1',
    width: wp('40%'),
    height: hp('20%'),
    borderRadius: 10,
    bottom:50

  },
  card3: {
    backgroundColor: '#006661',
    width: wp('40%'),
    height: hp('20%'),
    borderRadius: 10,
    bottom:50

  },
  card4: {
    backgroundColor: '#ff6b00',
    width: wp('40%'),
    height: hp('20%'),
    borderRadius: 10,
    textAlign: 'center',
    bottom:50

  },
});
