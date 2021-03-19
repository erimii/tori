import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.View`
  width:93%;
  margin:13px 13px;
  padding:5px 9px;
  background: #FFFFFF;
border-radius: 5px;
`;
const ProfileImageContainer = Styled.View`
`;
const ProfileImage = Styled.Image`
  border-radius: 100px;
`;
const ProfileContent = Styled.View`
  flex: 1;
  padding: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;
const LabelContainer = Styled.View`
  margin-left:10px;
  margin-right:auto;
`;

const LabelContainer2 = Styled.View`
  margin-left:10px;
`;

const ProfileItem = Styled.View`
  align-items: center;
  flex-direction: row;
`;
const LabelCount = Styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const LabelTitle = Styled.Text`
  font-weight: 300;
`;

const GivContainer = Styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

interface Props {
    grade:string;
    nickname:string;
    giv?:number;
    mydonation?:number
}

const Profile = ({grade, nickname,giv, mydonation} : Props) => {
    return(
        <Container>
          <ProfileContent>
            <ProfileImageContainer>
              <ProfileImage 
                source= {require('~/Images/tori3000.png')} 
                style={{width: 80, height: 80}} 
              />
            </ProfileImageContainer>
            <LabelContainer>
              <ProfileItem>
                <LabelCount>{grade}</LabelCount>
              </ProfileItem>
              <ProfileItem>
                <LabelCount>{nickname}</LabelCount>
              </ProfileItem>
            </LabelContainer>
            <Button
              label="설정"
              style={{
                backgroundColor:'#FFFFFF',
              }}
              color="black"
            /> 
          </ProfileContent>
          <LabelContainer2>
            <GivContainer>
              <LabelTitle>내가 낸 티끌</LabelTitle>
              <LabelCount>{mydonation}원</LabelCount>
            </GivContainer>
            <GivContainer>
              <LabelCount>{giv} 기브</LabelCount>
                <Button
                  label="충전하기 >"
                  style={{
                    backgroundColor: '#FEFFFF',
                    height: 22,
                  }}
                  color="#292929"
                />    
            </GivContainer>
          </LabelContainer2>
    </Container>
    )
}

export default Profile;