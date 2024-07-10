import {View,Text,StyleSheet,Image} from 'react-native';
import { useFonts } from 'expo-font';

export default function OurStory(){

    const [loaded,error]=useFonts({
        'Quicksand-Regular':require('../assets/fonts/Quicksand-Regular.otf'),
      });

    return(
        <View style={styles.container}>
            <Text style={styles.text}>OUR STORY</Text>
            <View style={styles.filter}>
                <Image source={require('../assets/Listview.png')}/>
                <Image source={require('../assets/Filter.png')}/>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap:200,
        marginTop:20,
    },
    filter:{
        flexDirection: 'row',
        gap:10,
    },
    text:{
        fontSize:25,
        fontFamily:'Quicksand-Regular',
        marginBottom:20,
    }


})