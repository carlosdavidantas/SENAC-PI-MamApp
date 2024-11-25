import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, FlatList, } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ptBR } from "@/utils/calendarConfig";
import HourItem from "@/components/hourItem";
import { useRoute, RouteProp } from '@react-navigation/native';
import { post } from "@/utils/crud.js";
import { ArrowLeftIcon } from "react-native-heroicons/outline"


function saveScheduling(date: string, hour: string) {
    const scheduling = {
        date: date,
        hour: hour
    }
    post("agendamentos", scheduling)
}

type RouteParams = {
    agendamento: {
        hour: string;
    };
};

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"


export default function Agendamento() {
    const router = useRouter();
    const [day, setDay] = useState<DateData>();

    const route = useRoute<RouteProp<RouteParams, 'agendamento'>>();
    const { hour } = route.params;

    let date = "";
    let message = "";
    if (day?.day, day?.month, day?.year, hour != undefined) {
        date = `${day?.day}/${day?.month}/${day?.year}`;
        message = `${date} | horário ${hour}`;
    }

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
                        <Text style={styles.titleText}>Agendamento</Text>
                    </View>


                    <View style={styles.calendarBackground}>
                        <View style={styles.selectDay}>
                            <Calendar
                                style={styles.calendarHead}
                                theme={{
                                    monthTextColor: "#7B39FF",
                                    todayTextColor: "#7B39FF",
                                    selectedDayBackgroundColor: "#7B39FF",
                                    calendarBackground: "#E2D3FF",
                                    arrowColor: "#7B39FF",
                                    textDayStyle: {
                                        color: "#000000"
                                    },
                                    textDisabledColor: "#717171",

                                }}
                                hideExtraDays
                                minDate={new Date().toDateString()}
                                onDayPress={setDay}
                                markedDates={day && {
                                    [day.dateString]: { selected: true }
                                }}
                            />
                        </View>


                        <View style={styles.selectHourBackground}>
                            <LinearGradient style={styles.selectHourTitleBackground} colors={["#D1BAFF", "#A77BFF"]}>
                                <Text style={styles.selectHourTitle}>Horários disponíveis</Text>
                            </LinearGradient>

                            {/* Os horários devem ser obtidos via  API, mas não foi tomada essa abordagem pois não sabemos quando a correção do projeto será feita e não seria viável mockar esses dados */}
                            <FlatList
                                style={styles.hoursList}
                                contentContainerStyle={{ paddingTop: 10, paddingBlockEnd: 10, gap: 10, alignItems: "center" }}
                                data={[
                                    { hour: "07:00" },
                                    { hour: "08:00" },
                                    { hour: "09:00" },
                                    { hour: "10:00" },
                                    { hour: "11:00" },
                                    { hour: "12:00" },
                                    { hour: "13:00" },
                                    { hour: "14:00" },
                                    { hour: "15:00" },
                                    { hour: "16:00" },
                                ]}

                                renderItem={({ item }) => (
                                    <HourItem
                                        hour={item.hour}

                                    />
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            >
                            </FlatList>

                        </View>

                        <View style={styles.infoHourAndDate}>
                            <Text style={styles.text}>{`${message}`}</Text>
                        </View>

                        <TouchableOpacity style={styles.saveButton}
                            onPress={() => {
                                saveScheduling(date, hour);
                                alert("Agendamento realizado com sucesso!");
                            }}>
                            <Text style={styles.saveText}>Agendar</Text>
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
        fontSize: 25,
        fontWeight: "bold",
        color: "#7B39FF"
    },
    calendarBackground: {
        width: "100%",
        height: "90%",
        backgroundColor: "transparent",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    selectDay: {
        width: "80%",
        height: "40%"
    },
    calendarHead: {
        backgroundColor: "#E2D3FF",
        borderRadius: 10,
    },
    selectHourBackground: {
        marginTop: 60,
        width: "80%",
        height: "20%",
        backgroundColor: "transparent",
    },
    selectHourTitleBackground: {
        width: "100%",
        height: "20%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    selectHourTitle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    hoursList: {
        backgroundColor: "#E2D3FF",
        borderRadius: 10,
    },
    infoHourAndDate: {
        borderRadius: 10,
        backgroundColor: "transparent",
        width: "80%",
        height: "7%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#A77BFF"
    },
    saveButton: {
        backgroundColor: "#A77BFF",
        width: "80%",
        height: "7%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    saveText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
});
