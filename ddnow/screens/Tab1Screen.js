import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, PanResponder, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

function Tab1Screen() {
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
        {
            id: 3,
            name: 'Person 1',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            pickupLocation: { lat: 789, long: 987 },
            timeOfRequest: 'some time',
            number: '123-456-7890',
        },
        {
            id: 4,
            name: 'Person 1',
            coord: { lat: 123, long: 456 },
            partySize: 3,
            pickupLocation: { lat: 789, long: 987 },
            timeOfRequest: 'some time',
            number: '123-456-7890',
        },
        {
            id: 9,
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
    const translateY = new Animated.Value(expanded ? 0 : 400);
    const translateYInterpolation = translateY.interpolate({
        inputRange: [0, 400],
        outputRange: [0, 400],
        extrapolate: 'clamp',
    });

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => {
            return Math.abs(gestureState.dy) > 5;
        },
        onPanResponderMove: (_, gestureState) => {
            if (gestureState.dy <= 0 && gestureState.dy >= 400) {
                translateY.setValue(gestureState.dy);
            }
        },
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dy <= -100) {
                setExpanded(true);
                Animated.timing(translateY, {
                    toValue: 400,
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
                    toValue: 400,
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
                        transform: [{ translateY: translateYInterpolation }],
                    },
                ]}
                {...panResponder.panHandlers}
            >
                <View style={styles.draggableHandle} />
                <FlatList
                    data={personData.slice(0, expanded ? personData.length : 3)}
                    keyExtractor={(item) => item.id.toString()}
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
        height: 10, // Increase the height to make it easier to drag
        backgroundColor: 'gray',
        borderRadius: 5, // Adjust the border radius accordingly
        marginBottom: 10, // Increase the marginBottom for better spacing
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

export default Tab1Screen;
