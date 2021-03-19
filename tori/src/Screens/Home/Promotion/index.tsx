import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    margin-top:8px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 95%
    height: 72px;
    margin-left:10px;
    align-items: center;
    justify-content: center;
`;

const Explain = Styled.Text`
    font-size:20px;
    margin:5px 9px;
`;

const Promotion = () => {

    return(
        <Container>
            <Explain>프로모션 영역</Explain>
        </Container>
    );
};

export default Promotion;