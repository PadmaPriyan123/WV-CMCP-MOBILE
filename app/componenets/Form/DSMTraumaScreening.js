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

const DSMTrauma = () => {
  const [dsmChecked, setDsmChecked] = React.useState('');
  const [dsmChecked2, setDsmChecked2] = React.useState('');
  const [dsmChecked3, setDsmChecked3] = React.useState('');
  const [dsmChecked4, setDsmChecked4] = React.useState('');
  const [dsmChecked5, setDsmChecked5] = React.useState('');
  const [dsmChecked6, setDsmChecked6] = React.useState('');
  const [dsmChecked7, setDsmChecked7] = React.useState('');
  const [dsmChecked8, setDsmChecked8] = React.useState('');
  const [dsmChecked9, setDsmChecked9] = React.useState('');
  const [dsmChecked10, setDsmChecked10] = React.useState('');
  const [dsmChecked11, setDsmChecked11] = React.useState('');
  const [dsmChecked12, setDsmChecked12] = React.useState('');
  const [dsmChecked13, setDsmChecked13] = React.useState('');
  const [dsmChecked14, setDsmChecked14] = React.useState('');
  const [dsmChecked15, setDsmChecked15] = React.useState('');
  const [dsmChecked16, setDsmChecked16] = React.useState('');
  const [dsmChecked17, setDsmChecked17] = React.useState('');
  const [dsmChecked18, setDsmChecked18] = React.useState('');
  const [dsmChecked19, setDsmChecked19] = React.useState('');
  const [dsmChecked20, setDsmChecked20] = React.useState('');
  // const [dsmChecked21, setDsmChecked21] = React.useState('');
  // const [dsmChecked22, setDsmChecked22] = React.useState('');
  // const [dsmChecked23, setDsmChecked23] = React.useState('');
  // const [dsmChecked24, setDsmChecked24] = React.useState('');
  // const [dsmChecked25, setDsmChecked25] = React.useState('');
  // const [dsmChecked26, setDsmChecked26] = React.useState('');
  // const [dsmChecked27, setDsmChecked27] = React.useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.DsmHeader}>
          <Text style={styles.DsmTraumaTitle}>DSM Trauma Screening Tool</Text>
        </View>
        <View style={styles.DsmContainer}>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>1.</Text>
              <Text style={styles.DsmQuestion}>
                Having upsetting thoughts or pictures about it that came into
                your head when you didn't want them to
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>2.</Text>
              <Text style={styles.DsmQuestion}>
                Having bad dreams or nightmares
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked2 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked2('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked2 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked2('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked2 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked2('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked2 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked2('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked2 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked2('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>3.</Text>
              <Text style={styles.DsmQuestion}>
                Acting or feeling as if it was happening again (seeing or
                hearing something and feeling as if you are there again)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked3 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked3('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked3 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked3('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked3 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked3('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked3 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked3('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked3 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked3('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>4.</Text>
              <Text style={styles.DsmQuestion}>
                Feeling upset when you remember what happened (for example,
                feeling scared, angry, sad, guilty, confused)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked4 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked4('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked4 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked4('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked4 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked4('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked4 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked4('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked4 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked4('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>5.</Text>
              <Text style={styles.DsmQuestion}>
                Having feelings in your body when you remember what happened
                (for example, sweating, heart beating fast, stomach or head
                hurting)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked5 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked5('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked5 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked5('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked5 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked5('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked5 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked5('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked5 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked5('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>6.</Text>
              <Text style={styles.DsmQuestion}>
                Trying not to think about it or have feelings about
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked6 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked6('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked6 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked6('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked6 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked6('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked6 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked6('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked6 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked6('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>7.</Text>
              <Text style={styles.DsmQuestion}>
                Trying to stay away from anything that reminds you of what
                happened (for example, people, places, or conversations about
                it)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked7 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked7('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked7 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked7('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked7 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked7('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked7 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked7('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked7 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked7('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>8.</Text>
              <Text style={styles.DsmQuestion}>
                Not being able to remember an important part of what happened
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked8 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked8('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked8 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked8('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked8 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked8('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked8 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked8('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked8 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked8('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>9.</Text>
              <Text style={styles.DsmQuestion}>
                Having bad thoughts about yourself, other people, or the world
                (for example, “I can’t do anything right”, “All people are bad”,
                “The world is a scary place”)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked9 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked9('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked9 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked9('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked9 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked9('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked9 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked9('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked9 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked9('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>10.</Text>
              <Text style={styles.DsmQuestion}>
                Thinking that what happened is your fault (for example, “I
                should have known better”, “I shouldn’t have done that”, “I
                deserved it”)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked10 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked10('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked10 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked10('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked10 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked10('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked10 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked10('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked10 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked10('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>11.</Text>
              <Text style={styles.DsmQuestion}>
                Having strong bad feelings (like fear, anger, guilt, or shame)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked11 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked11('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked11 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked11('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked11 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked11('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked11 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked11('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked11 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked11('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>12.</Text>
              <Text style={styles.DsmQuestion}>
                Having much less interest in doing things you used to do
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked12 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked12('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked12 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked12('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked12 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked12('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked12 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked12('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked12 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked12('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>13.</Text>
              <Text style={styles.DsmQuestion}>
                Not feeling close to your friends or family or not wanting to be
                around them
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked13 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked13('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked13 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked13('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked13 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked13('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked13 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked13('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked13 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked13('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>14.</Text>
              <Text style={styles.DsmQuestion}>
                Trouble having good feelings (like happiness or love) or trouble
                having any feelings at all
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked14 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked14('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked14 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked14('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked14 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked14('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked14 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked14('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked14 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked14('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>15.</Text>
              <Text style={styles.DsmQuestion}>
                Getting angry easily (for example, yelling, hitting others,
                throwing things)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked15 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked15('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked15 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked15('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked15 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked15('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked15 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked15('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked15 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked15('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>16.</Text>
              <Text style={styles.DsmQuestion}>
                Doing things that might hurt yourself (for example, taking
                drugs, drinking alcohol, running away, cutting yourself)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked16 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked16('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked16 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked16('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked16 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked16('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked16 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked16('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked16 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked16('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>17.</Text>
              <Text style={styles.DsmQuestion}>
                Being very careful or on the lookout for danger (for example,
                checking to see who is around you and what is around you)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked17 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked17('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked17 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked17('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked17 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked17('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked17 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked17('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked17 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked17('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>18.</Text>
              <Text style={styles.DsmQuestion}>
                Being jumpy or easily scared (for example, when someone walks up
                behind you, when you hear a loud noise)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked18 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked18('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked18 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked18('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked18 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked18('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked18 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked18('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked18 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked18('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>19.</Text>
              <Text style={styles.DsmQuestion}>
                Having trouble paying attention (for example, losing track of a
                story on TV, forgetting what you read, unable to pay attention
                in class)
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked19 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked19('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked19 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked19('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked19 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked19('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked19 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked19('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked19 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked19('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <View style={styles.Dsmnoques}>
              <Text style={styles.DsmQuestion}>20.</Text>
              <Text style={styles.DsmQuestion}>
                Having trouble falling or staying asleep
              </Text>
            </View>
            <View style={styles.DSMRadioButton}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked20 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked20('first')}
                />
                <Text style={styles.RadioText}>Not at all</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked20 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked20('second')}
                />
                <Text style={styles.RadioText}>
                  Once a week or less/a little
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="third"
                  status={dsmChecked20 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked20('third')}
                />
                <Text style={styles.RadioText}>
                  2 to 3 times a week/somewhat
                </Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fourth"
                  status={dsmChecked20 === 'fourth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked20('fourth')}
                />
                <Text style={styles.RadioText}>4 to 5 times a week/a lot</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="fifth"
                  status={dsmChecked20 === 'fifth' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked20('fifth')}
                />
                <Text style={styles.RadioText}>
                  6 or more times a week/almost always
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.DsmContent}>
            <Text style={styles.DsmQuestion}>
              21. Fun things you want to do
            </Text>
            <View style={styles.DSMRadioButtonYes}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked21 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked21('first')}
                />
                <Text style={styles.RadioTextYes}>Yes</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked21 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked21('second')}
                />
                <Text style={styles.RadioTextYes}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <Text style={styles.DsmQuestion}>22. Doing your chores</Text>
            <View style={styles.DSMRadioButtonYes}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked22 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked22('first')}
                />
                <Text style={styles.RadioTextYes}>Yes</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked22 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked22('second')}
                />
                <Text style={styles.RadioTextYes}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <Text style={styles.DsmQuestion}>
              23. Relationships with your friends
            </Text>
            <View style={styles.DSMRadioButtonYes}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked23 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked23('first')}
                />
                <Text style={styles.RadioTextYes}>Yes</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked23 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked23('second')}
                />
                <Text style={styles.RadioTextYes}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <Text style={styles.DsmQuestion}>24. Praying</Text>
            <View style={styles.DSMRadioButtonYes}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked24 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked24('first')}
                />
                <Text style={styles.RadioTextYes}>Yes</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked24 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked24('second')}
                />
                <Text style={styles.RadioTextYes}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <Text style={styles.DsmQuestion}>25. Schoolwork</Text>
            <View style={styles.DSMRadioButtonYes}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked25 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked25('first')}
                />
                <Text style={styles.RadioTextYes}>Yes</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked25 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked25('second')}
                />
                <Text style={styles.RadioTextYes}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <Text style={styles.DsmQuestion}>
              26. Relationships with your family
            </Text>
            <View style={styles.DSMRadioButtonYes}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked26 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked26('first')}
                />
                <Text style={styles.RadioTextYes}>Yes</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked26 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked26('second')}
                />
                <Text style={styles.RadioTextYes}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.DsmContent}>
            <Text style={styles.DsmQuestion}>
              27. Being happy with your life
            </Text>
            <View style={styles.DSMRadioButtonYes}>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="first"
                  status={dsmChecked27 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked27('first')}
                />
                <Text style={styles.RadioTextYes}>Yes</Text>
              </View>
              <View style={styles.ButtonRadio}>
                <RadioButton
                  uncheckedColor={'gray'}
                  color={'#ff6b00'}
                  value="second"
                  status={dsmChecked27 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setDsmChecked27('second')}
                />
                <Text style={styles.RadioTextYes}>No</Text>
              </View>
            </View>
          </View> */}
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
    flexDirection: 'column',
    marginLeft: 12,
    top: 3,
  },
  DSMRadioButtonYes: {
    marginLeft: 12,
    flexDirection: 'column',
  },
  ButtonRadio: {
    flexDirection: 'row',
  },
  RadioText: {
    color: '#181818',
    alignSelf: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
  RadioTextYes: {
    color: '#181818',
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    alignSelf: 'center',
  },
});
