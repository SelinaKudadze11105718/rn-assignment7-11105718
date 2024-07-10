import React, { useEffect } from 'react';
import { View, Text, Pressable, Image,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Move(props) {
    
    const navigation=useNavigation([]);
    

    // const {name}=props.name;
    // console.log(props.name);
    const Name=props.name;
    // console.log(props.name);
    const Pic=props.image;
    // console.log(props.image);
    const  Description = props.description;
    // console.log(props.description);
    const Price =props.price;
    // console.log(props.price);
    const Key = props.keys;
    const keys=String(Key)
    // console.log(props.keys);

    const ItemData={
        name:Name,
        Picture:Pic,
        Description:Description,
        Price:Price,
        Key: keys,
    }

    
    const saveItem= async()=>{
        await AsyncStorage.setItem(keys,JSON.stringify(ItemData))
       
    };
    
    

    


    const gotocart= function gotoCart(){
        
        saveItem();
        // retrieveAllItems();

        return navigation.navigate('Cart',{name:Name,image:Pic,description:Description,price:Price,Key:Key});
        

     }

 
    return (
        // <View>
        //     <Text>SOME</Text>
        // </View>


            <Pressable onPress={gotocart} style={{position:'absolute',left:135,top:190}}>
                    <Image source={require("../assets/add_circle.png")}/>
            </Pressable>
       
        
     )
}