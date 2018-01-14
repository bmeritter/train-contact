import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import Avatar from "./Avatar";

import { NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { loadContacts, updateCurrentIndex } from "../actions/loadContacts";

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

class PhoneContactList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        PhoneContact.show().then((contacts) => this.props.loadContacts(contacts));
    }

    handleOnPress = (item, index) => {
        this.props.updateCurrentIndex(index)
        Actions.contactDetail({contact: item});
    }

    keyExtractor = (item, index) => index;

    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.contact} onPress={() => this.handleOnPress(item, index)}>
                <Avatar family={item.fullName}/>
                <Text>{item.fullName}</Text>
                <Text>{item.phone}</Text>
            </TouchableOpacity>
        );
    };

    SeparatorComponent() {
        return (<View style={styles.separator}/>)
    }

    render() {
        const contacts = this.props.contacts || [];
        return (
            <View style={styles.container}>
                <FlatList
                    data={contacts}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.SeparatorComponent}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({contacts: state.contacts});

const mapDispatchToProps = (dispatch) => {
    return {
        loadContacts: (contacts) => {
            dispatch(loadContacts(contacts));
        },
        updateCurrentIndex: (index) => {
            dispatch(updateCurrentIndex(index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContactList);