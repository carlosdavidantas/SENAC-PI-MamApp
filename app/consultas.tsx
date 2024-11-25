import { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import ConsultaItem from '@/components/consultasItems';
import { useRouter } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
import { get } from "@/utils/crud.js";
import { ArrowLeftIcon } from "react-native-heroicons/outline";


function getQueries() {
    return get("consultaItems");
}

export default function ConsultasScreen() {
    const router = useRouter();
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        const fetchQueries = async () => {
            const data = await getQueries();
            setQueries(data);
        };
        fetchQueries();
    }, [queries]);

    return <>
        <SafeAreaView>

            <View style={styles.backContainer}>
                <View style={styles.secondBackContainer}>
                    <View style={styles.backButtonBackground}>
                        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                            <ArrowLeftIcon size={20} color={"#FFFFFF"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleBackground}>
                        <Text style={styles.titleText}>Consultas</Text>
                    </View>
                    <FlatList
                        style={styles.list}
                        contentContainerStyle={{ paddingTop: 20, paddingBlockEnd: 20, gap: 20, alignItems: "center" }}
                        data={queries}
                        renderItem={({ item } : {item: {id: number, pacient: string, status: string, address: string, time: string, medicName: string, observation: string}}) => (
                            <ConsultaItem
                                id={item.id}
                                pacient={item.pacient}
                                status={item.status}
                                address={item.address}
                                time={item.time}
                                medicName={item.medicName}
                                observation={item.observation}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
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
        backgroundColor: "#F2EBFF",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "90%",
        borderRadius: 10
    },
    backButtonBackground: {
        width: "100%",
        height: "5%",
        padding: 10,
    },
    titleBackground: {
        width: "100%",
        height: "7%",
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
    list: {
        width: "100%"
    },
});
