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



/*
지금은 안쓰지만,,, 나중에 쓰겠지,,,
navigatior.tsx에
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerTitle:() => <SearchBar />,
                }}
            />

검색아이콘 넣을 때
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    iconName="search"
                    onPress={()=> navigation.navigate('Search')}
                />
            ),
        });
        }, []);
 */