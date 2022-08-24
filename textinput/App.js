import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput,TouchableOpacity, View, Text } from "react-native";

const UselessTextInput = () => {
  const [text, setText] = useState('');
  const [frutas,setFrutas] = useState(["maça","banana", "figo"])
  
const addFruta = () =>{
  if (text == ''){
    return alert ('Insira algum dado')
  } else {setFrutas((f)=> [...f,text]),
  setText(() => [''])}
}
  
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={addFruta}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>
      
      <View style={styles.lista}>
      {
        frutas.map((f,i)=> <Text key={i}>{f}</Text>)
      }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lista:{
    backgroundColor: 'powderblue',
    marginVertical: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 4
  },
  container:{
    margin: 10,

  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 4
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  }
});

export default UselessTextInput;