import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

function LoadingScreen() {
    const [rotation] = useState(new Animated.Value(0));
    const [scale] = useState(new Animated.Value(1));

    useEffect(() => {
        // Start the rotation animation
        Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();

        // Expand the loading ring into a line after 3 seconds
        const timeout = setTimeout(() => {
            Animated.timing(scale, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <View style={styles.loadingContainer}>
                <Animated.View style={[styles.loadingRing, { transform: [{ rotate: rotateInterpolate }, { scale }] }]} />
                <Text style={styles.loadingText}>d d N o w</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e90ff',
    },
    loadingContainer: {
        alignItems: 'center',
    },
    loadingRing: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        borderStyle: 'dashed',
        marginBottom: 10,
    },
    loadingText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default LoadingScreen;
