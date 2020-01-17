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
  StyleSheet
} from 'react-native';

type Props = {};

export default class Page2 extends Component<Props> {
    render() {
        return (
            <View style={styles.container2}>
                <Text> welcome to Page2 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container2: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    }
});
