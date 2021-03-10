import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import axios from 'axios';

import Loading from '~/Components/Loading';
import Tab from '~/Components/Tab';
import BrandProduct from '../Detail/BrandProduct';

const Container = Styled.ScrollView`
    margin-top:8px;
`;
const CatalogImageContainer = Styled.View`
`;
const CatalogImage = Styled.Image`
  margin-top: 3px;
`;

const TabContainer = Styled.View`
    flex-direction: row;
    height:40px;
`;

const BrandStoryContainer = Styled.View``;
const BrandStory = Styled.Text`
  padding: 0 16px;
  color: black;
`;

type NavigationProp = StackNavigationProp <GiveNTakeNaviParamList, 'GiveNTake'>;
type BrandDetailRouteProp = RouteProp <GiveNTakeNaviParamList, 'BrandDetail'>;

interface Props{
    route: BrandDetailRouteProp;
    navigation: NavigationProp;
}

const BrandDetail = ({route, navigation}: Props) => {
    const [data, setData] = useState<IMovieDetail>();
    const [tabIndex, setTabIndex] = useState<number>(0);
    const tabs=['브랜드스토리','기부중인 제품'];

    useEffect(()=> {
        const {id} = route.params;
        const fetchData = async () => {
            const result = await axios.get(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
            setData(result.data.data.movie)
        }
        fetchData()
    }, [])

    return data ? (
        <Container>
          <CatalogImageContainer>
            <CatalogImage
              source={{uri: data.large_cover_image}}
              style={{width:Dimensions.get('window').width, height: 300}}
            />
          </CatalogImageContainer>
          <TabContainer>
              {tabs.map((label: string, index:number) =>(
                  <Tab
                    key={`tab-${index}`}
                    selected={tabIndex ===index}
                    label={label}
                    onPress={()=> setTabIndex(index)}
                  />
              ))}
          </TabContainer>
          <BrandStoryContainer>
              {tabIndex === 0 && (
                <BrandStory>{data.description_full}</BrandStory>
              )}
          </BrandStoryContainer>
          <BrandStoryContainer>
              {tabIndex === 1 && (
                <BrandProduct
                    onPress={(id: number) => {
                      navigation.navigate('Detail', {id,});
                    }}
                />
              )}
          </BrandStoryContainer>
        </Container>
      ) : (
        <Loading />
      );
    };
    

export default BrandDetail;