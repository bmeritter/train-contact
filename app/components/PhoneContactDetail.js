import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';
import Avatar from "./Avatar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    }
});

export default class PhoneContactDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Actions.refresh({onRight: this.onRightPressed});
    }

    onRightPressed() {
        Actions.contactEidt();
    }

    render() {
        const contact = this.props.contact ;
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Avatar family={contact.fullName}/>
                    <View>
                        <Text>姓</Text>
                        <Text>{contact.fullName}</Text>
                    </View>
                    <View>
                        <Text>名</Text>
                        <Text>{contact.fullName}</Text>
                    </View>
                </View>

                <View style={styles.text}>
                    <Text>电话</Text>
                    <Text>{contact.phone}</Text>
                </View>

            </View>
        )
    }
}