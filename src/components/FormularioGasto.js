import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'
import { useState } from 'react'

const FormularioGasto = ({ setModal, handleGasto, setGasto, gasto, eliminarGasto }) => {

    const [ nombre, setNombre ] = useState('')
    const [ cantidad, setCantidad ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ id, setId ] = useState('')
    const [ fecha, setFecha ] = useState('')

    useEffect(()=>{
        if(gasto?.nombre){
            setNombre(gasto.nombre)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setId(gasto.id)
            setFecha(gasto.fecha)
        }
    }, [gasto])

    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorBotones}>
                <Pressable 
                    style={[styles.btn, styles.btnCancelar]} 
                    onPress={() => {
                        setModal(false)
                        setGasto({})
                    }}
                >
                    <Text style={styles.btnTexto}>Cancelar</Text>
                </Pressable>
                { !!id && (
                    <Pressable 
                        style={[styles.btn, styles.btnEliminar]} 
                        onPress={() => eliminarGasto(id)}
                    >
                        <Text style={styles.btnTexto}>Eliminar</Text>
                    </Pressable>
                ) }
            </View>

            <View style={styles.formulario}>
                <Text style={styles.titulo}>{gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</Text>
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
                        <Picker.item label='Suscripciones' value='suscripciones' />
                    </Picker>
                </View>

                <Pressable
                    style={styles.submitBtn}
                    onPress={() => handleGasto({
                        nombre,
                        cantidad,
                        categoria,
                        id,
                        fecha
                    })}
                >
                    <Text style={styles.submitBtnTexto}>{gasto?.nombre ? 'Guardar Cambios':'Agregar Gasto'}</Text>
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
    contenedorBotones:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btn:{
        padding:10,
        marginTop:30,
        marginHorizontal:10,
        flex:1
    },
    btnCancelar:{
        backgroundColor:'#DB2777',
    },
    btnEliminar:{
        backgroundColor:'red',
    },
    btnTexto:{
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