import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet} from "react-native";

export default props=>{
    const [usuario,setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [sair, setSair] = useState('');

    function autenticar(usuario,senha) {
        console.warn(usuario)
        console.warn(senha)
        
        if (usuario === 'Isaoliveira' && senha === 'isa123'){
            console.warn('Login Sucedido!')
            setUsuario('');
            setSenha('');
        } else {console.warn('Login Incorreto!')}
        
    }


    return(
        <View>
             <Text style={texto.texto}>Não tem usuário? Clique aqui.</Text> 
             <View style={texto.botao}>
             <Button  style={texto.botao} onPress={autenticar(suario,senha)}  title="Entrar" color={'#FF204E'}/>
             </View>
             <Button  style={texto.botao}  title="Sair" color={'#FF204E'}/>
             <Text style={texto.entrarSair}>{}</Text>
             <Text style={texto.entrarSair}></Text>
        </View>
    )
}

const texto = StyleSheet.create(
    {
        texto:{
            textAlign: 'right',
            padding: 30,
            color: '#FEFBF6'
        },
        entrarSair:{
            textAlign: 'right',
            color: '#FEFBF6'
        },
        botao:{
            marginBottom:15
        }
    }
)
