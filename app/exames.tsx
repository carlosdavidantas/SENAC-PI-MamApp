import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/outline"

export default function LoginScreen() {
    const router = useRouter();
    return (
        <SafeAreaView>

            <View style={styles.backContainer}>
                <View style={styles.secondBackContainer}>
                    <View style={styles.backButtonBackground}>
                        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                            <ArrowLeftIcon size={20} color={"#FFFFFF"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleBackground}>
                        <Text style={styles.titleText}>Exames</Text>
                    </View>

                    <View style={styles.buttonsBackground}>
                        <TouchableOpacity style={styles.pagesButton} onPress={() => router.push("/agendamento")}>
                            <Text style={styles.textButtons}>Agendamento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.pagesButton} onPress={() => router.push("/resultados")}>
                            <Text style={styles.textButtons}>Resultados</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.pagesButton} onPress={() => router.push("/consultas")}>
                            <Text style={styles.textButtons}>Consultas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
        backgroundColor: "#F2EBFF",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        height: "90%",
        borderRadius: 10,
    },
    backButtonBackground: {
        width: "100%",
        height: "5%",
        padding: 10,
    },
    titleBackground:{
        width: "100%",
        height: "5%",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        backgroundColor: "#A77BFF",
        width: 45,
        height: 45,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#7B39FF"
    },
    buttonsBackground: {
        width: "100%",
        height: "90%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    pagesButton: {
        width: "90%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#A77BFF"
    },
    textButtons: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold"
    }
})