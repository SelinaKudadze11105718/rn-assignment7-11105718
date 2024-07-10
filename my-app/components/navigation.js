import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";


import HomeScreen from './homeScreen';
import CartScreen from "./cartScreen";


const Stack= createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}