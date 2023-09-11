import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const Filtro = ({ filtro, setFiltro, gastos, setGastosFiltrados }) => {

    useEffect(()=>{
        if(filtro === ''){
            setGastosFiltrados([])
        }else{
            const gastosFiltrados = gastos.filter(gastoState => gastoState.categoria === filtro)
            setGastosFiltrados(gastosFiltrados)
        }
    }, [filtro])

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Filtrar Gastos</Text>

            <Picker
                selectedValue={filtro}
                onValueChange={(valor) => {
                    setFiltro(valor)
                }}
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
    )
}

const styles = StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor,
        transform:[{translateY: 0}],
        marginTop:80,
        paddingVertical:20
    },
    label:{
        fontSize:22,
        fontWeight:'900',
        color:'#64848B'
    }
})

export default Filtro