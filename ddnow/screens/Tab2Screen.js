import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

// Use percentage-based dimensions for better responsiveness
const { width, height } = Dimensions.get('window');

// Constants
const CONTAINER_COLOR = '#D5DCEE';
const TEXT_COLOR = '#000';
const ITEM_COLOR = '#FDFDFD';
const SEPARATOR_COLOR = '#bbb';

const QueueListItem = ({ name, phoneNumber, location }) => (
    <View style={styles.queueItem}>
        <Text style={styles.queueText}>Name: {name}</Text>
        <Text style={styles.queueText}>Phone Number: {phoneNumber}</Text>
        <Text style={styles.queueText}>Location: {location}</Text>
    </View>
);

const Tab2Screen = () => {
    // Queue data
    const queue = [
        { name: 'John Doe', phoneNumber: '123-456-7890', location: 'Location 1' },
        { name: 'Jane Doe', phoneNumber: '098-765-4321', location: 'Location 2' },
        { name: 'Jacky Doe', phoneNumber: '143-456-7890', location: 'Location 1' },
        { name: 'Treesh Doe', phoneNumber: '923-765-4321', location: 'Location 2' },
        // ...additional data
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={queue}
                renderItem={({ item }) => <QueueListItem {...item} />}
                keyExtractor={(item) => item.phoneNumber}
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
