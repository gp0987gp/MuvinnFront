import axios from "axios";
import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../components/Footer";

function CadastroScreen(): React.JSX.Element{

    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [tipos_imoveis, setTipos_imoveis] = useState("");
    const [preco, setPreco] = useState("");
    const [banheiros, setBanheiros] = useState("");
    const [quartos, setQuartos] = useState("");
    const [vagas, setVagas] = useState("");
    const [area_do_imovel, setArea_do_imovel] = useState("");


    const CadastroScreen = async () => {
        try {
            const formData = new FormData();
            formData.append('estado', estado);
            formData.append('cidade', cidade);
            formData.append('endereco', endereco);
            formData.append('tipos_imoveis', tipos_imoveis);
            formData.append('preco', preco);
            formData.append('banheiros', banheiros);
            formData.append('quartos', quartos);
            formData.append('vagas', vagas);
            formData.append('area_do_imovel', area_do_imovel);
            

            console.log(formData)
            const response = await axios.post('http://10.137.11.224:8000/api/clientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar hidden barStyle={"light-content"} backgroundColor={"black"} />
            <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo} />

            <View>
                
                <TextInput
                style={styles.input} 
                placeholder="Estado" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteEstado) => setEstado(texteEstado)}
                />
                
                <TextInput
                style={styles.input} 
                placeholder="cidade" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteCidade) => setCidade(texteCidade)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Endereço" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteEndereco) => setEndereco(texteEndereco)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Tipo do Imóvel" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteTipos_imoveis) => setTipos_imoveis(texteTipos_imoveis)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Preço" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textePreco) => setPreco(textePreco)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Banheiros" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteBanheiros) => setBanheiros(texteBanheiros)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Quartos" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteQuartos) => setQuartos(texteQuartos)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Vagas" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteVagas) => setVagas(texteVagas)}
                secureTextEntry
                />
                <TextInput
                style={styles.input} 
                placeholder="Area do Imóvel" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteArea_do_Imovel) => setArea_do_imovel(texteArea_do_Imovel)}
                secureTextEntry
                />
                </View>
                <View>
                    
                <TouchableOpacity style={styles.button} 
                onPress={()=>{CadastroScreen()}}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Cadastre-se!</Text>
                </TouchableOpacity>
                </View>
            
            </ScrollView>
            <Footer />
        </View>
        
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3d5ca'
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: -120,
        marginTop: -69
        
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center',

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        
    },
    button: {
        backgroundColor: '#d6ccc2',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d6ccc2',
        height: 40,

    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
       

    },
    forgotPassword: {
        color: 'black',
        textAlign: 'center',
        marginTop: 10,

    },
    footer: {
        width: 100
    },

});

export default CadastroScreen;