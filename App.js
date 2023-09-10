import React, { useState } from 'react'
import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
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

  const handleNuevoPresupuesto = presupuesto => {
    if(Number(presupuesto) > 0){
      setIsValidPresupuesto(true)
    }else{
      Alert.alert('Error','El presupuesto no puede ser menor o igual a 0',[{text:'Ok'}])
    }
  }

  const handleGasto = gasto => {
    if(Object.values(gasto).includes('')){
      Alert.alert('Error','Todos los campos son obligatorios',[{text:'Ok'}])
      return
    }
    gasto.id = generarId()
    setGastos([...gastos, gasto])
    setModal(!modal)
  }

  return (
    <View style={styles.contenedor}>
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
        <ListadoGastos />
      ) }

      { modal && (
        <Modal
          animationType='slide'
          visible={modal}
        >
          <FormularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
          />
        </Modal>
      ) }

      { isValidPresupuesto && (
        <Pressable
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
  },
  imagen:{
    width:60,
    height:60,
    position:'absolute',
    right:20
  }
})

export default App