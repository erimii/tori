import React from 'react';
import Styled from 'styled-components/native';
import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerContentOptions
} from '@react-navigation/drawer';

const Body = Styled.Text`
  font-size:50px;
`;

interface Props{
    props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({props}: Props) => {
    return(
        <DrawerContentScrollView {...props}>
            <Body>
            Menu
            </Body>
        </DrawerContentScrollView>
    );
};

export default Drawer;