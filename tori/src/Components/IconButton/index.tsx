// 타입스크립트로 정의한 Props를 통해, 부모 컴포넌트로부터 지정된 아이콘 이미지 이름을 전달받아, 해당 아이콘 이미지를 표시하는 컴포넌트
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    padding: 8px;
`;
const Icon = Styled.Image``;

interface Props {
    iconName:
        | 'menu'
        | 'search';
    style?: object;
    onPress?:() => void;
}

const IconButton = ({ iconName, style, onPress }: Props) => {
    const imageSource ={
        menu: require('~/Images/ic_menu.png'),
        search: require('~/Images/ic_search.png'),
    };

    return (
        <Container
            style={style}
            onPress={() => {
                if (onPress && typeof onPress === 'function'){
                    onPress();
                }
            }}>
            <Icon source={imageSource[iconName]} />
            </Container>
    );
};

export default IconButton;