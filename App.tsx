import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Muvinn from "./src/screens/MuvinnHome";
import CadastroImovel from "./src/screens/cadastroImovel";
import Listagem from "./src/screens/Listagem";
// import EditarImovel from "./src/screens/EditarImovel";

const Stack = createStackNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Muvinn' component={Muvinn}
                options={{ headerShown: false }} />
                <Stack.Screen name='Listagem' component={Listagem}
                options={{ headerShown: false }} />
                   <Stack.Screen name='Cadastro' component={CadastroImovel}
                options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;