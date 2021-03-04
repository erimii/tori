import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/Navigator';
import Styled from 'styled-components/native';

const Body = Styled.Text`
  font-size:105px;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="default" />
      <Navigator />
    </Fragment>
  );
};
export default App;