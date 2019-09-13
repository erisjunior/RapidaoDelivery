import React, { Component } from 'react';
import api from '../services/api';

import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { onSignOut } from "../services/auth";

import Colors from '../config/ColorConfig';

export default class pickUpState extends Component {

    static navigationOptions = {
        //headerTitle: <Text style={{fontFamily:"ralewayBold", color:"#fff", fontSize:20}}>Selecione a cidade</Text>,
        title: 'Selecione o estado',
    }

    state = {
        docs: [],
        page: 1,
        extraInfo: {}
    };

    componentDidMount() {
        this.loadStates();
    }

    loadStates = async (page = 1) => {
        const response = await api.get(`/states?page=${page}`);

        const { docs, ...extraInfo } = response.data;

        this.setState({ 
            docs: [...this.state.docs, ...docs], 
            extraInfo,
            page
        });
    }

    loadMore = () => {
        const { page, extraInfo } = this.state;

        if (page === extraInfo.pages) return;

        const pageNumber = page +1;

        this.loadStates(pageNumber)

    }

    renderItem = ({ item }) => (
        <View style={styles.stateContainer}>
            <TouchableOpacity
                style={styles.stateButton}
                onPress = {() => {}}
            >
                <Text style={styles.stateButtonText}> {item.name} </Text>
                <Text style={{fontFamily: "raleway"}}> {item.uf} </Text>
                <Ionicons name="md-arrow-dropright" color="#ddd" size={20}/>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle = {styles.list}
                    data = { this.state.docs }
                    keyExtractor = { item => item._id }
                    renderItem = { this.renderItem }
                    onEndReached = { this.loadMore }
                    onEndReachedThreshold = {0.1}
                />
                <TouchableOpacity
                    style={styles.exitButton}
                    onPress={() => {
                        onSignOut().then(() => this.props.navigation.navigate("SignedOut"));
                    }}
                >
                    <Text style={styles.exitButtonText}>Sair</Text>
                    <Ionicons name="md-exit" color={Colors.white} size={20}/>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "ralewayBold",
        color: Colors.white
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    stateContainer: {
        padding: 15,
        borderWidth: .5,
        borderColor: "#ddd"
    },
    stateButton: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    stateButtonText: {
        fontSize: 16,
        width:'50%',
        fontFamily: "raleway"
    },

    exitButton: {
        padding: 10,
        backgroundColor: Colors.primary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    exitButtonText: {
        color: Colors.white,
        fontSize: 16,
        marginRight:10,
        fontFamily: "raleway"
    }

})