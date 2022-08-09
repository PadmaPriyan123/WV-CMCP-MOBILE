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

const Item = ({name}) => (
  <View style={styles.container}>
    {Persons.map(Person => {
      return (
        <ScrollView>
          <View>
            <Text style={styles.item}>{Person.name}</Text>
          </View>
          <View>
            <Text style={styles.text}>{Person.text}</Text>
          </View>
        </ScrollView>
      );
    })}
  </View>
);

const Notification = () => {
  const renderItem = ({item}) => <Item title={`${item.name} ${item.text}`} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Persons}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
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
  },
  title: {
    fontSize: 32,
  },
});

export default Notification;
