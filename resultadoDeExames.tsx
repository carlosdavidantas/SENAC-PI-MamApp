import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function App() {

    return (
     <View style={styles.container}>
      <Text style={styles.title}>Resultado de exames</Text>
      
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>            
          <Text style={styles.buttonText}>Exame: Mamografia Digital </Text>
          <Text style={styles.buttonText}>Data: 05/11/2024 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>            
          <Text style={styles.buttonText}>Exame: Ultrassonografia </Text>
          <Text style={styles.buttonText}>Data: 15/11/2024 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>            
          <Text style={styles.buttonText}>Exame: Ressonância magnética </Text>
          <Text style={styles.buttonText}>Data: 25/11/2024 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>            
          <Text style={styles.buttonText}>Exame: Biópsia mamária </Text>
          <Text style={styles.buttonText}>Data: 30/11/2024 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>            
          <Text style={styles.buttonText}>Exame: Exame Imunohistoquímico </Text>
          <Text style={styles.buttonText}>Data: 10/12/2024 </Text>
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#9847FF',
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
        gap: 10,
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