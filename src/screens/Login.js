import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAdress: '',
      validPassword: false
    };
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
    if (this.state.emailAddress === 'hatv.3011@gmail.com' && this.state.validPassword) {
      alert('Success');
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }

  handleEmailChange(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAdress: email });

    if (!this.state.validEmail) {
      if (emailRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else if (!emailRegex.test(email)) {
        this.setState({ validEmail: false });
      }
  }

  handlePasswordChange(password) {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        this.setState({ validPassword: true });
      }
    } else if (password.length <= 4) {
      this.setState({ validPassword: false });
    }
  }

  toggleNextButtonState() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
    const { formValid } = this.state;
    const showNotification = !formValid;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handleEmailChange}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
              disabled={this.toggleNextButtonState()}
            />
          </View>
          <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
            <Notification
              showNotification
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials don't look right."
              secondLine="Please try again."
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 30,
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0
  }
});
