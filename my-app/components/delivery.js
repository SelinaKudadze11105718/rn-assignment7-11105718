import {View,Text,StyleSheet,Image} from 'react-native';


export default function Delivery(){
    return(
        <View>
            <View style={{flex:1,height:1,backgroundColor:'#808080',marginLeft:25,marginRight:60,marginTop:40,marginBottom:15}}/>
            <View style={styles.container}>
            <Image source={require('../assets/Shipping.png')}/>

            <View>
                <Text style={[styles.text,{fontSize:20,fontFamily:'Quicksand-Regular'}]}>Free Flat Shipping</Text>
                <Text style={[styles.text,{fontSize:16,color:'#808080'}]}>Estimated to be delivered on</Text>
                <Text style={[styles.text,{fontSize:16,color:'#808080'}]}>09/11/2024 - 12/11/2024.</Text>
            </View>
            <Image source={require('../assets/Up.png')}/>

        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Quicksand',
        marginBottom:10,
    },
    container:{
        flexDirection: 'row',
        gap:20,
        marginLeft:20,
        marginTop:20,
    }
})



// const styles =StyleSheet.create({
//     text:{
//         fontFamily:'Quicksand',

//     },
//     container:{
//         flexDirection:'row',
//     }
// })