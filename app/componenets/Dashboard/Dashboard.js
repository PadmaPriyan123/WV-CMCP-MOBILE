import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import {
  faUsers,
  faSave,
  faFileArrowUp,
  faFileAlt,
  faDatabase,
  faPersonDress,
  faClosedCaptioning,
  faCircleStop,
  faClose,
  faFolderClosed,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import IncidentLogedGraph from '../Graph/IncidentLogedGraph';
import FirFilledGraph from '../Graph/FirFilledGraph';
import IncidentClosedGraph from '../Graph/IncidentClosedGraph';
import UserRegisterGraph from '../Graph/UserRegisterGraph';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

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
            <LinearGradient
              colors={['#00accc', '#00acca']}
              style={Styles.LinearGradient}>
              <Text style={Styles.cardIcon}>
                <FontAwesomeIcon icon={faFileAlt} size={35} color={'#ffffff'} />
              </Text>
              <Text style={Styles.cardCount}>2041</Text>
              <Text style={Styles.cardLabel}>INCIDENT LOGGED</Text>
            </LinearGradient>
          </Card>

          <Card
            style={Styles.cardtwo}
            onPress={() => {
              this.changeGraph('2');
            }}>
            <LinearGradient
              colors={['#9054c1', '#9054a1']}
              style={Styles.LinearGradient}>
              <Text style={Styles.cardIcon}>
                <FontAwesomeIcon
                  icon={faDatabase}
                  size={35}
                  color={'#ffffff'}
                />
              </Text>
              <Text style={Styles.cardCount}>630</Text>
              <Text style={Styles.cardLabel}>FIR FILED</Text>
            </LinearGradient>
          </Card>
        </View>

        <View style={Styles.column}>
          <Card
            style={Styles.cardthree}
            onPress={() => {
              this.changeGraph('3');
            }}>
            <LinearGradient
              colors={['#ff6a01', '#ff6b00']}
              style={Styles.LinearGradient}>
              <Text style={Styles.cardIcon}>
                <FontAwesomeIcon
                  icon={faFolderClosed}
                  size={35}
                  color={'#ffffff'}
                />
              </Text>
              <Text style={Styles.cardCount}>523</Text>
              <Text style={Styles.cardLabel}>INCIDENT CLOSED</Text>
            </LinearGradient>
          </Card>

          <Card
            style={Styles.cardfour}
            onPress={() => {
              this.changeGraph('4');
            }}>
            <LinearGradient
              colors={['#46bb90', '#46bb95']}
              style={Styles.LinearGradient}>
              <Text style={Styles.cardIcon}>
                <FontAwesomeIcon icon={faUsers} size={35} color={'#ffffff'} />
              </Text>
              <Text style={Styles.cardCount}>270</Text>
              <Text style={Styles.cardLabel}>ACTIVE USERS</Text>
            </LinearGradient>
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
    backgroundColor: '#00acca',
    height: hp('19%'),
    width: wp('46%'),
    margin: wp('1%'),
    alignContent: 'center',
    borderRadius: 5,
    marginBottom: 0,
  },
  cardtwo: {
    backgroundColor: '#9054a1',
    height: hp('19%'),
    width: wp('46%'),
    margin: wp('1%'),
    alignContent: 'center',
    borderRadius: 5,
    marginBottom: 0,
  },
  cardthree: {
    backgroundColor: '#ff6b00',
    height: hp('19%'),
    width: wp('46%'),
    margin: wp('1%'),
    alignContent: 'center',
    borderRadius: 5,
  },
  cardfour: {
    backgroundColor: '#46bb95',
    height: hp('19%'),
    width: wp('46%'),
    margin: wp('1%'),
    alignContent: 'center',
    borderRadius: 5,
  },
  cardfive: {
    height: hp('48%'),
    width: wp('94%'),
    margin: wp('2%'),
    marginTop: wp('0%'),
    alignContent: 'center',
    borderRadius: 10,
  },
  DasboardContainer: {
    backgroundColor: '#e0ddd8',
    alignContent: 'center',
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
    flex: 1,
    flexDirection: 'row',
    marginBottom: 0,
    margin: wp('1%'),
  },
  cardIcon: {
    marginTop: 15,
    color: '#fff',
    fontFamily: 'Lato-Black',
    alignSelf: 'center',
  },
  cardCount: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
    marginTop: hp('1%'),
    fontFamily: 'Lato-Black',
    alignSelf: 'center',
  },
  cardLabel: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Lato-Black',
  },
  tag: {
    flex: 1,
    flexDirection: 'row',
  },
  LinearGradient: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
  },
});
