import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Cards,
  Image,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Persons = [
  {
    id: 1,
    name: 'Create Case',
    text: 'Case is Created',
    attachment: '',
  },
  {
    id: 2,
    name: 'Update Case',
    text: 'Case is Updated',
    attachment: '',
  },
  {
    id: 3,
    name: 'Delete Case',
    text: 'Case is Closed.',
    attachment: '',
  },
  {
    id: 4,
    name: 'Supporting Calls',
    text: 'Supporting Calls',
    attachment: '',
  },
];

const Item = ({data}) => (
  <View style={styles.container}>
    <ScrollView style={styles.NotificationContainer}>
      <View
        style={styles.item}
        id={data.id}
        onPress={() => {
          console.log('does not work');
        }}>
        <Text>{data.name}</Text>
        <Text>{data.text}</Text>
        <Text style={{marginRight: 10}}>
          <FontAwesomeIcon icon={faUsers} size={35} color={'red'} />
        </Text>
      </View>
      {/* <View>
      </View> */}
    </ScrollView>
  </View>
);

const Notification = () => {
  const renderItem = ({item}) => <Item data={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={Persons}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cac4bb',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
  },
  NotificationContainer: {
    // flex: 1,
  },
});

export default Notification;
