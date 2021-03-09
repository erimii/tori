import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import axios from "axios";
import Button from '~/Components/Button';
import { useNavigation } from "@react-navigation/native";

const Container = Styled.View`
    margin:5px 9px;
    background:#b1d1fa;
    border-radius:5px;
`;

const InfoContainer = Styled.View`
    background:purple;
    flex-direction: row;
    justify-content: space-between;
`;

const Title = Styled.Text`
    font-size: 16px;
    font-weight:bold;
    margin: 3px 1px;
`;


const CatalogContainer = Styled.View`
    height: 201px;
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

const GnTPreview = ({title, onPress}: Props) => {
    const [dataList, setDataList] = useState<Array<IMovie>>([]);

    const navigation = useNavigation();

    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&sort_by=add_date&order_by=asc&limit=10`);
            setDataList(result.data.data.movies)
        }
        
        fetchData()
    }, [])
    
    return(
        <Container>
            <InfoContainer>
                <Title>{title}</Title>
                <Button
                    label="더보기 >"
                    style={{
                        backgroundColor: '#FEFFFF',
                        height: 32,
                    }}
                    color="#292929"
                    onPress={()=> {navigation.navigate('GiveNTake')} } />
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
                                style={{width:180, height:180 }}
                            />
                        </CatalogImageContainer>
                    )}
                />
            </CatalogContainer>
        </Container>
    );
};

export default GnTPreview;