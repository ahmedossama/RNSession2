/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Button
} from 'react-native';

import UsersComponent from './UsersComponent'
export default class ParentComponent extends Component {
    render() {

        const {navigate} = this.props.navigation;


        return (

            <View>
                <Button style={{ borderRadius: 15, width: 100 }} title="click moniem" onPress={() => {
                  navigate('UsersComponent')
                }} />
               
            </View>

        );
    }
}

const styles = StyleSheet.create({
    moniemStyle: { fontSize: 20, fontWeight: "bold", color: "green" },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
