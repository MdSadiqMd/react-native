import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Appearance } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.background },
            headerTintColor: theme.text,
            headerShadowVisible: false
        }}>
            <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
            <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact', headerTitle: 'Contact Us' }} />
            <Stack.Screen name="menu" options={{ headerShown: true, title: 'Menu', headerTitle: 'Shop Menu' }} />
            {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} />
                <Stack.Screen name='index' options={{ title: 'Home', headerShown: false }} />
                <Stack.Screen name='contact' options={{ title: 'Contact' }} /> */}
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
