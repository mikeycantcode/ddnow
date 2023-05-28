import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TextInput, StyleSheet, Button, Keyboard } from 'react-native';

function Tab3Screen() {
    const [orgCodePart1, setOrgCodePart1] = useState('');
    const [orgCodePart2, setOrgCodePart2] = useState('');

    const handleInputChange = (setter) => (text) => {
        setter(text);
        if (text.length === 3) {
            Keyboard.dismiss();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.boxTitle}>Driver Info</Text>
                <View style={styles.profileHeader}>
                    <Image source={{ uri: "image_url" }} style={styles.profilePic} />
                    <Text style={styles.profileName}>John Doe</Text>
                    <Text style={styles.profileRating}>★★★★☆</Text>
                </View>
                <View style={styles.profileDetails}>
                    <Text style={styles.text}>Vehicle: Toyota Prius</Text>
                    <Text style={styles.text}>Rides: 1,234</Text>
                    <Text style={styles.text}>Experience: 2 years</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.boxTitle}>Organization Info</Text>
                <View style={styles.organizationSection}>
                    <Text style={styles.sectionTitle}>Organization</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            maxLength={3}
                            keyboardType="numeric"
                            value={orgCodePart1}
                            onChangeText={handleInputChange(setOrgCodePart1)}
                        />
                        <Text style={styles.dash}>-</Text>
                        <TextInput
                            style={styles.input}
                            maxLength={3}
                            keyboardType="numeric"
                            value={orgCodePart2}
                            onChangeText={handleInputChange(setOrgCodePart2)}
                        />
                    </View>
                </View>
                <Button title="Enter" onPress={() => { /* Handle the button press here */ }} />
            </View>
        </View>
    );
}

// Only the changed styles are shown here:

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        padding: 20,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        color: '#555',
    },
    profileRating: {
        fontSize: 20,
        color: '#888',
        marginTop: 5,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#777',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#555',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    input: {
        width: 50,
        textAlign: 'center',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        color: '#555',
    },
    dash: {
        marginHorizontal: 5,
        fontSize: 18,
        color: '#555',
    },
    box: {
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    boxTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        color: '#555',
    },
});


export default Tab3Screen;
