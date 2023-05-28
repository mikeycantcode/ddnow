import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function Tab2Screen() {
    // Dummy data
    const queue = [
        { name: 'John Doe', phoneNumber: '123-456-7890', location: 'Location 1' },
        { name: 'Jane Doe', phoneNumber: '098-765-4321', location: 'Location 2' },
        { name: 'Jackie Doe', phoneNumber: '098-765-4321', location: 'Location 3' },
        { name: 'Treesh Doe', phoneNumber: '098-765-4321', location: 'Location 4' },
        // Add more dummy data as needed
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.queueContainer}>
                {queue.map((item, index) => (
                    <View key={index} style={styles.queueItem}>
                        <Text style={styles.queueText}>Name: {item.name}</Text>
                        <Text style={styles.queueText}>Phone Number: {item.phoneNumber}</Text>
                        <Text style={styles.queueText}>Location: {item.location}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    queueContainer: {
        backgroundColor: '#F5F5DC', // Beige color
        borderRadius: 15,
        padding: 1,
    },
    queueItem: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 30,
        margin: 10,
        backgroundColor: '#FDFDFD',
        borderRadius: 15, // Rounded corners
    },
    queueText: {
        fontSize: 16,
        margin: 5,
    },
});

export default Tab2Screen;
