import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  faClose,
  faCircleCheck,
  faBell,
  faCheck,
  faTriangleExclamation,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Notification = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.CreateCard}>
          <View style={styles.createContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon icon={faCheck} size={20} color={'#00acca'} />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.CreateName}>New case registered</Text>
              <Text style={styles.NotificationText}>
                New case is registered successfully, details of the case is
                given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>
        <Card style={styles.UpdateCard}>
          <View style={styles.updateContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faCircleInfo}
                size={20}
                color={'#9054a1'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.UpdateName}>Case updated</Text>
              <Text style={styles.NotificationText}>
                Case is updated successfully, details of the case is given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.DeleteCard}>
          <View style={styles.DeleteContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size={20}
                color={'#46bb95'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.DeleteName}>User created</Text>
              <Text style={styles.NotificationText}>
                User is created successfully, details of the user is given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.SupportCallCard}>
          <View style={styles.SupportContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon icon={faCheck} size={20} color={'#00acca'} />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.SupportCallName}>
                Supporting call completed
              </Text>
              <Text style={styles.NotificationText}>
                Supporting call is completed, details of the call is given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.ScheduledCallCard}>
          <View style={styles.ScheduledContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size={20}
                color={'#006661'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.ScheduledCallName}>
                Supporting call scheduled
              </Text>
              <Text style={styles.NotificationText}>
                Supporting call is scheduled, details of the call is given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.ReminderCallCard}>
          <View style={styles.ReminderCallContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon icon={faBell} size={20} color={'#ff6b00'} />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.ReminderCallName}>
                Reminder for supporting call
              </Text>
              <Text style={styles.NotificationText}>
                Dont forget the supporting call, details of the call is given
                below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.CreateCard}>
          <View style={styles.createContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon icon={faCheck} size={20} color={'#00acca'} />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.CreateName}>New case registered</Text>
              <Text style={styles.NotificationText}>
                New case is registered successfully, details of the case is
                given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>
        <Card style={styles.UpdateCard}>
          <View style={styles.updateContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faCircleInfo}
                size={20}
                color={'#9054a1'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.UpdateName}>Case updated</Text>
              <Text style={styles.NotificationText}>
                Case is updated successfully, details of the case is given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.DeleteCard}>
          <View style={styles.DeleteContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size={20}
                color={'#46bb95'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.DeleteName}>User created</Text>
              <Text style={styles.NotificationText}>
                User is created successfully, details of the user is given below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'lightgray'} />
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  NotificationContent: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'Lato-Bold',
    marginLeft: 20,
  },
  CreateName: {
    marginTop: -5,
    fontSize: 19,
    color: '#00acca',
    fontFamily: 'Lato-Black',
  },
  UpdateName: {
    marginTop: -5,
    fontSize: 19,
    color: '#9054a1',
    fontFamily: 'Lato-Black',
  },
  DeleteName: {
    marginTop: -5,
    fontSize: 19,
    color: '#46bb95',
    fontFamily: 'Lato-Black',
  },
  SupportCallName: {
    marginTop: -5,
    fontSize: 19,
    color: '#00acca',
    fontFamily: 'Lato-Black',
  },
  ScheduledCallName: {
    marginTop: -5,
    fontSize: 19,
    color: '#006661',
    fontFamily: 'Lato-Black',
  },
  ReminderCallName: {
    marginTop: -5,
    fontSize: 19,
    color: '#ff6b00',
    fontFamily: 'Lato-Black',
  },
  NotificationText: {
    fontFamily: 'Lato-Regular',
    justifyContent: 'center',
    fontSize: 14,
    color: 'gray',
    marginTop: 7,
    lineHeight: 20,
  },
  NotificationCancel: {
    width: wp('4%'),
    color: 'lightgray',
    marginLeft: 7,
    marginTop: -3,
  },
  createContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  updateContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  DeleteContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  SupportContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  ScheduledContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  ReminderCallContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  styleIcon: {
    marginTop: 5,
    width: wp('5%'),
    marginTop: -2,
  },
  CreateCard: {
    height: hp('13%'),
    width: wp('96%'),
    marginTop: 5,
  },
  UpdateCard: {
    height: hp('13%'),
    width: wp('96%'),
    marginTop: 5,
  },
  DeleteCard: {
    height: hp('13%'),
    width: wp('96%'),
    marginTop: 5,
  },
  SupportCallCard: {
    height: hp('13%'),
    width: wp('96%'),
    marginTop: 5,
  },
  ScheduledCallCard: {
    height: hp('13%'),
    width: wp('96%'),
    marginTop: 5,
  },
  ReminderCallCard: {
    height: hp('13%'),
    width: wp('96%'),
    marginTop: 5,
  },
});
