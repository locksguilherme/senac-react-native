import { SafeAreaView, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


export default function Imprimir(props) {
    return (
        <SafeAreaView style={styles.input}>
            <FlatList style={styles.input}
                data={props.dados}
                renderItem={({item}) => <Text>{item}</Text>}
                keyExtractor={item => item}
            />
        </SafeAreaView>
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
        textAlign: 'center',
        color: 'Black',
        fontSize: 30,
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
  

