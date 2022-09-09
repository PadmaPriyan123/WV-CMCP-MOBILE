import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DSMTrauma = props => {
  const question = props.question;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.DsmHeader}>
          <Text style={styles.DsmTraumaTitle}>DSM Trauma Screening Tool</Text>
        </View>
        <View style={styles.DsmContainer}>
          {question &&
            question.length > 0 &&
            question.map((data, i) => {
              return (
                <View style={styles.DsmContent}>
                  <View style={styles.Dsmnoques}>
                    <Text style={styles.DsmQuestion}>{data.QuestionID}</Text>
                    <Text style={styles.DsmQuestion}>{
                      data.Question
                    }
                    </Text>
                  </View>
                  <View style={styles.DSMRadioButton}>
                    <View style={styles.ButtonRadio}>
                      <RadioButton
                        uncheckedColor={'gray'}
                        color={'#ff6b00'}
                        value="yes"
                        status={
                          data.Answer === 'yes' ? 'checked' : 'unchecked'
                        }
                        onPress={(e) => props.change(i,'yes')}
                      />
                      <Text style={styles.RadioText}>Yes</Text>
                    </View>
                    <View style={styles.ButtonRadio}>
                      <RadioButton
                        uncheckedColor={'gray'}
                        color={'#ff6b00'}
                        value="no"
                        status={
                          data.Answer === 'no' ? 'checked' : 'unchecked'
                        }
                        onPress={() => props.change(i,"no")}
                      />
                      <Text style={styles.RadioText}>No</Text>
                    </View>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DSMTrauma;

const styles = StyleSheet.create({
  DsmHeader: {
    marginLeft: 2,
    marginTop: 20,
    height: 40,
    alignItems: 'center',
  },
  DsmTraumaTitle: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  DsmContainer: {
    padding: 5,
  },
  DsmContent: {
    marginLeft: 10,
    width: wp('86%'),
  },
  Dsmnoques: {
    flexDirection: 'row',
  },
  DsmQuestion: {
    color: '#000',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    lineHeight: 23,
    alignSelf: 'flex-start',
    marginLeft: 2,
    marginTop: 15,
  },
  DSMRadioButton: {
    flexDirection: 'row',
    marginLeft: 12,
    top: 3,
  },
  ButtonRadio: {
    flexDirection: 'row',
    marginRight: 10,
  },
  RadioText: {
    color: '#181818',
    alignSelf: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
});
