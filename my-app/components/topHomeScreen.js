import {View,Text,StyleSheet,Image} from 'react-native';

export default function TopHomeScreen(){
    return(
        <View  style={styles.container}>
            <Image source={require('../assets/Menu.png')}/>
            <Image  source={require('../assets/Logo.png')}/>
            <View style={styles.searchBag}>
                <Image source={require('../assets/Search.png')}/>
                <Image source={require('../assets/shoppingBag.png')}/>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:90,
        marginLeft:20,
    },
    searchBag:{
        flexDirection:'row',
        gap:15,
    }
})