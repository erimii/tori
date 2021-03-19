import React, {useLayoutEffect, useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import IconButton from '~/Components/IconButton';

const Container = Styled.SafeAreaView`
    margin:17px;
    flex:1;
`;
const Title = Styled.Text`
  font-size: 16px;
  color: #000000;
  margin:5px;
`;
const Label = Styled.Text`
    font-size: 15px;
    margin-top:6px;
    width:93%;
`;

const QuestionContainer = Styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    background:white;
    height:60px;
    align-items: center;
    border: 1px solid #E5E5E5;
`;
const AnswerContainer = Styled.View`
    flex-direction:row;
    justify-content:space-between;
    border: 1px solid #E5E5E5;
    padding:10px;
`;

type NavigationProp = StackNavigationProp <MyPageNaviParamList, 'Question'>;
interface Props{
    navigation: NavigationProp;
}

const Question = ({navigation}: Props) => {
    const [questionFirst, setQuestionFirst] = useState(false);
    const [questionSecond, setQuestionSecond] = useState(false);
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

    const First = () => {
        setQuestionFirst(!questionFirst);
    };
    const Second = () => {
        setQuestionSecond(!questionSecond);
    };
    
    return(
        <Container>
            <QuestionContainer onPress={First}>
                <Title>
                    Q. 기부니? 기부하니? 기브? 다시 정리해주세요!
                </Title>
                {questionFirst ?
                    <IconButton
                        iconName="search"
                        onPress={First}
                    />
                    
                    :
                    <IconButton
                        iconName="menu"
                        onPress={First}
                    />
                }
            </QuestionContainer>
            {questionFirst &&
                <AnswerContainer>
                    <Title>
                            A
                    </Title>

                    <Label>

                            기부니 : '기부니가좋다'에서 기부하는 모든 개인 고객 
                            기부하니 : '기부니가좋다'와 함께하는 사회적 가치를 지닌 기업 
                            기브 : '기부니가좋다'에서 사용할 수 있는 재화. 1기브 = 110원(VAT 포함) 

                    </Label>
                </AnswerContainer>
            }
            <QuestionContainer onPress={Second}>
                <Title>
                    Q. 두 번째 질문
                </Title>
                {questionSecond ?
                    <IconButton
                        iconName="search"
                        onPress={Second}
                    />
                    
                    :
                    <IconButton
                        iconName="menu"
                        onPress={Second}
                    />
                }

            </QuestionContainer>
            {questionSecond &&
                <AnswerContainer>
                    <Title>
                            A
                    </Title>

                    <Label>

                            기부니 : '기부니가좋다'에서 기부하는 모든 개인 고객 
                            기부하니 : '기부니가좋다'와 함께하는 사회적 가치를 지닌 기업 
                            기브 : '기부니가좋다'에서 사용할 수 있는 재화. 1기브 = 110원(VAT 포함) 

                    </Label>
                </AnswerContainer>
            }
        </Container>
    );
};

export default Question;