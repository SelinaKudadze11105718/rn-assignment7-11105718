import {View,Text,StyleSheet,Image} from 'react-native';

export default function OurStory(){
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
        fontFamily:'../assets/fonts(reactNative)/Alterglam-UltraLightItalic.otf',
        fontSize:20,
        fontFamily:'Quicksand-Light',
    }


})