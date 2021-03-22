import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import axios from 'axios';
import Modal from "react-native-modal";

import CastList from './CastList';
import Loading from '~/Components/Loading';
import Button from '~/Components/Button';
import Input from '~/Components/Input';

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
  justify-content: space-between;
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
const SecondModalContainer = Styled.View`
  flex-direction: column;
  width: 100%;
  height: 30%;
  background-color: #ffffff;
  border: 1px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = Styled.View`
  flex-direction:row;
`;
const SecondModalCountWrapper = Styled.View`
  flex-direction:row;
  align-items:center;
  border:1px;
`;

const SecondModalMinusButton = Styled.TouchableOpacity`
  border:1px;
`;

const SecondModalInput = Styled.View`
    align-items:center;
    text-align:center;
`;

const SecondModalPlusButton = Styled.TouchableOpacity`
  border:1px;
`;
const InputField = Styled.TextInput`
    color: #000000;
`;
type DetailRouteProp = RouteProp <GiveNTakeNaviParamList, 'Detail'>;
interface Props{
    route: DetailRouteProp;
}

const Detail = ({route}: Props) => {
    const [data, setData] = useState<IMovieDetail>();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [secondModal,setSecondModal] = useState<boolean>(false);

    useEffect(()=> {
        const {id} = route.params;
        const fetchData = async () => {
            const result = await axios.get(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
            setData(result.data.data.movie)
        }
        
        fetchData()
        console.log(coin)
        console.log(typeof(coin))
    }, [])

    const[coin, setCoin] = useState<number>(0)   
    const[maxCoin, setMaxCoin] = useState<number>(100)
    const value = coin.toString()
       
        const minusCoin = () => {
            if(coin>0){
                setCoin(coin-1);
                if(coin>maxCoin){
                    setCoin(maxCoin)
                }
            }
            else{
                setCoin(0);
            }
        }

        const plusCoin  = () => {
          setCoin(parseInt(value)+1)
        }

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
          color="#000000"
        />
        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={{justifyContent: 'flex-end', margin: 0 , }}
        >
          <StyledModalContainer>
            <InfoContainer>
              <LabelGenres>Give 가능한 {data.year} 기브</LabelGenres>
              <Button
                label="충전하기 >"
                style={{
                  backgroundColor: '#FEFFFF',
                  height: 22,
                }}
                color="#979797"
              />
            </InfoContainer>
            <InfoContainer>
              <LabelGenres>
                최대 얼마까지 참여 가능
              </LabelGenres>
              <SecondModalCountWrapper>
                <Button
                  label="-"
                  onPress={minusCoin}
                  style={{width:25, backgroundColor:'#ffffff'}}
                  color='#000000'
                />
                <Input
                  keyboardType='numeric'
                  onChangeText={coin>maxCoin ? setCoin(maxCoin) : coin =>setCoin(coin)}
                  style={{width:70, height:40, margin:0}}
                  placeholder='0'
                  clearMode={false}
                  value={value}
                />
                <Button
                  label="+"
                  onPress={plusCoin}
                  style={{width:25, backgroundColor:'#ffffff'}}
                  color='#000000'
                />
            </SecondModalCountWrapper>
            </InfoContainer>
            
            <LabelGenres></LabelGenres>
            <Button 
              style={{backgroundColor:'#FFC02B',width:'100%', marginTop:'auto'}}
              label="기부하기"
              onPress={()=>{
                setSecondModal(true);
              }}
              color="#000000"
            />
          </StyledModalContainer>
          <Modal
            isVisible={secondModal}
            onBackdropPress={()=> setSecondModal(false)}
            backdropOpacity={0.5}
          >
            <SecondModalContainer>
              <LabelGenres>{data.title}에 {coin}기브 기부하시겠습니까? </LabelGenres>
              <ButtonContainer>
                <Button
                style={{backgroundColor:'#ffffff', borderWidth:1, borderColor:'#d9d9d9',width:142}}
                label="아니오 ㅋㅋㅋ"
                onPress={()=>{
                  setSecondModal(false);
                }}
                color="#000000"
                />
                <Button
                  style={{backgroundColor:'#FFC02B', width:142, }}
                  label="그럼요"
                  onPress={()=>{
                    setSecondModal(false);
                  }}
                  color="#000000"
                />
                </ButtonContainer>
            </SecondModalContainer>
            
          </Modal>
        </Modal>
        </>
        ) : (
          <Loading />
        );
    }
    

export default Detail;