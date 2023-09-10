import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListadoGastos = () => {
  return (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Gastos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        marginTop:70
    },
    titulo:{
        color:'#64748B',
        fontSize:30,
        textAlign:'center',
        fontWeight:'700'
    }
})

export default ListadoGastos