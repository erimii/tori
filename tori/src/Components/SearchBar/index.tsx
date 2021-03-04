import React from 'react';
import Styled from 'styled-components/native';

import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';

const Container = Styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  background-color: #FEFFFF;
`;

const SearchBar = () => {
  return (
    <Container>
      <Input style={{flex:1, marginLeft:8, height: 40,}} placeholder="검색" />
      <IconButton iconName="search" />
    </Container>
  );
};
export default SearchBar;
