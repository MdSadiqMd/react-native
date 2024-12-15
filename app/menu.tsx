import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Colors } from "@/constants/Colors";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container style={styles.container}>
            <FlatList
                data={[]}
                renderItem={() => null}
            />
        </Container>
    );
}

function createStyles(theme: any) {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.background,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: theme.text,
        },
        separator: {
            marginVertical: 30,
            height: 1,
            width: "80%",
        },
    });
}