import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';



import TopHomeScreen from './topHomeScreen';

export default function DescriptionScreen(){
    const route = useRoute();
    const {image,description,price,title}=route.params || {};
   
   const [loaded,error]=useFonts({
    'Quicksand-Regular':require('../assets/fonts/Quicksand-Regular.otf'),
  });
   
    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <TopHomeScreen/>

            <View style={{marginTop:20,height:100}}>
            
                    <Image source={{uri : image}} style={{height:450,weight:450,borde:1,borderRadius:30}} />
                    <Text style={styles.name}>{title}</Text>
                    <Text> {description.substring(0,50)}</Text>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.description}>{description}</Text>
                    
            </View>
            
            
        </ScrollView>
    )
}



const styles= StyleSheet.create({
    name:{
        fontWeight: 'bold',
        marginBottom:10,
        fontSize:20,
        marginTop:10,
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold',

    },
    description:{
        textAlign: 'justify',
        left:10,
        right:20,
        fontFamily: 'Quicksand-Regular',
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
        fontFamily: 'Quicksand-Regular',
    },
});
