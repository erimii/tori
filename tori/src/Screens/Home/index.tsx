import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';

const Body = Styled.Text`
  font-size:77px;
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
        <Body>
            Home
        </Body>
    );
};

export default Home;