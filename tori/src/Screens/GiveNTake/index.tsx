import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';

const Body = Styled.Text`
  font-size:77px;
`;

type NavigationProp = StackNavigationProp <GiveNTakeTabParamList, 'GiveNTake'>;
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
        <Body>
            GiveNTake
        </Body>
    );
};

export default GiveNTake;