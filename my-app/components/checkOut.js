import {View,Text,Image,Pressable,StyleSheet,FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useFonts } from 'expo-font';


export default function CheckOut(props){
    const [ fontsLoaded ]=useFonts({
        'Quicksand':require('./assets/fonts/Quicksand-Light.otf'),
    
      })
    const {items} = props;
   
    // const Data=[];
    // for (var i=1;i<9;i++){
    //     Data.push(JSON.parse(items)[i]);
    // }
    console.log(Data);
    console.log(items);
    console.log(typeof items);

    
  
    //for remove button
 


   





    return(
       
        <View>
           
        </View>
    )
}
const styles= StyleSheet.create({})