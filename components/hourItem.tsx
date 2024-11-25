import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    agendamento: { hour: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'agendamento'>;



interface HourItemProps {
    hour: string;
}

const HourItem = ({hour}: HourItemProps) => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <LinearGradient style={styles.backgroundContainer} colors = {["#D1BAFF", "#A77BFF"]} >
            <TouchableOpacity style={styles.textBackgorund}
            onPress={() => {
                navigation.navigate("agendamento", {hour: hour})
                console.log(`Hour: ${hour} was pressed!` )
            }}>
                <Text style={styles.titleText}>{hour}</Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: "yellow",
        width: 220,
        height: 40,
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    textBackgorund: {
        width: "90%",
        height: "80%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    titleText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    descriptionText: {
        fontSize: 10,
        color: "#FFFFFF",
        fontWeight: "semibold"
    },
})

export default HourItem;
