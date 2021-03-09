import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import axios from 'axios';

import BigCatalog from './BigCatalog';
import Loading from '~/Components/Loading';
import Tab from '~/Components/Tab';

const Container = Styled.ScrollView`
    margin-top:8px;
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


type BrandDetailRouteProp = RouteProp <GiveNTakeNaviParamList, 'BrandDetail'>;
interface Props{
    route: BrandDetailRouteProp;
}

const BrandDetail = ({route}: Props) => {
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
          <BigCatalog
            id={data.id}
            image={data.large_cover_image}
          />
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
                <BrandStory>기부중인 제품</BrandStory>
              )}
          </BrandStoryContainer>
        </Container>
      ) : (
        <Loading />
      );
    };
    

export default BrandDetail;