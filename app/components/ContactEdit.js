import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";
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

export default class ContactEdit extends Component {

    render() {
        console.log('=========',this.props)
        // const contact = this.props.contact;
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    {/*<Avatar family={'werwe'}/>*/}
                    <View>
                        <Text>姓</Text>
                        <TextInput value={'skfsdffff'} />
                    </View>
                    <View>
                        <Text>名</Text>
                        <TextInput></TextInput>
                    </View>
                </View>

                <View style={styles.text}>
                    <Text>电话</Text>
                    <Text>{'erwe'}</Text>
                </View>

            </View>
        )
    }
}