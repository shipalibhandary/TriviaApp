import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Splash() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/home");
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Trivia Quiz App!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4A90E2',
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
});