import {View,Text,StyleSheet,Image,ScrollView,FlatList, Alert,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import Move from './moveToCartButton';
import Navigation from './navigation';

export default function Item(props){
    const navigation=useNavigation();
    let [numColumns, setNumColumns] = useState(2);
    const data=props.data;
    
    

   const navigateToDescriptionScreen=(item)=>{
        navigation.navigate('DescriptionScreen',{image:item.image,description:item.description,title:item.title,price:item.price});
   };

    return(
        <View style={styles.container}>
            <FlatList data={data} 
            numColumns={numColumns}
            key={numColumns}
            columnWrapperStyle={{gap:20}}
            renderItem={({ item })=>(
                
                <View style={{flex:1,gap:20}}>
                    <TouchableOpacity onPress={()=>navigateToDescriptionScreen(item)}>
                        <Image source={{uri : item.image}} style={{height:150,weight:150,borde:1,borderRadius:10}} />
                        <Text style={styles.name}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <Move name={item.title} description={item.description} image={item.image} price={item.price} id={item.id}/>
                    </TouchableOpacity>
                </View>
                
               

            )}/>
               
            
        </View>
        
    )
}

const styles= StyleSheet.create({
    container:{


    },

    name:{
        fontWeight:"bold",
        fontFamily:"Quicksand-Bold",
        

    },
    description: {
        fontFamily:"Quicksand",
        fontSize:13,
    },
    price:{
        fontFamily:"Quicksand",
        color:'orange',
        

    }
})

