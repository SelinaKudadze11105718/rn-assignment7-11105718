import {View,Text,StyleSheet,Image,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TopHomeScreen(){
    const navigation = useNavigation();
    return(
        <View  style={styles.container}>
            <Pressable onPress={()=>{
                navigation.toggleDrawer();
            }}>
                <Image source={require('../assets/Menu.png')}/>
            </Pressable>
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
        marginTop:50,
    },
    searchBag:{
        flexDirection:'row',
        gap:15,
    }
})