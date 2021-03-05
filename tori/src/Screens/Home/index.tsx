import React, {useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import axios from "axios";

import IconButton from '~/Components/IconButton';
import Profile from './Profile';
import LatestOrder from './LatestOrder';

const Container = Styled.ScrollView`
    background:pink;
`;

const Explain = Styled.Text`
    font-size:40px;
    margin:5px 9px;
`;

type NavigationProp = StackNavigationProp <HomeTabParamList, 'Home'>;
interface Props{
    navigation: NavigationProp;
}

const Home = ({navigation}: Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <IconButton
                    iconName="menu"
                    onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                />
            ),
        });
        }, []);

    return(
        <Container>
            <Explain>Home</Explain>
            <Profile
                posts={3}
                follower={2}
                following={3}
            />
            <LatestOrder
                title="Latest Order"
                onPress={(id: number) => {
                    navigation.navigate('Detail', {
                        id,
                    });
                }}
            />
        </Container>
    );
};

export default Home;