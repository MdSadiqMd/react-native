import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const app = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('@/assets/images/react-logo.png')} resizeMode='cover'>
                <Text style={styles.title}>App</Text>
                <Link href="/explore"
                    style={styles.title}
                    asChild
                >
                    <Pressable>
                        <Text style={styles.title}>Explore</Text>
                    </Pressable>
                </Link>
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
    title: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 4,
        marginBottom: 120
    }
});