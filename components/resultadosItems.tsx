import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ResultadoItemProps {
    examName: string
    examDate: string
}

const ResultadoItem = ({examName, examDate}: ResultadoItemProps) => {
    return (
        <LinearGradient style={styles.backgroundContainer} colors = {["#D1BAFF", "#A77BFF"]}>
            <View style={styles.textBackgorund}>
                <Text style={styles.text}>Exame: {examName}</Text>
                <Text style={styles.text}>Data: {examDate}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: "yellow",
        width: 330,
        height: 80,
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
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    observationText: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "semibold",
        opacity: 0.7,
    },
});

export default ResultadoItem;
