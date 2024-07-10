import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

import Move from './moveToCartButton';

export default function Item(props){
    console.log(props.name);
    console.log(props.key);
    return(
        <View style={styles.container}>
            
            <Image source={props.image} />
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.price}>{props.price}</Text>
            <Move name={props.name} description={props.description} image={props.image} price={props.price} keys={props.keys}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{


    },

    name:{
        fontWeight:"bold",
        fontFamily:"Quicksand",
        

    },
    description: {
        fontFamily:"Quicksand",
        fontSize:13,
    },
    price:{
        fontFamily:"Quicksand",
        color:'orange',
        

    }
})

