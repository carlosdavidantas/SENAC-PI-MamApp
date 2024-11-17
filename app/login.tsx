import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function LoginScreen() {
    const router = useRouter();
    return <>
        <StatusBar
            hidden={false}
            translucent={true}
            style="dark"
        />
        <SafeAreaView>
            <View style={styles.backContainer}>
                <View style={styles.secondBackContainer}>
                    <View style={styles.thirdContainer}>
                        <Text style={styles.titlesText}>Login</Text>
                        <Text style={styles.texts}>Email</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Text style={styles.texts}>Senha</Text>
                        <TextInput style={styles.input}></TextInput>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
                            <Text style={styles.buttonsText}>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </>
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
    },
    thirdContainer: {
        backgroundColor: "#FFFFFF",
        width: "80%",
        height: "80%",
        justifyContent: "space-evenly",
        alignItems: "center",
        opacity: 0.5,
        borderRadius: 10
    },
    titlesText: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 50,
        color: "#9847FF"
    },
    texts: {
        fontSize: 20,
    },
    input: {
        backgroundColor: "#F5F5F5",
        width: "80%",
        height: "7%"
    },
    button: {
        backgroundColor: "#9847FF",
        width: "60%",
        height: "7%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonsText: {
        fontSize: 30,
        fontWeight: "bold"
    }

})