import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Colors } from "@/constants/Colors";
import { MENU_IMAGES, MenuItemTitle } from "@/constants/MenuImages";
import { MENU_ITEMS } from "@/constants/MenuItems";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container style={styles.container}>
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Text>Header</Text>}
                ListFooterComponent={<Text>Footer</Text>}
                ListEmptyComponent={<Text>No items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: MENU_IMAGES[item.title as MenuItemTitle] || 'fallback_image_url' }}
                            style={styles.image}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme: any) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        listContainer: {
            paddingHorizontal: 20,
        },
        itemContainer: {
            marginVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: theme.separator,
            paddingBottom: 10,
        },
        image: {
            width: 150,
            height: 150,
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 8,
        },
        textContainer: {
            alignItems: 'center',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
        },
        description: {
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
            marginTop: 5,
        },
    });
}