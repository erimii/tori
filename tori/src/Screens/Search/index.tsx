import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';

const Body = Styled.Text`
  font-size:77px;
`;

/* type NavigationProp = StackNavigationProp <SearchTabParamList, 'Search'>;
interface Props{
    navigation: NavigationProp;
} */

const Search = () => {

    return(
        <Body>
            Search
        </Body>
    );
};

export default Search;