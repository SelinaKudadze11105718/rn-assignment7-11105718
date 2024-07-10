import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

// import { createNativeStackNavigator } from "@react-navigation/native-stack";




import HomeScreen from './components/homeScreen';
import Navigation from './components/navigation';
import CartScreen from "./components/cartScreen";
import DescriptionScreen from "./components/descriptionScreen";

// const Stack= createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  return (
      <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{
              headerShown:false
               }}>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Cart" component={CartScreen}/>
                <Drawer.Screen name="DescriptionScreen" component={DescriptionScreen}/>
            </Drawer.Navigator>
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
