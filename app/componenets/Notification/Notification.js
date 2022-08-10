import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  faClose,
  faFileAlt,
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
              <FontAwesomeIcon icon={faCheck} size={22} color={'#00acca'} />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.CreateName}>New Case Registered</Text>
              <Text style={styles.NotificationText}>
                New Case is Registered Successfully, Details of the Case is
                Given Below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'gray'} />
            </Text>
          </View>
        </Card>
        <Card style={styles.UpdateCard}>
          <View style={styles.updateContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faCircleInfo}
                size={22}
                color={'#9054a1'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.UpdateName}>Case Updated</Text>
              <Text style={styles.NotificationText}>
                Case is Updated Successfully, Details of the Case is Given Below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'gray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.DeleteCard}>
          <View style={styles.DeleteContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size={22}
                color={'#46bb95'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.DeleteName}>User Created</Text>
              <Text style={styles.NotificationText}>
                User is Created Successfully, Details of the User is Given Below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'gray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.SupportCallCard}>
          <View style={styles.SupportContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon icon={faCheck} size={22} color={'#00acca'} />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.SupportCallName}>
                Supporting Call Completed
              </Text>
              <Text style={styles.NotificationText}>
                Supporting Call is Completed, Details of the Call is Given Below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'gray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.ScheduledCallCard}>
          <View style={styles.ScheduledContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size={22}
                color={'#006661'}
              />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.ScheduledCallName}>
                Supporting Call Scheduled
              </Text>
              <Text style={styles.NotificationText}>
                Supporting Call is Scheduled, Details of the Call is Given Below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'gray'} />
            </Text>
          </View>
        </Card>

        <Card style={styles.ReminderCallCard}>
          <View style={styles.ReminderCallContainer}>
            <Text style={styles.styleIcon}>
              <FontAwesomeIcon icon={faBell} size={22} color={'#ff6b00'} />
            </Text>
            <View style={styles.NotificationContent}>
              <Text style={styles.ReminderCallName}>
                Reminder for Supporting Call
              </Text>
              <Text style={styles.NotificationText}>
                Dont Forget the Supporting Call, Details of the Call is Given
                Below
              </Text>
            </View>
            <Text
              style={styles.NotificationCancel}
              onPress={() => {
                console.log('Working Fine');
              }}>
              <FontAwesomeIcon icon={faClose} size={20} color={'gray'} />
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
    fontSize: 20,
    color: '#00acca',
    fontFamily: 'Lato-Black',
  },
  UpdateName: {
    marginTop: -5,
    fontSize: 20,
    color: '#9054a1',
    fontFamily: 'Lato-Black',
  },
  DeleteName: {
    marginTop: -5,
    fontSize: 20,
    color: '#46bb95',
    fontFamily: 'Lato-Black',
  },
  SupportCallName: {
    marginTop: -5,
    fontSize: 20,
    color: '#00acca',
    fontFamily: 'Lato-Black',
  },
  ScheduledCallName: {
    marginTop: -5,
    fontSize: 20,
    color: '#006661',
    fontFamily: 'Lato-Black',
  },
  ReminderCallName: {
    marginTop: -5,
    fontSize: 20,
    color: '#ff6b00',
    fontFamily: 'Lato-Black',
  },
  NotificationText: {
    fontFamily: 'Lato-Regular',
    justifyContent: 'center',
    fontSize: 14,
    color: 'gray',
    marginTop: 7,
  },
  NotificationCancel: {
    width: wp('4%'),
    color: 'gray',
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
    height: hp('14%'),
    width: wp('96%'),
    marginTop: 5,
  },
  UpdateCard: {
    height: hp('14%'),
    width: wp('96%'),
    marginTop: 5,
  },
  DeleteCard: {
    height: hp('14%'),
    width: wp('96%'),
    marginTop: 5,
  },
  SupportCallCard: {
    height: hp('14%'),
    width: wp('96%'),
    marginTop: 5,
  },
  ScheduledCallCard: {
    height: hp('14%'),
    width: wp('96%'),
    marginTop: 5,
  },
  ReminderCallCard: {
    height: hp('14%'),
    width: wp('96%'),
    marginTop: 5,
    marginBottom: 5,
  },
});
