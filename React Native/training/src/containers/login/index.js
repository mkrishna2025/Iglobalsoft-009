import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class LoginScreen extends React.Component {
    onButtonClick() {
      this.props.navigation.navigate('Home', { userName: 'Karthik' });
    }
    render() {
      return (
        <View>
          <Text> Welcome to Login </Text>
          <Button
            title="Login"
            onPress={this.onButtonClick.bind(this)}
          />
        </View>
      );
    }
  }
