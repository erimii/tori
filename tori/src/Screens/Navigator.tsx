import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '~/Screens/Home';
import GiveNTake from '~/Screens/GiveNTake';
import Notice from '~/Screens/Notice';
import Detail from '~/Screens/Detail';
import GoodsShop from '~/Screens/GoodsShop';
import MyPage from '~/Screens/MyPage';
import BrandDetail from '~/Screens/BrandDetail';
import Question from '~/Screens/Question';


const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'Home'}}
            />
            <Stack.Screen
                name="Notice"
                component={Notice}
                options={{title: '알림'}}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{title: 'Detail'}}
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
                options={{title: '기부앤테이크'}}
            />
            <Stack.Screen
                name="Notice"
                component={Notice}
                options={{title: '알림'}}
            />
            {/* <Stack.Screen
                name="Detail"
                component={Detail}
                options={{title: 'Detail'}}
            /> */}
            <Stack.Screen
                name="BrandDetail"
                component={BrandDetail}
                options={{title: 'BrandDetail'}}
            />
        </Stack.Navigator>
    )
}

const GoodsShopTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="GoodsShop"
                component={GoodsShop}
                options={{title: 'GoodsShop'}}
            />
        </Stack.Navigator>
        
    )
}

const MyPageTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="MyPage"
                component={MyPage}
                options={{title: 'MyPage'}}
            />
            <Stack.Screen
                name="Notice"
                component={Notice}
                options={{title: '알림'}}
            />
            <Stack.Screen
                name="Question"
                component={Question}
                options={{title:'자주묻는 질문'}}
            />
        </Stack.Navigator>
        
    )
}

const DetailNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{title:'디테일'}}
            />
        </Stack.Navigator>
    )
}

const MainBottomTabs = () =>{
    return(
        <>
        <BottomTab.Navigator
            /* tabBarOptions={{showLabel:false}} */> 
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
            <BottomTab.Screen
                name="GoodsShop"
                component={GoodsShopTab}
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
            <BottomTab.Screen
                name="MyPage"
                component={MyPageTab}
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
    </>
    );
};

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainBottomTabs"
                component={MainBottomTabs}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{title:'이건 또 뭘까'}}
            />
        </Stack.Navigator>
    )
}

export default () => {
    return(
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    )
}
