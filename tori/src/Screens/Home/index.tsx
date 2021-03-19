import React, {useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Animated} from 'react-native';

import IconButton from '~/Components/IconButton';
import Profile from './Profile';
import GnTPreview from './GnTPreview';
import Promotion from './Promotion';
import TotalDonation from './TotalDonation';

const Container = Styled.ScrollView`
    background: #F2F2F2;
`;


type NavigationProp = StackNavigationProp <HomeTabParamList, 'Home'>;
interface Props{
    navigation: NavigationProp;
}

const Home = ({navigation}: Props) => {
    const scrollY = new Animated.Value(0)
    const translateY = scrollY.interpolate({
        inputRange:[0,50],
        outputRange:[0,30]
    })
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    iconName="notice"
                    onPress={()=> navigation.navigate('Notice')}
                />
            ),
        });
        }, []);

    return(
        <>
            <Container
            onScroll={(e)=>{
                scrollY.setValue(e.nativeEvent.contentOffset.y)
                console.log(scrollY)
            }}>
                <Profile
                    grade={'뉴비 기부니'}
                    nickname={'닉네임닉네임'}
                    giv={40}
                    mydonation={30000}
                />
                <Promotion />
                <GnTPreview
                    title="GnTPreview"
                    onPress={(id: number) => {
                        navigation.navigate('Detail', {
                            id,
                        });
                    }}
                />
            </Container>
            <Animated.View
                style={{
                    transform:[
                        {translateY:translateY}
                    ]
                }}>
                <TotalDonation />
            </Animated.View>
            
        </>
    );
};

export default Home;