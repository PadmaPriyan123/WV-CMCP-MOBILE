import React from "react";
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IncidentLogedGraph from "../Graph/IncidentLogedGraph";
import FirFilledGraph from "../Graph/FirFilledGraph";
import IncidentClosedGraph from "../Graph/IncidentClosedGraph";
import UserRegisterGraph from "../Graph/UserRegisterGraph";

import {
    useFonts as useLato,
    Lato_400Regular_Italic,
    Lato_900Black_Italic,
  } from "@expo-google-fonts/lato";


class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card1: 1,
            card2: 0,
            card3: 0,
            card4: 0
        }
    }

    changeGraph = (type) => {
        console.log(type);
        this.setState({
            card1: 0,
            card2: 0,
            card3: 0,
            card4: 0
        });

        if (type == 1) {
            this.setState({ card1: 1 });
        } else if (type == 2) {
            this.setState({ card2: 1 });
        } else if (type == 3) {
            this.setState({ card3: 1 });
        } else if (type == 4) {
            this.setState({ card4: 1 });
        }
        else {
            this.setState('0');
        }
    };

    render() {
        return (
            <View style= {Styles.DashboardContainer}>
                <ScrollView >
                    <View style={Styles.column}>
                        <Card style={Styles.cardone} onPress={() => { this.changeGraph('1') }}>
                            <Card.Content >
                                <Title style={Styles.title}>103</Title>
                            </Card.Content>
                            <Card.Content>
                                <View>
                                  
                                <Title style={Styles.title}>Incident Loged
                                
                                    <FontAwesomeIcon   icon={faTag}
                                        size={20}
                                        color={'#fff'}
                                    />
                                    
                                </Title>
                                </View>
                            </Card.Content>
                        </Card>
                        <Card style={Styles.cardtwo} onPress={() => { this.changeGraph('2') }}>
                            <Card.Content>
                                <Title style={Styles.title}>230</Title>
                            </Card.Content>
                            <Card.Content>
                                <Title style={Styles.title}>FIR Filled
                                    <FontAwesomeIcon icon={faPhone}
                                        size={20}
                                        color={'#fff'}
                                    />
                                </Title>
                            </Card.Content>

                        </Card>
                    </View>
                    <View style={Styles.column}>
                        <Card style={Styles.cardthree} onPress={() => { this.changeGraph('3') }}>
                            <Card.Content>
                                <Title style={Styles.title}>323</Title>
                            </Card.Content>
                            <Card.Content>
                                <Title style={Styles.title}>Incident Closed
                                    <FontAwesomeIcon icon={faBell}
                                        size={20}
                                        color={'#fff'}
                                    />
                                </Title>
                            </Card.Content>

                        </Card>

                        <Card style={Styles.cardfour} onPress={() => { this.changeGraph('4') }}>
                            <Card.Content>
                                <Title style={Styles.title}>870</Title>
                            </Card.Content>
                            <Card.Content>
                                <Title style={Styles.title}>User Registered
                                    <FontAwesomeIcon icon={faEnvelope}
                                        size={20}
                                        color={'#fff'}
                                    />
                                </Title>
                            </Card.Content>

                        </Card>

                    </View>
                    <View style={Styles.columntwo}>

                        <Card style={Styles.cardfive}>

                            <Card.Content style={{ display: this.state.card1 == 1 ? 'flex' : 'none' }}>
                                <IncidentLogedGraph>
                                </IncidentLogedGraph>
                            </Card.Content>

                            <Card.Content style={{ display: this.state.card2 == 1 ? 'flex' : 'none' }}>
                                <FirFilledGraph>
                                </FirFilledGraph>
                            </Card.Content>

                            <Card.Content style={{ display: this.state.card3 == 1 ? 'flex' : 'none' }}>
                                <IncidentClosedGraph>
                                </IncidentClosedGraph>
                            </Card.Content>

                            <Card.Content style={{ display: this.state.card4 == 1 ? 'flex' : 'none' }}>
                                <UserRegisterGraph>
                                </UserRegisterGraph>
                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView >
            </View>
        )
    }
}
export default CreateCard;

const Styles = StyleSheet.create({
    cardone: {
        alignContent: 'center',
        margin: 5,
        width: 160,
        backgroundColor: '#00acca',
        borderRadius: 10,
        height: 120,
    },

    cardtwo: {
        alignContent: 'center',
        margin: 5,
        width: 160,
        backgroundColor: '#9054a1',
        borderRadius: 10,
        height: 120,
    },
    cardthree: {
        alignContent: 'center',
        margin: 5,
        marginTop: 0,
        width: 160,
        backgroundColor: '#ff6b00',
        borderRadius: 10,
        height: 120,
    },
    cardfour: {
        alignContent: 'center',
        margin: 5,
        marginTop: 0,
        width: 160,
        backgroundColor: '#46bb95',
        borderRadius: 10,
        height: 120,
    },
    cardfive: {
        alignContent: 'center',
        margin: 10,
        marginTop: 0,
        borderRadius: 10,
        height: 300,
        backgroundColor: '#cac4bb',
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
        fontFamily: `${Lato_900Black_Italic}`,
        fontFamily: 'Lato_900Black_Italic',
        fontWeight: 'bold',
        alignItems: 'center',
        
    },
    DashboardContainer: {
        fontFamily: 'Montserrat-SemiBold',
        // fontSize: 90,
        // fontWeight: 'bold'
    }

})
