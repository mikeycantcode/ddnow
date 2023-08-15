import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ onLogin, onSignUp }) => {
    const handleLogin = () => {
        // Validate credentials here (if necessary)
        onLogin();
    };

    const handleSignUp = () => {
        // Validate credentials here (if necessary)
        onSignUp();
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <Text style={styles.heading}>Authentication</Text>
                <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#ccc" />
                <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#ccc" />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpButton} onPress={onSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.termsLink}>
                <Text style={styles.termsText}>Terms and Conditions</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff', // Blue background color
        paddingHorizontal: 20,
    },
    loginBox: {
        backgroundColor: '#ffffff', // White box background color
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333', // Dark text color
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#f2f2f2', // Light gray input background color
        color: '#333333', // Dark text color
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#007bff', // Blue button background color
        borderRadius: 20,
        paddingVertical: 15,
        alignItems: 'center',
    },
    signUpButton: {
        width: '100%',
        backgroundColor: '#28a745', // Green button background color for sign up
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff', // White button text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    termsLink: {
        marginTop: 10,
    },
    termsText: {
        color: '#ffffff', // White link text color
        fontSize: 12,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
