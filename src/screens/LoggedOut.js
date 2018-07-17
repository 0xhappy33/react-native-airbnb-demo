import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Image, StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut extends Component {

  onFacebookPress() {
    alert('Facebook buttons pressed');
  }

  onCreateAccount() {
    alert('Create account pressed');
  }

  onMoreOptionPress() {
    alert('More option pressed');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require('../img/airbnb.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
          <RoundedButton
            text="Continue with facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccount}
          />

          <TouchableHighlight
            style={styles.moreOptionButton}
            onPress={this.onMoreOptionPress}
          >
            <Text style={styles.moreOptionText}>More option</Text>
          </TouchableHighlight>

          <View style={styles.termAndCondition}>
            <Text style={styles.termText}>By tapping Continue, Create Account or More option,</Text>
            <Text style={styles.termText}>I agree to Airbnb Term of services,
            Payments Term of services, Privacy policy, Guest Refund Policy,
             and Host Guarantee Terms
             </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8
  },
  moreOptionButton: {
    marginTop: 15,
  },
  moreOptionText: {
    color: colors.white,
    fontSize: 16,
  },
  termAndCondition: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 20
  },
  termText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  }
});
