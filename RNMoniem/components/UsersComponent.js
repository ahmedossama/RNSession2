import React, { Component } from 'react'

import { View, Text, Button } from 'react-native'
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';


export default class UsersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState({ users: response.data })

        })
    }


    render() {
        return (
            <View>
                <Text>users component</Text>
                {this.state.users.length > 0 ?
                    this.state.users.map((user, index) => {
                        return (<View key={index}><Text style={{ fontSize: 17, color: "red" }}>{user.email}</Text></View>)
                    }) :  <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
                }


            </View>

        )
    }
}