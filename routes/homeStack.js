import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from '../screens/reviewDetails'
import About from '../screens/about'
import { createStackNavigator } from "react-navigation-stack"

const screens={
    Home:{
        screen:Home,
        navigationOptions:{
            title:'BookZone',
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

export default createAppContainer(HomeStack);