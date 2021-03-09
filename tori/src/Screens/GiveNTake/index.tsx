import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';
import Brand from './Brand';

const Container = Styled.SafeAreaView`
`;

const Explain = Styled.Text`
    font-size:50px;
`;

type NavigationProp = StackNavigationProp <GiveNTakeNaviParamList, 'GiveNTake'>;
interface Props{
    navigation: NavigationProp;
}

const GiveNTake = ({navigation}: Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    iconName="search"
                    onPress={()=> navigation.navigate('Search')}
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
        <Container>
            <Explain>GiveNTake</Explain>
            <Brand
                title="Brand"
                onPress={(id: number) => {
                    navigation.navigate('BrandDetail', {
                        id,
                    });
                }}
            />
        </Container>
    );
};

export default GiveNTake;