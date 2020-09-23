import React,{useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import Card from '../shared/card';
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    const [reviews,setReviews]= useState([
        {title:'Data Structure and algorithm',rating:3,body:'dsa by java',key:'1'},
        {title:'React.Js and redux ',rating:4,body:'Html /css / Javascript',key:'2'},
        {title:'Node JS and express',rating:4,body:'express / mongoDb',key:'3'},
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList 
            data={reviews}
            renderItem={({item})=>(
                
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                    <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    )
}

