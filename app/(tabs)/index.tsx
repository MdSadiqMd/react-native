import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const app = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('@/assets/images/react-logo.png')} resizeMode='cover'>
                <Text style={styles.text}>App</Text>
            </ImageBackground>
        </View>
    );
};

export default app;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});