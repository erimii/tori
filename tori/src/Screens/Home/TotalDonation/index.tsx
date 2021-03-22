import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    background: #D9D9D9;
    left: 0;
    right: 0;
    bottom:0;
    height: 42px;
    position:absolute;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const Explain = Styled.Text`
    font-size:20px;
    margin:5px 9px;
    text-align:center;
`;

const TotalDonation = () => {

    return(
        <Container>
            <Explain>총 기부금</Explain>
        </Container>
    );
};

export default TotalDonation;