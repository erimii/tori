import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 2px;
  align-items: center;
  justify-content: center;
  width: 80%
`;
const Label = Styled.Text`
  font-size: 16px;
  color: #797979;
  font-weight: bold;
  text-align: center;
`;
const TabImage = Styled.Image`
  margin-top: 9px;
`;

interface Props {
  selected: boolean;
  label?: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
}

const Tab = ({ selected, label, imageSource, onPress }: Props) => {
  let color: string = selected ? '#292929' : '#929292';

  return (
    <Container
      activeOpacity={1}
      style={{ borderColor: color }}
      onPress={onPress}>
      {label && <Label style={{ color: color }}>{label}</Label>}
      {imageSource && <TabImage source={imageSource} />}
    </Container>
  );
};

export default Tab;