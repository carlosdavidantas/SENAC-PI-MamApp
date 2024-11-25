import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { remove } from "@/utils/crud.js";

function removeConsulta(id: number) {
    remove("consultaItems", id);
}

interface ConsultaItemProps {
    id: number
    pacient: string
    status: string
    address: string
    time: string
    medicName: string
    observation: string
}

const ConsultaItem = ({id, pacient, status, address, time, medicName, observation}: ConsultaItemProps) => {
    return (
        <LinearGradient style={styles.backgroundContainer} colors = {["#D1BAFF", "#A77BFF"]}>
            <View style={styles.textBackgorund}>
                <Text style={styles.text}>Paciente: {pacient}</Text>
                <Text style={styles.text}>{status}</Text>
                <Text style={styles.text}>Endereço: {address}</Text>
                <Text style={styles.text}>Horário: {time}</Text>
                <Text style={styles.text}>Médico(a): {medicName}</Text>
                <Text style={styles.observationText}>{observation}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.cancelButton} onPress={() => {removeConsulta(id)}}>
                    <Text style={styles.buttonText}>Cancelar consulta</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: "yellow",
        width: 300,
        height: 280,
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
    cancelButton: {
        backgroundColor: "#E2D3FF",
        width: 150,
        height: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }, 
    buttonText: {
        fontSize: 15,
        color: "#A77BFF",
        fontWeight: "bold",
    }
});

export default ConsultaItem;
