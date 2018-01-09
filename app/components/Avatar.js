import React, { Component } from 'react';
import { Image, View, StyleSheet, Text } from "react-native";

import round from '../image/round.png';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg: {
        flexShrink: 1,
        aspectRatio: 1,
        position: 'relative'
    },
    text: {
        position: 'absolute',
        backgroundColor: 'transparent',
        color: '#fff'
    }
});

export default class Avatar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={round}
                    style={styles.bg}
                />
                <Text style={styles.text}>{this.props.family}</Text>
            </View>
        )
    }
}