import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import axios from 'axios';
import Modal from "react-native-modal";

import CastList from './CastList';
import Loading from '~/Components/Loading';
import Button from '~/Components/Button';

const Container = Styled.ScrollView`
    margin-top:8px;
`;

const LabelTitle = Styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding: 8px 16px 4px 16px;
`;
const LabelGenres = Styled.Text`
  font-size: 15px;
  color: black;
  padding: 0 0 0 4px;
`;
const LabelYear = Styled.Text`
  color: #d35353;
  font-size: 13px;
  padding: 1px 0 0 14px;
`;

const ContainerTitle = Styled.Text`
  font-size: 21px;
  color: black;
  font-weight: bold;
  padding: 15px 16px 8px 16px;
`;
const DescriptionContainer = Styled.View``;
const Description = Styled.Text`
  padding: 0 16px;
  color: black;
`;
const SubInfoContainer = Styled.View``;
const InfoContainer = Styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 16px;
`;
const StyledModalContainer = Styled.View`
  height: 157px;
  flex:0.2;
  background-color: #ffffff;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
`;

type DetailRouteProp = RouteProp <GiveNTakeNaviParamList, 'Detail'>;
interface Props{
    route: DetailRouteProp;
}

const Detail = ({route}: Props) => {
    const [data, setData] = useState<IMovieDetail>();
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(()=> {
        const {id} = route.params;
        const fetchData = async () => {
            const result = await axios.get(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
            setData(result.data.data.movie)
        }
        
        fetchData()
    }, [])

    return data ? (
      <>
        <Container>
          {data.cast && <CastList cast={data.cast} />}
          <SubInfoContainer>
            <LabelTitle>{data.title}</LabelTitle>
            <InfoContainer>
              <LabelGenres>{data.genres}</LabelGenres>
              <LabelYear>{data.year}년</LabelYear>
            </InfoContainer>
          </SubInfoContainer>
          <DescriptionContainer>
            <ContainerTitle>줄거리</ContainerTitle>
            <Description>{data.description_full}</Description>
          </DescriptionContainer>
        </Container>
        <Button 
          style={{backgroundColor:'#FFC02B',}}
          label="기부하기"
          onPress={()=>{
            setModalVisible(true);
          }}
          color="black"
        />
        <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{justifyContent: 'flex-end', margin: 0 , }}
        >
          <StyledModalContainer>
            <LabelGenres>modal</LabelGenres>
          </StyledModalContainer>
        </Modal>
        
        </>
        ) : (
          <Loading />
        );
    }
    

export default Detail;