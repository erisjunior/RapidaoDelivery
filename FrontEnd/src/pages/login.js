import React, { Component } from 'react';

import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { _testFacebookLogin } from '../services/faceAuth';
import { _testGoogleLogin } from '../services/googleAuth';

import Colors from '../config/ColorConfig';

export default class Login extends Component {

    static navigationOptions = {
        header: null
    }
    
    render() {

        return (
            <View style={styles.container}>

                <View style={styles.viewTop}>

                    <Image
                        style={styles.logoImage}
                        source={require('../../assets/img/cart.png')}
                    />
                    <Text style={styles.logoText}>
                        RAPIDÃO DELIVERY
                    </Text>
                    <Text style={styles.logoSlogan}>
                        Suas compras a qualquer momento
                    </Text>

                </View>

                <View style={styles.viewBottom}>

                    <TouchableOpacity 
                        style={[styles.redeSocialButton, styles.faceButton]} 
                        onPress={() => _testFacebookLogin(this.props.navigation)}
                    >
                        <Image
                            style={styles.redeSocialButtonImage}
                            source={require('../../assets/img/face.png')}
                        />
                        <Text style={styles.redeSocialButtonText}>
                            Entrar com o Facebook
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.redeSocialButton, styles.gmailButton]} 
                        onPress={() => _testGoogleLogin(this.props.navigation)}
                    >
                        <Image
                            style={styles.redeSocialButtonImage}
                            source={require('../../assets/img/gmail.png')}
                        />
                        <Text style={styles.redeSocialButtonText}>
                            Entrar com o Gmail
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.copyright}>
                        © 2018 Rapidão Delivery
                    </Text>

                </View>
                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    viewTop: {
        backgroundColor: Colors.primary,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop:20
    },

    logoImage: {
        width:"30%",
        height:"30%"
    },

    logoText:{
        width:"70%",
        height:"40%",
        textAlign: "center",
        fontSize: 50,
        color: Colors.white,
        fontFamily: "ralewayBold"
    },

    logoSlogan: {
        width:"50%",
        height:"20%",
        textAlign: "center",
        fontSize: 15,
        color: Colors.white,
        fontFamily: "raleway"
    },

    viewBottom: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    redeSocialButton: {
        height: "20%",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 20,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    redeSocialButtonImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },

    redeSocialButtonText: {
        fontSize: 20,
        marginRight: 30,
        color: Colors.white,
        fontFamily: "ralewayBold"
    },

    faceButton:{backgroundColor: Colors.facebook},
    gmailButton:{backgroundColor: Colors.primary},

    copyright: {
        fontSize: 15,
        fontFamily: "ralewayBold"
    }
})