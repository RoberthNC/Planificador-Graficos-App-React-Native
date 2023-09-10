import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'
import { useState } from 'react'

const FormularioGasto = ({ setModal, handleGasto }) => {

    const [ nombre, setNombre ] = useState('')
    const [ cantidad, setCantidad ] = useState('')
    const [ categoria, setCategoria ] = useState('')

    return (
        <View style={styles.contenedor}>
            <View>
                <Pressable style={styles.btnCancelar} onPress={() => setModal(false)}>
                    <Text style={styles.btnCancelarTexto}>Cancelar</Text>
                </Pressable>
            </View>

            <View style={styles.formulario}>
                <Text style={styles.titulo}>Nuevo Gasto</Text>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del gasto. Ej. Comida'
                        value={nombre}
                        onChangeText={setNombre}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad Gasto</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Cantidad del gasto. Ej. 300'
                        value={cantidad}
                        onChangeText={setCantidad}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoría Gasto</Text>
                    <Picker
                        style={styles.input}
                        selectedValue={categoria}
                        onValueChange={(valor) => setCategoria(valor)}
                    >
                        <Picker.item label='-- Seleccione --' value='' />
                        <Picker.item label='Ahorro' value='ahorro' />
                        <Picker.item label='Comida' value='comida' />
                        <Picker.item label='Casa' value='casa' />
                        <Picker.item label='Gastos Varios' value='gastos' />
                        <Picker.item label='Ocio' value='ocio' />
                        <Picker.item label='Salud' value='salud' />
                        <Picker.item label='Subscripciones' value='subscripciones' />
                    </Picker>
                </View>

                <Pressable
                    style={styles.submitBtn}
                    onPress={() => handleGasto({
                        nombre,
                        cantidad,
                        categoria
                    })}
                >
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
    btnCancelar:{
        backgroundColor:'#DB2777',
        padding:10,
        marginTop:30,
        marginHorizontal:10
    },
    btnCancelarTexto:{
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'#FFF'
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