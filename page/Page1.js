/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

type Props = {};

export default class Page1 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text> welcome to Page1 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    }
});
