import {View,Text,StyleSheet,Image, Alert,FlatList,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect,useState } from 'react';


export default function CartScreen({route,navigation}){
    const [keys,setKeys]=useState();
    const [individualItems,setItems]=useState([]);
    


    useEffect(()=>{
    const retrieveAllItems =async()=>{
        let keys=[];
       
        try{
            const result=[];
            keys =await AsyncStorage.getAllKeys();
            setKeys(keys);
            
            for(const i of keys){
                const value=await AsyncStorage.getItem(i);
                result[i]=JSON.parse(value);
            }
            setItems(result);
            
            
    }catch(e){
        Alert.alert('Error getting selected data')
        console.log('Error getting selected data')
       
    }
};
    retrieveAllItems();
    // AsyncStorage.clear();

    },[]);

//FUNCTION TO REMOVE ITEM SELECTED
    const removeItem = async(k)=>{
        try{
        await AsyncStorage.removeItem(k);
        Alert.alert('REMOVED');
        setItems((prevItem) => prevItem.filter((item) => item.ID !== k))
        return true;
        }catch(e){
            Alert.alert(e.message);
            return false;
        }
    }
   
//DATA FOR FLATLIST 
    const Data=[];
    for(var i=1;i<9;i++){
        Data.push(individualItems[i]);
        
    }
    console.log(Data);


    return(
        
        <View style={{backgroundColor:'white'}}>
            <View style={{flexDirection:'row',gap:100,marginTop:50,marginLeft:140}}>
                <Image source={require('../assets/Logo.png')}/>
                <Image source={require('../assets/Search.png')}/>
            </View>
            <Image source={require('../assets/checkOut.png')} style={{marginTop:40,marginLeft:44}}/>
            
        
            <FlatList 
                data={Data}
                renderItem={({ item })=>{
                    if(item?.Description !== undefined && item?.Picture !== undefined && item?.name!== undefined && item?.Price !== undefined){
                        return(
                            <View style={styles.container}>
                                <Image source={{uri:item?.Picture}} style={{marginLeft:5,height:200,width:200}}/>
                                <View style={{flexDirection:'column'}}>
                                <View style={{marginTop:0,height:100,width:100}}>
                                    <Text style={{fontWeight:'bold',marginTop:10,fontSize:14}}>{item?.name}</Text>
                                    <Text style={{marginTop:10,color:'#808080',fontSize:12,}}>{item?.Description}</Text>
                                    <Text style={{marginTop:10,color:'orange',fontSize:12, }}>${item?.Price}</Text>
                                </View>
                               
                                    
                                    <Pressable onPress={()=>removeItem(item?.ID)} style={{marginTop:40,marginLeft:130}}>
                                        <Image source={require("../assets/remove.png")}/>
                                    </Pressable>
                                </View>  
                            </View>
                        )
                    }else if(item?.ID === undefined){
                        
                    return(
                        <View>
                            {/* <Image source={item?.Picture}/>
                            <View style={styles.text}>
                                <Text>DATA NOT ACCESSED</Text>
                                <Text>{item?.name}</Text>
                                <Text>{item?.Description}</Text>
                                <Text>{item?.Price}</Text>
                            </View > */}
                           
                            
                            
                            
                        </View>
                    )
                    }
                }}
            /> 

        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap:20,
        marginTop:50,
        marginBottom:50,
       
       
    },
   
})
