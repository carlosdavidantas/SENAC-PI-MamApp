import { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import HomeScreenItem from '@/components/homeScreenItem';
import { useRouter } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
import { get } from "@/utils/crud.js";

function getNotifications() {
    return get("homeScreenNotifications");
}

export default function LoginScreen() {
    const router = useRouter();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const data = await getNotifications();
            console.log(data);
            setNotifications(data);
        };
        fetchNotifications();
    }, []);

    return <>
        <SafeAreaView>

            <View style={styles.backContainer}>
                <View style={styles.secondBackContainer}>
                    <FlatList
                        style={styles.list}
                        contentContainerStyle={{ paddingTop: 20, gap: 20, alignItems: "center" }}
                        data={notifications}
                        renderItem={({ item }: { item: { title: string; description: string } }) => (
                            <HomeScreenItem
                                title={item.title}
                                description={item.description}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={styles.buttonsBackground}>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("/exames")}>
                            <Text style={styles.buttonsText}>Exames</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("/perfil")}>
                            <Text style={styles.buttonsText}>Perfil</Text>
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
        backgroundColor: "#F2EBFF",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "90%",
        borderRadius: 10
    },
    list: {
        width: "100%"
    },
    buttonsBackground: {
        width: "100%",
        height: "25%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#A77BFF",
        width: "40%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    buttonsText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    }
});