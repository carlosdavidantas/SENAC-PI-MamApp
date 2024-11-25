import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, PencilIcon, CheckIcon } from "react-native-heroicons/outline"

import { get, put } from "@/utils/crud.js";

export default function ProfileScreen() {
  const router = useRouter();
  const [editAndSavebuttonPressed, seteditAndSaveButtonPressed] = useState(false);
  const [editButtonText, setEditButtonText] = useState("Editar");
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthday: "",
    rg: "",
    phoneNumber: "",
    cep: "",
    streetName: "",
    houseNumber: "",
    complement: "",
    reference: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get("perfil"))[0];
      setFormData({
        name: response.name,
        cpf: response.cpf,
        birthday: response.birthday,
        rg: response.rg,
        phoneNumber: response.phoneNumber,
        cep: response.cep,
        streetName: response.streetName,
        houseNumber: response.houseNumber,
        complement: response.complement,
        reference: response.reference
      });
    }
    fetchData();
  }, []);

    const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleSave = () => {
      put("perfil", formData);
    };

    return <>
      <SafeAreaView>

        <View style={styles.backContainer}>
          <View style={styles.secondBackContainer}>

            {/*Botões de voltar e editar*/}
            <View style={styles.backAndEditButtonsBackground}>
              <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <ArrowLeftIcon size={20} color={"#FFFFFF"} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.backButton} onPress={() => {
                if (editAndSavebuttonPressed === false) {
                  seteditAndSaveButtonPressed(true);
                  setEditButtonText("Salvar");
                  console.log("edit button was pressed and now is in saving mode");
                } else {
                  seteditAndSaveButtonPressed(false);
                  setEditButtonText("Editar");
                  handleSave();
                  console.log("edit button was pressed and now is in edit mode");
                }
              }}>
                {editAndSavebuttonPressed ? <CheckIcon size={20} color={"#FFFFFF"} /> : <PencilIcon size={20} color={"#FFFFFF"} />}
                
              </TouchableOpacity>
            </View>

            {/*Título*/}
            <View style={styles.titleBackground}>
              <Text style={styles.titleText}>Perfil</Text>
            </View>

            {/*Lista*/}
            <ScrollView
              style={styles.list}
              contentContainerStyle={{ paddingTop: 20, paddingBlockEnd: 20, gap: 20, alignItems: "center" }}
            >

              {/*Campo pessoal*/}
              <View style={styles.formContainer}>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Nome</Text>
                  <TextInput style={styles.input} placeholder="Digite seu nome:" editable={false} value={formData.name} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>CPF</Text>
                  <TextInput style={styles.input} placeholder="Digite seu CPF:" keyboardType="numeric" editable={false} value={formData.cpf} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Data de Nascimento</Text>
                  <TextInput style={styles.input} placeholder="Data de nascimento:" editable={false} value={formData.birthday} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>RG</Text>
                  <TextInput style={styles.input} placeholder="Digite seu RG:" keyboardType="numeric" editable={false} value={formData.rg} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Telefone</Text>
                  <TextInput style={styles.input} placeholder="Número de telefone:" keyboardType="phone-pad" editable={editAndSavebuttonPressed} value={formData.phoneNumber} onChangeText={(value) => handleInputChange("phoneNumber", value)} />
                </View>
              </View>

              {/*Campos de endereço*/}
              <View style={styles.formContainer}>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>CEP</Text>
                  <TextInput style={styles.input} editable={editAndSavebuttonPressed} value={formData.cep} onChangeText={(value) => handleInputChange("cep", value)} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Rua</Text>
                  <TextInput style={styles.input} editable={editAndSavebuttonPressed} value={formData.streetName} onChangeText={(value) => handleInputChange("streetName", value)} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Número</Text>
                  <TextInput style={styles.input} editable={editAndSavebuttonPressed} value={formData.houseNumber} onChangeText={(value) => handleInputChange("houseNumber", value)} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Complemento</Text>
                  <TextInput style={styles.input} editable={editAndSavebuttonPressed} value={formData.complement} onChangeText={(value) => handleInputChange("complement", value)} />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Ponto de referência</Text>
                  <TextInput style={styles.input} editable={editAndSavebuttonPressed} value={formData.reference} onChangeText={(value) => handleInputChange("reference", value)} />
                </View>
              </View>

            </ScrollView>

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
    container: {
      backgroundColor: "#E2D3FF",
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
      padding: 20,
    },
    titleBackground: {
      width: "100%",
      height: "6%",
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#7B39FF"
    },
    list: {
      width: "100%",
    },
    backAndEditButtonsBackground: {
      width: "100%",
      height: "5%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
    },
    backButton: {
      backgroundColor: "#A77BFF",
      width: 45,
      height: 45,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 5,
      color: "#7B39FF",
    },
    formContainer: {
      width: "90%",
      backgroundColor: "#D1BAFF",
      borderRadius: 10
    },
    inputContainer: {
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
    },
    label: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: "bold",
    },
    input: {
      marginTop: 5,
      padding: 10,
      backgroundColor: "#A77BFF",
      borderRadius: 5,
      fontSize: 18,
      color: "#FFFFFF",
    },
    button: {
      backgroundColor: "#A77BFF",
      padding: 12,
      borderRadius: 5,
      width: "80%",
      alignItems: "center",
      marginTop: 20
    },
    buttonText: {
      color: "#FFFFFF",
      fontWeight: "bold",
    },
  });
