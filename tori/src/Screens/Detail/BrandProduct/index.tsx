import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import axios from "axios";

const Container = Styled.View`
  margin:5px 9px;
`;

const CatalogContainer = Styled.SafeAreaView`
`;

const CatalogImageContainer = Styled.TouchableOpacity`
  padding: 6px 6px;

`;
const CatalogImage = Styled.Image`
`;

interface Props {
    onPress: (id: number) => void;
  }

const BrandProduct = ({onPress}: Props) => {
    const [dataList, setDataList] = useState<Array<IMovie>>([]);

    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&sort_by=year&order_by=dec&limit=10`);
            setDataList(result.data.data.movies)
        } 
        fetchData()
    }, [])

    return (
        <Container>
            <CatalogContainer>
                <FlatList
                nestedScrollEnabled={true}
                numColumns={2}
                data={dataList}
                keyExtractor={(item, index) => {
                    return `catalogList-${(item as IMovie).id}-${index}`;
                }}
                renderItem={({item, index}) => (
                    <CatalogImageContainer
                        activeOpacity={1}
                        onPress={() => {
                            onPress((item as IMovie).id);
                    }}>
                    <CatalogImage
                        source={{uri: (item as IMovie).large_cover_image}}
                        style={{width: 170, height: 170,}}
                    />
                    </CatalogImageContainer>
                )}
                />
            </CatalogContainer>
        </Container>
    );
};

export default BrandProduct;