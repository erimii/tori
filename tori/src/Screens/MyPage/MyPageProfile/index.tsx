import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.View`
  background:#8cd5ff;
  flex:1;
  border-radius:5px;
  margin:5px 9px;
  padding:5px 9px;
  flex-direction: row;
`;
const ProfileImageContainer = Styled.View`
  background:red;
`;
const ProfileImage = Styled.Image`
  border-radius: 100px;
`;
const ProfileContent = Styled.View`
  flex-direction: column;
  background:blue;
  padding: 5px;
  flex:1;
`;
const LabelContainer = Styled.View`
  background:#ff6bc1;
  flex-direction: row;
  justify-content: space-between;
`;

const ProfileItem = Styled.View`
  align-items: center;
  background:#7cf05f;
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
  background:#dfff89;
`;

interface Props {
    grade:string;
    nickname:string;
    giv?:number;
}

const Profile = ({grade, nickname,giv} : Props) => {
    return(
        <Container>
            <ProfileImageContainer>
              <ProfileImage 
                source= {require('~/Images/tori3000.png')} 
                style={{width: 80, height: 80}} 
              />
            </ProfileImageContainer>
            <ProfileContent>
            <LabelContainer>
              <ProfileItem>
                <LabelCount>{grade}</LabelCount>
                <LabelCount>{nickname}</LabelCount>
              </ProfileItem>
              <Button
              label="계정 관리"
              style={{
                backgroundColor:'#FFFFFF',
                alignSelf:'flex-start',
                marginLeft:'auto',
              }}
              color="black"
            />
            </LabelContainer>
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
         </ProfileContent>
        </Container>
    )
}

export default Profile;