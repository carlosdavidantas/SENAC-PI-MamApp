import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const ProfileScreen: React.FC = () => { 

  return (
    <View style={styles.container}>
      {/* Título de Perfil */}
      <Text style={styles.title}>Perfil</Text>

      {/* Formulário com informações */}
      <View style={styles.formContainer}>
        {/* Nome */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome:" />
        </View>

        {/* CPF */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.input} placeholder="Digite seu CPF:" keyboardType="numeric" />
        </View>

        {/* Data de Nascimento */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput style={styles.input} placeholder="Data de nascimento:" />
        </View>

        {/* RG */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>RG</Text>
          <TextInput style={styles.input} placeholder="Digite seu RG:" keyboardType="numeric" />
        </View>

        {/* Telefone */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput style={styles.input} placeholder="Número de telefone:" keyboardType="phone-pad" />
        </View>

        {/* Endereço */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enderecco</Text>
          <TextInput style={styles.input} placeholder="Endereço:" />
        </View>
      </View>

      /* Botão para salvar ou editar */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Salvar')}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2D3FF", // Corfundo do app
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#7B39FF", // titulo
  },
  formContainer: {
    width: "95%",
  },
  inputContainer: {
    backgroundColor: "#A77BFF", // Cor de fundo dos campos
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    color: '#FFFFFF', // Cor do texto dentro dos campos
     fontWeight: "bold",
    

  },
  input: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#F2EBFF", // Cor do fundo dos inputs
    borderRadius: 5,
    fontSize: 16,
    color: "#666666", // Cor do texto dentro dos inputs
  },
  button: {
    backgroundColor: "#7B39FF", // Cor de fundo do botão
    padding: 12,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF", // Cor do texto do botão
    fontWeight: "bold",
  },
});


 export default ProfileScreen;


