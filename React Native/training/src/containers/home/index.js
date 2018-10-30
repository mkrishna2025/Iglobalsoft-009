import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Icon } from 'native-base';

export default class HomeScreen extends React.Component {
    render() {
        var params = this.props.navigation.state.params;
        return (
            <View>
                <Text> Welcome to Home, {params.userName} </Text>
                <Button
                    title="Movies"
                    onPress={() => this.props.navigation.navigate('Movies')}
                />
                <Button
                    title="Location"
                    onPress={() => this.props.navigation.navigate('Location')}
                />

                <Button
                    title="Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Icon type="FontAwesome" name="sign-out" style={{ fontSize: 20 }} onPress={() =>
                    this.props.navigation.navigate('Login')
                } />
            </View>
        );
    }
}