import {View,Text,StyleSheet,ScrollView,Pressable,Image, Alert,ActivityIndicator} from 'react-native';
import {useState,useEffect} from 'react';


import Item from './item';
import TopHomeScreen from './topHomeScreen';
import OurStory from './ourStory';
import CartScreen from './cartScreen';

export default function HomeScreen({navigation}){
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
            
            
                {/* <View style={styles.container}>
                    <Item name={"Office Wear"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress1.png")} keys={"1"} />
                    <Item name={"black"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress2.png")} keys={"2"}/>
                </View>

                <View style={styles.container}>
                    <Item name={"Church Wear"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress3.png")}  keys={"3"}/>
                    <Item name={"Lamerei"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress4.png")}  keys={"4"} />
                </View>

                <View style={styles.container}>
                    <Item name={"21WN"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress5.png")}  keys={"5"}/>
                    <Item name={"Lopo"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress6.png")}  keys={"6"} />
                </View>

                <View style={styles.container}>
                    <Item name={"21WN"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress7.png")}  keys={"7"} />
                    <Item name={"lame"} description={"reversible angora cardigan"} price={"$120"} image={require("../assets/dress3.png")}  keys={"8"}/>
                </View> */}
               
                
                
           
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