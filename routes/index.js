
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/home";
import { Carrinho } from "../pages/carrinho";

const Stack=createNativeStackNavigator()

export function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Carrinho"
                component={Carrinho}
                options={{
                    headerTitle:'Meu carrinho'
                }}
            />
        </Stack.Navigator>
    )
}