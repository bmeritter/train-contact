import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import Avatar from "./Avatar";

import { NativeModules } from 'react-native';

const PhoneContact = NativeModules.PhoneContact;

const data = [
    {
        family: 'name',
        name: 'name',
        phone: '1234567890'
    }, {
        family: 'name',
        name: 'name',
        phone: '1234567890'
    }, {
        family: 'name',
        name: 'name',
        phone: '1234567890'
    }, {
        family: 'name',
        name: 'name',
        phone: '1234567890'
    }, {
        family: 'name',
        name: 'name',
        phone: '1234567890'
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'black'
    }
});

export default class PhoneContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        PhoneContact.show().then((contacts) => this.setState({contacts}));
    }

    keyExtractor = (item, index) => index;

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.contact} onPress={() => Actions.contactDetail({contact: item})}>
                <Avatar family={item.family}/>
                <Text>{item.name}</Text>
                <Text>{item.phone}</Text>
            </TouchableOpacity>
        );
    };

    SeparatorComponent() {
        return (<View style={styles.separator}/>)
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.contacts}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.SeparatorComponent}
                />
            </View>
        );
    }
}