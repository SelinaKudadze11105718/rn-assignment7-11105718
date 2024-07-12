import {View,Text,StyleSheet,ScrollView,Pressable,Image, Alert,ActivityIndicator} from 'react-native';
import {useState,useEffect} from 'react';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


import Item from './item';
import TopHomeScreen from './topHomeScreen';
import OurStory from './ourStory';
import CartScreen from './cartScreen';

export default function HomeScreen(){
    const navigation = useNavigation();
    let [isLoading,setIsLoading]=useState(true);
    let [error,setError]=useState();
    let [response,setResponse]=useState();


    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then((result)=>{
                setIsLoading(false);
                setResponse(result);
            },
        (error)=>{
            setIsLoading(false);
            setError(error);
        })
    },[])

    const getContent=()=>{
        if(isLoading){
            return <ActivityIndicator size ="large"/>;

        }  
    };
    
  
    return(
        <View style={{marginTop:20}}>
            {getContent()}
            <TopHomeScreen/>
            <OurStory/>
            <Item data={response} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:14,
        marginLeft:10,
        marginTop:20,
    }
})