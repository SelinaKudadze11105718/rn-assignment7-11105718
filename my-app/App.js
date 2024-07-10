import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import HomeScreen from './components/homeScreen';
import Navigation from './components/navigation';
import CartScreen from "./components/cartScreen";

const Stack= createNativeStackNavigator();

export default function App() {
  const [ fontsLoaded ]=useFonts({
    'Quicksand':require('./assets/fonts/Quicksand-Light.otf'),

  })
  return (
   
      
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown:false  
               }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
      
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});

//  {
//   "fonts":["./assets/fonts/Quicksand-Light.otf"]
// }
