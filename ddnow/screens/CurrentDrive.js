import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, PanResponder, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

function CurrentDrive() {
    const navigation = useNavigation();
    const personData = [
        {
            id: 1,
            name: 'Person 1',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            pickupLocation: { lat: 789, long: 987 },
            timeOfRequest: 'some time',
            number: '123-456-7890',
        },
        // Add more person objects here
    ];
    const [expanded, setExpanded] = useState(false);
    const translateY = new Animated.Value(0);
    const screenHeight = Dimensions.get('window').height;

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => {
            return !expanded && gestureState.dy < 0;
        },
        onPanResponderMove: (_, gestureState) => {
            if (gestureState.dy <= 0 && gestureState.dy >= -200) {
                translateY.setValue(gestureState.dy);
            }
        },
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dy <= -100) {
                setExpanded(true);
                Animated.timing(translateY, {
                    toValue: -200,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            } else if (gestureState.dy >= 100 && expanded) {
                setExpanded(false);
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            } else {
                // Return to the initial position
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Animated.View
                style={[
                    styles.driveSymbolContainer,
                    {
                        zIndex: expanded ? 1 : 0,
                        bottom: expanded ? -200 : 0,
                        transform: [{ translateY }],
                    },
                ]}
                {...panResponder.panHandlers}
            >
                <View style={styles.draggableHandle} />
                <FlatList
                    data={personData.slice(0, expanded ? personData.length : 3)}
                    keyExtractor={(item) => item.id.toString()} // Use unique ID as the key
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.queueItem}>
                            <Text style={styles.queueName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </Animated.View>
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
    backButtonText: {
        fontSize: 16,
        color: 'black',
    },
    driveSymbolContainer: {
        position: 'absolute',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        width: 400,
    },
    draggableHandle: {
        width: 40,
        height: 5,
        backgroundColor: 'gray',
        borderRadius: 2.5,
        marginBottom: 10,
    },
    queueItem: {
        backgroundColor: 'gray',
        borderRadius: 20,
        padding: 10,
        marginVertical: 5,
        width: 300,
    },
    queueName: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});

export default CurrentDrive;
