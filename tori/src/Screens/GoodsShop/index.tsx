import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';

const Container = Styled.SafeAreaView`
`;

const Explain = Styled.Text`
    font-size:50px;
`;

type NavigationProp = StackNavigationProp <GoodsShopNaviParamList, 'GoodsShop'>;
interface Props{
    navigation: NavigationProp;
}

const GoodsShop = ({navigation}: Props) => {
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
            <Explain>GoodsShop</Explain>
        </Container>
    );
};

export default GoodsShop;