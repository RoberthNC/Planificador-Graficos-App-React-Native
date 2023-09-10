import React, { useState } from 'react'
import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from './src/components/Header'
import NuevoPresupuesto from './src/components/NuevoPresupuesto'
import ControlPresupuesto from './src/components/ControlPresupuesto'
import FormularioGasto from './src/components/FormularioGasto'
import ListadoGastos from './src/components/ListadoGastos'
import { generarId } from './src/helpers'

const App = () => {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})

  const handleNuevoPresupuesto = presupuesto => {
    if(Number(presupuesto) > 0){
      setIsValidPresupuesto(true)
    }else{
      Alert.alert('Error','El presupuesto no puede ser menor o igual a 0',[{text:'Ok'}])
    }
  }

  const handleGasto = gasto => {
    if([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')){
      Alert.alert('Error','Todos los campos son obligatorios',[{text:'Ok'}])
      return
    }
    if(gasto?.id){
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto:gastoState)
      setGastos(gastosActualizados)
    }else{
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setModal(!modal)
  }

  const eliminarGasto = id => {
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        {text:'No',style:'cancel'},
        {text:'Sí, Eliminar', onPress: () => {
          const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id)
          setGastos(gastosActualizados)
          setModal(!modal)
          setGasto({})
        }}
      ]
    )
  }

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
          { isValidPresupuesto ? (
            <ControlPresupuesto
              gastos={gastos}
              presupuesto={presupuesto}
            />
          ):(
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}  
              handleNuevoPresupuesto={handleNuevoPresupuesto}
            />
          ) }
        </View>

        { isValidPresupuesto && (
          <ListadoGastos
            gastos={gastos}
            setModal={setModal}
            setGasto={setGasto}
          />
        ) }
      </ScrollView>

      { modal && (
        <Modal
          animationType='slide'
          visible={modal}
        >
          <FormularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
            setGasto={setGasto}
            gasto={gasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      ) }

      { isValidPresupuesto && (
        <Pressable
          style={styles.pressable}
          onPress={() => setModal(true)}
        >
          <Image
            style={styles.imagen} 
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      ) }
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#F5F5F5',
    flex:1
  },
  header:{
    backgroundColor:'#3B82F6',
    minHeight:400
  },
  pressable:{
    width:60,
    height:60,
    position:'absolute',
    bottom:40,
    right:20
  },
  imagen:{
    width:60,
    height:60,
  }
})

export default App