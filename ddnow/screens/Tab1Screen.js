import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

function Tab1Screen() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location ? location.coords.latitude : 37.78825,
                    longitude: location ? location.coords.longitude : -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
            />
            <View style={styles.queueContainer}>
                <Text style={styles.queueText}>QUEUE: <Text style={styles.queueNumber}>4</Text></Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Drive Now Pressed')}>
                    <Text style={styles.buttonText}>Drive Now!</Text>
                </TouchableOpacity>
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
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    queueContainer: {
        position: 'absolute',
        bottom: 55,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 100,
        paddingVertical: 30,
        borderRadius: 20,
    },
    queueText: {
        color: 'black',
        fontFamily: 'System',
        left: -80,
        top: -17,
    },
    queueNumber: {
        color: 'black',
        right: -80,
        top: -17,
    },
    map: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 29,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#006ee6',
        borderRadius: 90,
        paddingVertical: 11,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'System',
    },
});

export default Tab1Screen;
