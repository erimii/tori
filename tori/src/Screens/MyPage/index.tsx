import React, {useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import IconButton from '~/Components/IconButton';
import MyPageProfile from './MyPageProfile';

const Container = Styled.ScrollView`
`;

const MyPageBodyContainer = Styled.View`
    padding: 8px 16px;
`;
const RowContainer = Styled.View`
`;
const ColumnConstainer = Styled.View``;

const IconButtonContainer = Styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
const Title = Styled.Text`
  font-size: 12px;
  color: #979797;
`;
const IconContainer = Styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;
const Icon = Styled.Image`
`;
const Label = Styled.Text`
    font-size: 12px;
`;
const Button = Styled.TouchableOpacity`
    margin-top:10px;
`;


type NavigationProp = StackNavigationProp <MyPageNaviParamList, 'MyPage'>;
interface Props{
    navigation: NavigationProp;
}

const MyPage = ({navigation}: Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    iconName="notice"
                    onPress={()=> navigation.navigate('Notice')}
                />
            ),
        });
        }, []);
    return(
        <Container>
            <MyPageProfile
                    grade={'뉴비 기부니'}
                    nickname={'닉네임닉네임'}
                    giv={40}
                />
            <MyPageBodyContainer>
                <Title>기부</Title>
                <RowContainer>
                    <IconButtonContainer>
                        <IconContainer>
                            <Icon source={require('~/Images/ic_search.png')} />
                            <Label>기부 내역</Label>
                        </IconContainer>
                        <IconContainer>
                            <Icon source={require('~/Images/ic_search.png')} />
                            <Label>기부 내역</Label>
                        </IconContainer>
                        <IconContainer>
                            <Icon source={require('~/Images/ic_search.png')} />
                            <Label>기부 내역</Label>
                        </IconContainer>
                        <IconContainer>
                            <Icon source={require('~/Images/ic_search.png')} />
                            <Label>기부 내역</Label>
                        </IconContainer>
                    </IconButtonContainer>
                </RowContainer>

                <Title>고객센터</Title>
                <ColumnConstainer>
                    <Button onPress={() =>{}}>
                        <Label>공지사항</Label>
                    </Button>
                    <Button onPress={() =>{
                        navigation.navigate('Question')
                    }}>
                        <Label>문의/건의</Label>
                    </Button>
                </ColumnConstainer>
                <Title>설정</Title>
                <ColumnConstainer>
                    <Button onPress={() =>{}}>
                        <Label>앱 설정</Label>
                    </Button>
                </ColumnConstainer>
            </MyPageBodyContainer>
        </Container>
    );
};

export default MyPage;