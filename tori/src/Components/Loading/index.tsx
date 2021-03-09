import React from 'react';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #F3A100;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="balck" size="large" />
    </Container>
  );
};

export default Loading;