import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const FormularioGasto = () => {
  return (
    <View style={styles.contenedor}>
        <View>
            <Pressable>
                <Text></Text>
            </Pressable>
        </View>

        <View style={styles.formulario}>
            <Text style={styles.titulo}>Nuevo Gasto</Text>
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre Gasto</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre del gasto. Ej. Comida'
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Cantidad Gasto</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Cantidad del gasto. Ej. 300'
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Categoría Gasto</Text>
                <Picker style={styles.input}>
                    <Picker.item label='-- Seleccione --' value='-' />
                    <Picker.item label='Ahorro' value='ahorro' />
                    <Picker.item label='Comida' value='comida' />
                    <Picker.item label='Casa' value='casa' />
                    <Picker.item label='Gastos Varios' value='gastos' />
                    <Picker.item label='Ocio' value='ocio' />
                    <Picker.item label='Salud' value='salud' />
                    <Picker.item label='Subscripciones' value='subscripciones' />
                </Picker>
            </View>

            <Pressable style={styles.submitBtn}>
                <Text style={styles.submitBtnTexto}>Agregar Gasto</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#1E40AF',
        flex:1
    },
    formulario:{
        ...globalStyles.contenedor
    },
    titulo:{
        textAlign:'center',
        fontSize:28,
        marginBottom:30,
        color:'#64748B'
    },
    campo:{
        marginVertical:10
    },
    label:{
        color:'#64748B',
        textTransform:'uppercase',
        fontSize:16,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'#F5F5F5',
        padding:10,
        borderRadius:10,
        marginTop:10
    },
    submitBtn:{
        backgroundColor:'#3B82F6',
        padding:10,
        marginTop:20
    },
    submitBtnTexto:{
        textAlign:'center',
        color:'#FFF',
        fontWeight:'bold',
        textTransform:'uppercase'
    }
})

export default FormularioGasto