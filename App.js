import React, { Component } from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "react-native/satck"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./HomeScreen";

const Stack = CreateStackNavigator();
export default class App extends Component{
    render(){
        return(
        <View style={{ flex:1 }}>
            <NavigationContainer>
                <Stack.Nanigator>
                    <Stack.Screen name='Home' Component={HomeScreen}/>
                    <Stack.Screen name='Login' Component={LoginScreen}/>
                </Stack.Nanigator>
            </NavigationContainer>
        </View>
        )
    }
}
