import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('@/assets/images/react-logo.png')} style={styles.image}>
                <Text style={styles.title}>App Coffee</Text>
                <Link href="/contact" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Explore</Text>
                    </Pressable>
                </Link>
                <Link href="/menu" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Menu</Text>
                    </Pressable>
                </Link>
            </ImageBackground>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 100,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
    button: {
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});