import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View>
        <Text style={styles.texto}>Planificador de Gastos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:{
        textAlign:'center',
        fontSize:35,
        color:'#FFF',
        textTransform:'uppercase',
        fontWeight:'bold',
        paddingHorizontal:15,
        paddingTop:20,
    }
})

export default Header