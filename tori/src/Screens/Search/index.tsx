import React from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';

import SearchBar from '~/Components/SearchBar';

const Container = Styled.View`
    margin-top:8px;
`;

const Explain = Styled.Text`
    font-size:50px;
`;

type SearchRouteProp = RouteProp <GiveNTakeNaviParamList, 'Search'>;
interface Props{
    route: SearchRouteProp;
}

const Search = ({route}: Props) => {

    return(
        <Container>
            <Explain>Search</Explain>
        </Container>
    );
};

export default Search;