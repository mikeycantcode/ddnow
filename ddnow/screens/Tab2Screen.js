import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

// Use percentage-based dimensions for better responsiveness
const { width, height } = Dimensions.get('window');

// Constants
const CONTAINER_COLOR = '#1e90ff';
const TEXT_COLOR = '#000';
const ITEM_COLOR = '#FDFDFD';
const SEPARATOR_COLOR = '#eee';

const QueueListItem = ({ name, phoneNumber, timeOfRequest }) => {
    const [waitingTime, setWaitingTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const timeDifference = Math.floor((Date.now() - new Date(timeOfRequest).getTime()) / 1000);
            setWaitingTime(timeDifference);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeOfRequest]);

    return (
        <View style={styles.queueItem}>
            <Text style={styles.queueText}>Name: {name}</Text>
            <Text style={styles.queueText}>Phone Number: {phoneNumber}</Text>
            <Text style={styles.queueText}>Waiting for: {waitingTime} seconds</Text>
        </View>
    );
};

const Tab2Screen = () => {
    // Queue data
    const queue = [
        {
            id: 6,
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            timeOfRequest: '2023-08-12T10:00:00', // Replace with actual timestamp
            number: '123-456-7890',

        },
        {
            id: 1,
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            timeOfRequest: '2023-08-12T10:00:00', // Replace with actual timestamp
            number: '123-456-7890',

        },
        {
            id: 2,
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            timeOfRequest: '2023-08-12T2:30:00', // Replace with actual timestamp
            number: '123-456-7890',

        },
        {
            id: 3,
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            timeOfRequest: '2023-08-12T9:30:00', // Replace with actual timestamp
            number: '123-456-7890',

        },
        {
            id: 4,
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            timeOfRequest: '2023-08-12T8:00:00', // Replace with actual timestamp
            number: '123-456-7890',

        },
        // ...additional data
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={queue}
                renderItem={({ item }) => <QueueListItem {...item} />}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.listContainer}
            />
            {/* Adding the small dark text at the bottom */}
            <Text style={styles.morePeopleText}>More people will get added to the queue as they call in</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: CONTAINER_COLOR,
    },
    listContainer: {
        padding: width * 0.05,
    },
    separator: {
        height: 1,
        backgroundColor: SEPARATOR_COLOR,
        marginVertical: height * 0.01,
    },
    queueItem: {
        padding: width * 0.05,
        backgroundColor: ITEM_COLOR,
        borderRadius: 15,
    },
    queueText: {
        fontSize: 16,
        color: TEXT_COLOR,
        margin: height * 0.005,
    },
    morePeopleText: {
        fontSize: 12,
        color: '#333', // Dark color
        marginVertical: height * 0.01,
    },
});

export default Tab2Screen;
