import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
    text: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

class ContactEdit extends Component {

    render() {
        const contacts = this.props.contacts || [];
        const index = this.props.currentIndex || 0;
        return (
            <View>
                <View style={styles.text}>
                    <View>
                        <Text>姓</Text>
                        <TextInput value={contacts[index].fullName}/>
                    </View>
                    <View>
                        <Text>名</Text>
                        <TextInput value={contacts[index].fullName}></TextInput>
                    </View>
                </View>

                <View style={styles.text}>
                    <Text>电话</Text>
                    <Text>{contacts[index].phone}</Text>
                </View>

            </View>
        )
    }
}


const mapStateToProps = state => ({
    contacts: state.contacts,
    currentIndex: state.currentIndex
});

export default connect(mapStateToProps)(ContactEdit);