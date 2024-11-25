import { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import ResultadoItem from '@/components/resultadosItems';
import { useRouter } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
import { get } from "@/utils/crud.js";
import { ArrowLeftIcon } from "react-native-heroicons/outline"

function getResults() {
    return get("examesResultados");
}

export default function Resultados() {
    const router = useRouter();

    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const data = await getResults();
            console.log(data);
            setResults(data);
        };
        fetchResults();
    }, []);

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
                        <Text style={styles.titleText}>Resultados</Text>
                    </View>
                    <FlatList
                        style={styles.list}
                        contentContainerStyle={{ paddingTop: 20, paddingBlockEnd: 20, gap: 20, alignItems: "center" }}
                        data={results}
                        renderItem={({ item }: { item: { exam: string; date: string } }) => (
                            <ResultadoItem
                                examName={item.exam}
                                examDate={item.date}

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
