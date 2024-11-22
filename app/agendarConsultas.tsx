import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function App() {

    return (
     <View style={styles.container}>
      <Text style={styles.title1}>Agendar consultas</Text>
      
      <View style={styles.card}>
        <Text style={styles.title}>Selecione o dia</Text>        
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Horários disponíveis</Text>
      </View>

      {/* Botões horário disponível */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>            
          <Text style={styles.buttonText}>07:00 - 08:00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>08:00 - 09:00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>09:00 - 10:00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>10:00 - 11:00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>11:00 - 12:00</Text>
        </TouchableOpacity>        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4EAF5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#9847FF',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        width: '90%',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    title1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    bottomContainer: {
        
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        padding: 15,
        width: '70%',
        gap: 3,
    },
    button: {
        backgroundColor: '#9847FF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '70%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        width: '70%',
    },
});