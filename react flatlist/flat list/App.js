import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Imprimir from "./src/componente/Imprimidados"

export default function App() {
  const [frutas,setFrutas] = useState(["maça","banana","morango"])
  const [text, setText] = useState('')

  const onAdd = () => {
    if (text == ''){
      alert("Preencha os dados")
    }else{
      setFrutas([...frutas,text])
    }
      
  }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nome da fruta</Text>

      <TextInput
        style={styles.input}
        placeholder="Informe nome"
        onChangeText={setText}
        value={text}
      />

      <TouchableOpacity
          style={styles.button}
          onPress= {onAdd}
      >
        <Text>Clique aqui</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}> <hr/> Lista de Frutas  </Text>

      <Imprimir
          dados={frutas}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'aquamarine',
    borderBottomColor: 'silver',
    height: '100vh'
  },
  input: {
    marginVertical: 10,
    padding: 13,
    fontFamily: 'verdana1',
    backgroundColor: 'aqua',
    borderTopEndRadius: 5,
    borderRadius: 12
  },
  titulo: {
    textAlign: 'left',
    color: 'Black',
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "grey",
    textDecorationColor: "white",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  }
});
