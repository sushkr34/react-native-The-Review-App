import React,{useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    const [reviews,setReviews]= useState([
        {title:'Data Structure and algorithm',rating:5,body:'dsa by java',key:'1'},
        {title:'React.Js and redux ',rating:8,body:'Html /css / Javascript',key:'2'},
        {title:'Node JS and express',rating:8,body:'express / mongoDb',key:'3'},
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList 
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

