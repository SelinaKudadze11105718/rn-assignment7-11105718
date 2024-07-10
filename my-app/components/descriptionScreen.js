import {View,Text,Image,StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';



import TopHomeScreen from './topHomeScreen';

export default function DescriptionScreen(){
    const route = useRoute();
    const {image,description,price,title}=route.params || {};
   console.log(image);
   console.log(price);
   console.log(description);
   console.log(title);
   
    return(
        <View style={{backgroundColor:'white'}}>
            <TopHomeScreen/>

            <View style={{marginTop:20,height:100}}>
            
                    <Image source={{uri : image}} style={{height:250,weight:250,borde:1,borderRadius:30}} />
                    <Text style={styles.name}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.description}>{description}</Text>
                    
            </View>
            
            
        </View>
    )
}



const styles= StyleSheet.create({
    name:{
        fontWeight: 'bold',
        marginBottom:10,
        fontSize:20,
        marginTop:10,
        textAlign: 'center',

    },
    description:{
        textAlign: 'justify',
        left:10,
        right:20,
        
        marginBottom:10,
        fontSize:16,
        marginTop:10,
    },

    price:{
        color:'orange',
        marginBottom:10,
        marginLeft:5,
        fontSize:20,
        marginTop:10,
        textAlign: 'center',
    },
});
