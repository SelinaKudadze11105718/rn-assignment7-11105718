import {View,Text,StyleSheet,Image} from 'react';


export default function Delivery(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Search.png')}/>

            <View>
                <Text style={[styles.text,{fontSize:20}]}>Free Flat Shipping</Text>
                <Text style={[styles.text,{fontSize:16}]}>Estimated to be delivered on</Text>
                <Text style={[styles.text,{fontSize:16}]}>09/11/2024 - 12/11/2024.</Text>
            </View>

            <Image source={('../assets/Plus.png')}/>

        </View>
    )
};

const styles =StyleSheet.create({
    text:{
        fontFamily:'Quicksand',

    },
    container:{
        flexDirection:'row',
    }
})