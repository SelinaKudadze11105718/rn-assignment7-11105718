import React, { useEffect } from 'react';
import { View, Text, Pressable, Image,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Move(props) {
    
    const navigation=useNavigation();
    

    const Name=props.name;
    console.log(Name);

    const Pic=props.image;

    const  Description = props.description;

    const Price =props.price;

    const Id=props.id;

    const ID =String(Id);

    // const Key = props.keys;
    // const keys=String(Key)
  

    const ItemData={
        name:Name,
        Picture:Pic,
        Description:Description,
        Price:Price,
        ID:ID,
    }

    
    const saveItem= async()=>{
        await AsyncStorage.setItem(ID,JSON.stringify(ItemData))
       
    };
    
    

    


    const gotocart= function gotoCart(){
        saveItem();
        return navigation.navigate('Cart');
     }

 
    return (
            <Pressable onPress={gotocart} style={{position:'absolute',left:140,top:210}}>
                    <Image source={require("../assets/add_circle.png")} style={{height:40,width:40}}/>
            </Pressable>
       
        
     )
}