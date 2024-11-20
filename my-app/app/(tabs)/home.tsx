import { View, Text, Dimensions, StyleSheet } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.backContainer}>
            <View style={styles.secondBackContainer}>
                <Text>HOME</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backContainer: {
        backgroundColor: "#E2D3FF",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    secondBackContainer: {
        backgroundColor: "#A77BFF",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "90%",
        borderRadius: 10
    }
})