import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText='Sign in to Your Account'
                errorMessage=''
                onsubmit={() => {}}
                submitButtonText='Sign In'
            />
            <NavLink 
                text='No account? Signup instead!'
                routeName='Signup'
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;