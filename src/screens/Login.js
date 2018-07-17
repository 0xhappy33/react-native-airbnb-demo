import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvodingView
} from 'react-native';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvodingView style={styles.wrapper}>
        <View>
          <ScrollView>
            <Text>Login</Text>
          </ScrollView>
        </View>
      </KeyboardAvodingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {

  }
});
