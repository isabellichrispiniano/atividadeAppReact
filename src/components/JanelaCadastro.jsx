import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Text, Button, SafeAreaView } from "react-native";

export default props => {
    const [nome, setnome] = useState(nome);
    const [mail, setMail] = useState(mail);
    const [telefone, setTelefone] = useState(telefone);
    const [endereco, setendereco] = useState(endereco);
    const [cidade, setcidade] = useState(cidade);
    const [estado, setestado] = useState(estado);

    return (
        <SafeAreaView>
            <View>
                <View style={texto.imgTexto}>
                    <Image
                        source={require('../images/logotipo.png')}
                    />
                    <Text style={texto.texto}>Cadastro de clientes</Text>
                </View>

                <View style={texto.input}>
                    <TextInput
                        onChangeText={value => setnome(value)}
                        maxLength={70}
                        placeholder="Nome"
                    />
                </View>

                <TextInput style={texto.input}
                    onChangeText={value => setMail(value)}
                    maxLength={40}
                    placeholder="E-mail"
                    keyboardType="email-address"
                />

                <TextInput style={texto.input}
                    onChangeText={value => setTelefone(value)}
                    maxLength={12}
                    placeholder="Telefone"
                    keyboardType="number-pad"
                />

                <TextInput style={texto.input}
                    onChangeText={value => setendereco(value)}
                    placeholder="Endereço"
                />

                <View style={texto.imgTexto}>
                    <TextInput style={texto.numberCep}
                        onChangeText={value => setendereco(value)}
                        placeholder="Número"
                        keyboardType="number-pad"
                    />

                    <TextInput style={texto.numberCep}
                        onChangeText={value => setendereco(value)}
                        placeholder="CEP"
                        keyboardType="number-pad"
                    />
                </View>


                <TextInput style={texto.input}
                    onChange={value => setcidade(value)}
                    placeholder="Cidade"
                />

                <TextInput style={texto.input}
                    onChange={value => setestado(value)}
                    placeholder="Estado"
                />



            <View style={texto.fundo1}>
                <View style={texto.botao}>
                    <Button 
                    style={{}}
                    title="Cadastrar"
                     color={'#FF204E'} />
                </View>
                    
                <View style={texto.botao}>
                    <Button 
                    title="Alterar" 
                    color={'#FF204E'} />
                    
                </View>
                </View>


                   
                <View style={texto.fundo2}>
                <View style={texto.botao}>
                    <Button 
                    title="Exluir"
                     color={'#FF204E'} />
                </View>
                    
                <View style={texto.botao}>
                    <Button 
                    title="Pesquisar" 
                    color={'#FF204E'} />
                    
                </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

const texto = StyleSheet.create(
    {
        imgTexto: {
            flexDirection: 'row',

        },
        texto: {
            color: '#FEFBF6',
            // padding: 39,
            margin: 40
        },
        input: {
            margin: 9,
            borderRadius: 15,
            width: 350,
            backgroundColor: '#C7C8CC',
        },
        numberCep: {
            margin: 9,
            borderRadius: 15,
            width: 165,
            backgroundColor: '#C7C8CC',

        },
        botao: {
            flexGrow: 1,
            // flexDirection: 'row',
             margin: 5,
             width: 150,
             height: 60,
             
        },
        fundo1:{
            marginTop: 15,
            alignSelf: 'flex-start',
            // flexGrow:1,
            flexDirection:'row',
            // maxHeight: '50%',
            // maxWidth: '60%',
            
        },
        fundo2:{
            alignSelf: 'flex-start',
            // flexGrow:1,
            flexDirection:'row',
            // maxHeight: '50%',
            // maxWidth: '60%'
        }
    }
)