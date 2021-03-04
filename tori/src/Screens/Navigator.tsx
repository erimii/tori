import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '~/Screens/Home';
import GiveNTake from '~/Screens/GiveNTake';
import CustomDrawer from '~/Screens/Drawer';
import Search from '~/Screens/Search';
import SearchBar from '~/Components/SearchBar';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'TORI APP'}}
            />
        </Stack.Navigator>
    )
}

const GiveNTakeTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="GiveNTakeTab"
                component={GiveNTake}
                options={{title: 'GiveNTake'}}
            />
            <Stack.Screen
                name="SearchTab"
                component={Search}
                options={{
                    header:() => <SearchBar />,
                }}
            />
        </Stack.Navigator>
    )
}

/* const SearchTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SearchTab"
                component={Search}
                options={{
                    header:() => <SearchBar />,
                }}
            />
        </Stack.Navigator>
    )
} */

const MainTabs = () =>{
    return(
        <BottomTab.Navigator
            tabBarOptions={{showLabel:false}}> 
            <BottomTab.Screen
                name="Home"
                component={HomeTab}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Image
                            source={
                                focused
                                ? require('~/Images/tabs/ic_home.png')
                                : require('~/Images/tabs/ic_home_outline.png')
                            }
                        />
                    )
                }}
            />
        <BottomTab.Screen
                name="GiveNTake"
                component={GiveNTakeTab}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Image
                            source={
                                focused
                                ? require('~/Images/tabs/ic_profile.png')
                                : require('~/Images/tabs/ic_profile_outline.png')
                            }
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

const MainNavigator = () => {
    return(
        <Drawer.Navigator
            drawerPosition="left"
            drawerContent={(props) => <CustomDrawer props={props} />}>
                <Drawer.Screen name="MainTabs" component={MainTabs} />
            </Drawer.Navigator>
    )
}

export default () => {
    return(
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}
