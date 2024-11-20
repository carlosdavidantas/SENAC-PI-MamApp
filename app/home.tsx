import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function App() {

    return (
      <View style={styles.container}>
      {/* Próximo Exame */}
      <View style={styles.card}>
        <Text style={styles.title}>Próximo Exame</Text>
        <Text style={styles.info}>Raio-X: 30/09</Text>
        <Text style={styles.info}>Ultrassom: 15/11</Text>
        <Text style={styles.info}>Tomografia abdominal: 22/11</Text>
      </View>

      {/* Próximas Consultas */}
      <View style={styles.card}>
        <Text style={styles.title}>Próximas Consultas</Text>
        <Text style={styles.info}>Oncologista: 10/10</Text>
      </View>

      {/* Resultado de Exames */}
      <View style={styles.card}>
        <Text style={styles.title}>Resultado de Exames</Text>
      </View>

      {/* Botões na parte inferior */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agendar Consulta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
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

    container: {
      flex: 1,
      backgroundColor: '#F4EAF5', 
      padding: 20,
    },
    card: {
      backgroundColor: '#9847FF', 
      borderRadius: 10,
      padding: 20,
      marginVertical: 10,
    },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#fff',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9847FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
