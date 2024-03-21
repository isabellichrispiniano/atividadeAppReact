import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Text, Button, SafeAreaView } from "react-native";


export default props => {
    const [usuario, setUsuario] = useState(usuario);
    const [senha, setSenha] = useState(senha);
    const [sair, setSair] = useState(sair);
    const [aviso, setaviso] = useState(aviso)

    function autenticar() {

        if (usuario == 'isallichrispiniano' && senha == 123) {
            setaviso("Bem vindo!");

        } else {
            setaviso("Usuario ou senha incorretos!")
        }

    }

    // função do botão sair
    function exit() {
        setSair('Você saiu')
    }


    return (
        <SafeAreaView>
            <View>
                <Image style={image.imagem}
                    source={require('../images/logotipo.png')}
                />

                <TextInput style={style.Input}
                    onChangeText={value => setUsuario(value)}
                    maxLength={30}
                    placeholder="Insira seu usuário"
                />

                <TextInput style={style.Input}
                    secureTextEntry={true}
                    placeholder="Insira sua senha"
                    onChangeText={value => setSenha(value)}
                    maxLength={20}
                />

                <View>
                    <Text style={texto.texto}>Não tem usuário? Clique aqui.</Text>
                    <View style={texto.botao}>
                        <Button style={texto.botao} onPress={autenticar} title="Entrar" color={'#FF204E'} />
                    </View>
                    <Button style={texto.botao} onPress={exit} title="Sair" color={'#FF204E'} />
                    <Text style={texto.entrarSair}>{aviso}</Text>
                    <Text style={texto.entrarSair}>{sair}</Text>
                </View>


            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        Input: {
            marginTop: 10,
            borderRadius: 5,
            width: 300,
            backgroundColor: '#EEEEEE'
        }
    }
)

const image = StyleSheet.create(
    {
        imagem: {
            alignSelf: 'center'
        }
    }
)


const texto = StyleSheet.create(
    {
        texto: {
            textAlign: 'right',
            padding: 30,
            color: '#FEFBF6'
        },
        entrarSair: {
            textAlign: 'right',
            color: '#FEFBF6'
        },
        botao: {
            marginBottom: 15
        }
    }
)