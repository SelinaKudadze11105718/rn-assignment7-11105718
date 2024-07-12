import {View,Text,StyleSheet,Image} from 'react-native';
import { useFonts } from 'expo-font';

export default function OurStory(){

    const [loaded,error]=useFonts({
        'Quicksand-Bold':require('../assets/fonts/Quicksand-Bold.otf'),
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
        gap:180,
        marginTop:20,
    },
    filter:{
        flexDirection: 'row',
        gap:5,
    },
    text:{
        fontSize:25,
        fontFamily:'Quicksand-Regular',
        marginBottom:20,
        fontWeight:'bold',
    }


})