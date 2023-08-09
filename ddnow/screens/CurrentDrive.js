import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

function CurrentDrive() {
    const navigation = useNavigation(); // Get the navigation prop
    const queue = ['Person 1', 'Person 2', 'Person 3']; // This is the queue of people

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
            // Set your initial region here
            />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.driveSymbolContainer}>
                <Ionicons name="car-outline" size={50} color="blue" />
                <FlatList
                    data={queue}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <View style={styles.queueItem}>
                            <Text style={styles.queueName}>{item}</Text>
                            <TouchableOpacity style={styles.pickupButton}>
                                <Text style={styles.pickupButtonText}>Pick Up</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
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
    map: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    driveSymbolContainer: {
        position: 'absolute',
        bottom: 55,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 100,
        paddingVertical: 30,
        borderRadius: 20,
    },
    queueItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    queueName: {
        fontSize: 16,
    },
    pickupButton: {
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 10,
    },
    pickupButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CurrentDrive;
