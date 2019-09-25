import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {

    let points = [];

    for (let i=0; i<20; i++) {
        points.push({
            latitude: 41.6086 + i * 2.0,
            longitude: 21.7453 + i * 2.0
        });
    }

    return (
        <MapView 
        style={styles.map}
        initialRegion={{
            latitude: 41.6086,
            longitude: 21.7453,
            latitudeDelta: 2.0,
            longitudeDelta: 2.0
        }} 
        >
            <Polyline coordinates={points} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});


export default Map;