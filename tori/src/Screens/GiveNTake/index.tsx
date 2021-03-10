import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';
import BrandList from './BrandList';
import ProductList from './ProductList';

const Container = Styled.ScrollView`
    
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
        <Container>
            <BrandList
                title="BrandList"
                onPress={(id: number) => {
                    navigation.navigate('BrandDetail', {
                        id,
                    });
                }}
            />
            <ProductList
                title="ProductList"
                onPress={(id: number) => {
                    navigation.navigate('Detail', {
                        id,
                    });
                }}
            />
        </Container>
    );
};

export default GiveNTake;