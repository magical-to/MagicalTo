import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator >  
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default HomeStack;