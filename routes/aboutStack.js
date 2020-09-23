import About from "../screens/about";
import { createStackNavigator } from "react-navigation-stack"
import Header from "../shared/header";
import React from "react";

const screens={
    About:{
        screen:About,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=> <Header navigation={navigation} title='About'/>,
            }
        }  
    }  
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'coral',height:60}

    }
});

export default AboutStack;