import 'react-native-gesture-handler';
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView,DrawerItem,DrawerItemList } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { useFonts } from 'expo-font';

// import { createNativeStackNavigator } from "@react-navigation/native-stack";




import HomeScreen from './components/homeScreen';
import Navigation from './components/navigation';
import CartScreen from "./components/cartScreen";
import ProductDetailScreen from "./components/productDetailScreen";
import TopHomeScreen from './components/topHomeScreen';

// const Stack= createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      
        <DrawerItem label="" onPress={()=>{props.navigation.dispatch(DrawerActions.closeDrawer())}} icon={()=>{return(<Image source={require("./assets/Close.png")}/>)}}/>
        <View style={{flexDirection:'column'}}>
          <Text style={{left:40,fontFamily:'Quicksand'}}>SELINA KUDADZE</Text>
          <View style={{flex:1,height:1,backgroundColor:'orange',marginLeft:25,marginRight:60,marginBottom:15,width:150}}></View>
        </View>
        <DrawerItemList {...props} />
     
    </DrawerContentScrollView>
    );
}

export default function App() {
  const [loaded,error]=useFonts({
    'Quicksand-Regular':require('./assets/fonts/Quicksand-Regular.otf'),
  });

  return (
      <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{
              headerShown:false,
              drawerStyle:{
                font:'Quicksand-Regular'},
               }}
               drawerContent={(props) => <CustomDrawerContent {...props} />}
>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Cart" component={CartScreen}/>
                <Drawer.Screen name="Product Detail" component={ProductDetailScreen}/>
                
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
