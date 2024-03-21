import React from "react";
import { SafeAreaView,StyleSheet, Text } from "react-native";

import EntradaTexto from "./components/EntradaTexto";
import JanelaCadastro from "./components/JanelaCadastro";

export default () =>{
    return (
        <SafeAreaView style={style.fundo}>
         {/* <EntradaTexto/>  */}
         <JanelaCadastro/>
        </SafeAreaView>
    )
}
const style = StyleSheet.create(
    {
        fundo:{
            flexGrow:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#124076'
        }
    }
)

