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
        <View style={{backgroundColor:'white'}}>
            <TopHomeScreen/>

            <View style={{marginTop:20,height:100}}>
            
                    <Image source={{uri : image}} style={{height:350,weight:350,borde:1,borderRadius:30}} />
                    <Text style={styles.name}>
                        {title.substring(0,20)}
                        {'\n'}
                        {title.substring(20,40)}
                        {'\n'}
                        {title.substring(40)}
                        
                       </Text>
                    <Image source={require('../assets/Export.png')} style={{position:'absolute',left:340,top:420}}/>
                    <Text style={{marginRight:20,fontFamily:'Quicksand',fontSize:14}}> {description.substring(0,50)}</Text>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={{textAlign:'left',marginLeft:10,fontSize:15,fontFamily:'Quicksand-Bold'}}>DESCRIPTION</Text>
                    <Text style={styles.description}>{description}</Text>
                    
            </View>
            <View style={styles.bottom}>
                <Image source={require('../assets/Plus.png')}/>
                <Text style={{color:'white',fontFamily:'Quicksand',textAlign:'center'}}>ADD TO BASKET </Text>
                <Image source={require('../assets/Heart.png')} style={{position:'absolute',left:340}}/>

            </View>
            
            
        </View>
    )
}



const styles= StyleSheet.create({
    name:{
        fontWeight: 'bold',
        marginBottom:10,
        fontSize:18,
        marginTop:10,
        textAlign: 'left',
        fontFamily: 'Quicksand-Bold',
        marginLeft:10,

    },
    description:{
        textAlign: 'left',
        left:10,
        marginRight:40,
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
        textAlign: 'left',
        fontFamily: 'Quicksand-Regular',
    },
    bottom:{
        backgroundColor:'#555555',
        height:60,
        width:400,
        position: 'relative',
        top:550,
        flexDirection:'row',
        gap:40,
    }
});
