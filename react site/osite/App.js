import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/componentes/Cadastro';
import Home from './src/componentes/Home'
import Consulta from './src/componentes/Consulta'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name= "home"
                component={Home}
                options={{title:'Welcome'}}
                />
                <Stack.Screen
                name= "cadastro"
                component={Cadastro}
                />
                <Stack.Screen
                name= "consulta"
                component={Consulta}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}