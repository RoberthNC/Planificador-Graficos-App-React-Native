import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helpers'

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    const [ disponible, setDisponible ] = useState(0)
    const [ gastado, setGastado ] = useState(0)

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto) => total + Number(gasto.cantidad), 0)
        setGastado(totalGastado)
        const totalDisponible = presupuesto-gastado
        setDisponible(totalDisponible)
    },[])

    return (
        <View style={styles.contenedor}>
            <View style={styles.centrarGrafica}>
                <Image
                    style={styles.imagen}
                    source={require('../img/grafico.jpg')} 
                />
            </View>
            <View style={styles.contenedorTexto}>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto: {''}</Text>
                    {formatearCantidad(presupuesto)}
                </Text>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible: {''}</Text>
                    {formatearCantidad(disponible)}
                </Text>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado: {''}</Text>
                    {formatearCantidad(gastado)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor
    },
    centrarGrafica:{
        alignItems:'center'
    },
    imagen:{
        width:150,
        height:150
    },
    contenedorTexto:{
        marginTop:30
    },
    valor:{
        fontSize:24,
        textAlign:'center',
        marginBottom:10
    },
    label:{
        fontWeight:'700',
        color:'#3B82F6'
    }
})

export default ControlPresupuesto