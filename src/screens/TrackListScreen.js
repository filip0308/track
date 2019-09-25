import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';


const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Track List Screen</Text>
            <Button type="clear" title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
        </View>
    );
};

const styles = StyleSheet.create({});


export default TrackListScreen;