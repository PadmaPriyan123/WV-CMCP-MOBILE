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
} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope,faClose} from '@fortawesome/free-solid-svg-icons';
import IncidentLogedGraph from '../Graph/IncidentLogedGraph';
import FirFilledGraph from '../Graph/FirFilledGraph';
import IncidentClosedGraph from '../Graph/IncidentClosedGraph';
import UserRegisterGraph from '../Graph/UserRegisterGraph';

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
    alignContent: 'center',
    margin: 5,
    width: 160,
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
    height: 130,
  },

  cardtwo: {
    alignContent: 'center',
    margin: 5,
    width: 160,
    backgroundColor: '#cac4bb',
    borderRadius: 5,
    height: 130,
  },
  cardthree: {
    alignContent: 'center',
    margin: 5,
    marginTop: 0,
    width: 160,
    backgroundColor: '#FDB777',
    borderRadius: 5,
    height: 130,
  },
  cardfour: {
    alignContent: 'center',
    margin: 5,
    marginTop: 0,
    width: 160,
    backgroundColor: '#7CFFCB',
    borderRadius: 5,
    height: 130,
  },
  cardfive: {
    alignContent: 'center',
    marginTop: 0,
    borderRadius: 5,
    height: 300,
    margin: 10,
  },
  column: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 0,
  },

  columntwo: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  title: {
    color: '#fff',
    fontFamily: 'Lato_900Black_Italic',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  DashboardContainer: {
    fontFamily: 'Montserrat-SemiBold',
    // fontSize: 90,
    // fontWeight: 'bold'
  },
});
