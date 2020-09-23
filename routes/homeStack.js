import Home from "../screens/home";
import ReviewDetails from '../screens/reviewDetails'
import { createStackNavigator } from "react-navigation-stack"
import Header from "../shared/header";
import React from "react";


const screens={
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=> <Header navigation={navigation} title='Book Zone'/>,
            }
        }       
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Book Details',
           
        }
    }  
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'coral',height:60}

    }
});

export default HomeStack;