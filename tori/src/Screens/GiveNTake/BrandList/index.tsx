import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import axios from "axios";

const Container = Styled.View`
    margin:10px 9px;
    border-radius:5px;
`;

const InfoContainer = Styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Title = Styled.Text`
    font-size: 16px;
    font-weight:bold;
    margin: 3px 1px;
`;


const CatalogContainer = Styled.View`
    height: 170px;
`;

const CatalogImageContainer = Styled.TouchableOpacity`
    padding: 0px 4px;
`;

const CatalogImage = Styled.Image`
`;

interface Props {
    title: string;
    onPress: (id: number) => void;
}

const BrandList = ({title, onPress}: Props) => {
    const [dataList, setDataList] = useState<Array<IMovie>>([]);

    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&sort_by=title&order_by=dec&limit=3`);
            setDataList(result.data.data.movies)
        }
        
        fetchData()
    }, [])
    
    return(
        <Container>
            <InfoContainer>
                <Title>{title}</Title>
            </InfoContainer>
            <CatalogContainer>
                <FlatList
                    horizontal={true}
                    data={dataList}
                    keyExtractor={(item, index) => {
                        return `List-${(item as IMovie).id}-${index}`;
                    }}
                    renderItem={({item, index}) => (
                        <CatalogImageContainer
                            activeOpacity={1}
                            onPress={() => {
                                onPress((item as IMovie).id);
                            }}>
                            <CatalogImage
                                source={{uri: (item as IMovie).large_cover_image}}
                                style={{width:230, height:170 }}
                            />
                        </CatalogImageContainer>
                    )}
                />
            </CatalogContainer>
        </Container>
    );
};

export default BrandList;