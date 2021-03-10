import React, {useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';
import Profile from './Profile';
import GnTPreview from './GnTPreview';

const Container = Styled.ScrollView`
    background: #F2F2F2;
    margin-bottom: 42px;
`;

const Explain = Styled.Text`
    font-size:20px;
    margin:5px 9px;
    text-align:center;
`;

const TotalDonation = Styled.View`
    background: #D9D9D9;
    left: 0;
    right: 0;
    bottom:0;
    height: 42px;
    position:absolute;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

type NavigationProp = StackNavigationProp <HomeTabParamList, 'Home'>;
interface Props{
    navigation: NavigationProp;
}

const Home = ({navigation}: Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    iconName="notice"
                    onPress={()=> navigation.navigate('Notice')}
                />
            ),
            headerLeft: () => (
                <IconButton
                    iconName="menu"
                    onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                />
            ),
        });
        }, []);

    return(
        <>
            <Container>
                <Profile
                    grade={'뉴비 기부니'}
                    nickname={'닉네임닉네임'}
                    giv={40}
                    mydonation={30000}
                />
                <GnTPreview
                    title="GnTPreview"
                    onPress={(id: number) => {
                        navigation.navigate('Detail', {
                            id,
                        });
                    }}
                />
                <GnTPreview
                    title="GnTPreview2"
                    onPress={(id: number) => {
                        navigation.navigate('Detail', {
                            id,
                        });
                    }}
                />
            </Container>
            <TotalDonation>
                <Explain>총 기부금</Explain>
            </TotalDonation>
        </>
    );
};

export default Home;