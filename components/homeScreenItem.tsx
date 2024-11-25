import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface HomeScreenItemProps {
    title: string;
    description: string;
}

const HomeScreenItem = ({title, description}: HomeScreenItemProps) => {
    return (
        <LinearGradient style={styles.backgroundContainer} colors = {["#D1BAFF", "#A77BFF"]}>
            <View style={styles.textBackgorund}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: "yellow",
        width: 330,
        height: 150,
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    textBackgorund: {
        width: "90%",
        height: "80%",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    descriptionText: {
        fontSize: 15,
        color: "#FFFFFF",
        fontWeight: "semibold"
    },
})

export default HomeScreenItem;
