import React from 'react';
import {
  Text,
  View,
  Image,
  Ionicons,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Alert,
  Dimensions,
} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import IncidentLogedGraph from '../Graph/IncidentLogedGraph';
import FirFilledGraph from '../Graph/FirFilledGraph';
import IncidentClosedGraph from '../Graph/IncidentClosedGraph';
import UserRegisterGraph from '../Graph/UserRegisterGraph';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card1: 1,
      card2: 0,
      card3: 0,
      card4: 0,
    };
  }

  changeGraph = type => {
    console.log(type);
    this.setState({
      card1: 0,
      card2: 0,
      card3: 0,
      card4: 0,
    });

    if (type == 1) {
      this.setState({card1: 1});
    } else if (type == 2) {
      this.setState({card2: 1});
    } else if (type == 3) {
      this.setState({card3: 1});
    } else if (type == 4) {
      this.setState({card4: 1});
    } else {
      this.setState('0');
    }
  };

  render() {
    return (
      <ScrollView style={Styles.DasboardContainer}>
        <View style={Styles.column}>
          <Card
            style={Styles.cardone}
            onPress={() => {
              this.changeGraph('1');
            }}>
            <View style={Styles.tag}>
              <Text style={Styles.title}>
                <FontAwesomeIcon
                  icon={faTag}
                  size={25}
                  style={{marginTop: -5}}
                  color={'#fff'}
                />
              </Text>
              <Text style={Styles.title1}>2041</Text>
            </View>
            <View>
              <Text style={Styles.title2}>INCIDENT LOGED</Text>
            </View>
          </Card>

          <Card
            style={Styles.cardtwo}
            onPress={() => {
              this.changeGraph('2');
            }}>
            <View style={Styles.tag}>
              <Text style={Styles.title}>
                <FontAwesomeIcon icon={faPhone} size={25} color={'#fff'} />
              </Text>
              <Text style={Styles.title1}>630</Text>
            </View>
            <View>
              <Text style={Styles.title2}>FIR FILLED</Text>
            </View>
          </Card>
        </View>

        <View style={Styles.column}>
          <Card
            style={Styles.cardthree}
            onPress={() => {
              this.changeGraph('3');
            }}>
            <View style={Styles.tag}>
              <Text style={Styles.title}>
                <FontAwesomeIcon icon={faClose} size={25} color={'#fff'} />
              </Text>
              <Text style={Styles.title1}>523</Text>
            </View>
            <View>
              <Text style={Styles.title2}>AFFECTED VICTIMS</Text>
            </View>
          </Card>

          <Card
            style={Styles.cardfour}
            onPress={() => {
              this.changeGraph('4');
            }}>
            <View style={Styles.tag}>
              <Text style={Styles.title}>
                <FontAwesomeIcon icon={faEnvelope} size={25} color={'#fff'} />
              </Text>
              <Text style={Styles.title1}>270</Text>
            </View>
            <View>
              <Text style={Styles.title2}>ACTIVE USERS</Text>
            </View>
          </Card>
        </View>

        <View style={Styles.columntwo}>
          <Card style={Styles.cardfive}>
            <Card.Content
              style={{display: this.state.card1 == 1 ? 'flex' : 'none'}}>
              <IncidentLogedGraph />
            </Card.Content>

            <Card.Content
              style={{display: this.state.card2 == 1 ? 'flex' : 'none'}}>
              <FirFilledGraph />
            </Card.Content>

            <Card.Content
              style={{display: this.state.card3 == 1 ? 'flex' : 'none'}}>
              <IncidentClosedGraph />
            </Card.Content>

            <Card.Content
              style={{display: this.state.card4 == 1 ? 'flex' : 'none'}}>
              <UserRegisterGraph />
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
export default CreateCard;

const Styles = StyleSheet.create({
  cardone: {
    height: hp('18%'),
    width: wp('46%'),
    margin: wp('1%'),
    alignContent: 'center',
    backgroundColor: '#00acca',
    borderRadius: 5,
  },

  cardtwo: {
    height: hp('18%'),
    width: wp('46%'),
    margin: wp('1%'),
    alignContent: 'center',
    backgroundColor: '#9054a1',
    borderRadius: 5,
  },
  cardthree: {
    height: hp('18%'),
    width: wp('46%'),
    margin: wp('1%'),
    marginTop: wp('0%'),
    alignContent: 'center',
    backgroundColor: '#ff6b00',
    borderRadius: 5,
  },
  cardfour: {
    height: hp('18%'),
    width: wp('46%'),
    margin: wp('1%'),
    marginTop: wp('0%'),
    alignContent: 'center',
    backgroundColor: '#46bb95',
    borderRadius: 5,
  },
  cardfive: {
    height: hp('50%'),
    width: wp('94%'),
    margin: wp('2%'),
    marginTop: wp('0%'),
    alignContent: 'center',
    borderRadius: 5,
  },
  DasboardContainer: {
    backgroundColor: '#e4dede',
  },
  column: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: wp('1%'),
    flex: 1,
    flexDirection: 'row',
    marginBottom: 0,
  },
  columntwo: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: wp('1%'),
  },
  title: {
    width: wp('18%'),
    padding: 15,
    alignSelf: 'center',
  },
  title1: {
    color: '#fff',
    fontSize: 35,
    width: wp('25%'),
    fontFamily: 'Lato-Black',
    alignSelf: 'center',
  },
  title2: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
    fontFamily: 'Lato-Black',
    alignSelf: 'center',
  },
  tag: {
    flex: 1,
    flexDirection: 'row',
  },
});
