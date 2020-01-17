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

export default class HomePage extends Component<Props> {
    render() {
      const {navigation} = this.props;
        return (
            <View style={styles.container3}>
                <Text> welcome to HomePage </Text>
                <Button title={'Go to Page1'} onPress={ () => {
                      navigation.navigate('Page1', {name: '动态的'})
                  }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container3: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    }
});
