import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import axios from "axios";
import Button from '~/Components/Button';
import { useNavigation } from "@react-navigation/native";

const Container = Styled.View`
    margin:9px 9px;
    border-radius:5px;
`;

const InfoContainer = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:6px;
`;

const LabelContainer = Styled.View`

`;

const Title = Styled.Text`
    font-size: 16px;
    font-weight:bold;
    margin: 3px 1px;
`;


const CatalogContainer = Styled.View`
    height: 201px;
    background: white;
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
            const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&sort_by=date_added&order_by=asc&limit=10`);
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
                        backgroundColor: '#F2f2f2',
                        height: 31,
                    }}
                    color="#aaa3a3"
                    onPress={()=> {navigation.navigate('GiveNTake')} } />
            </InfoContainer>
            <CatalogContainer>
                <LabelContainer>
                    <Title>마감 임박</Title>
                </LabelContainer>
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
                                style={{width:150, height:150 }}
                            />
                        </CatalogImageContainer>
                    )}
                />
            </CatalogContainer>
            
            <CatalogContainer>
                <LabelContainer>
                    <Title>최신순</Title>
                </LabelContainer>
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
                                style={{width:150, height:150 }}
                            />
                        </CatalogImageContainer>
                    )}
                />
            </CatalogContainer>
        </Container>
    );
};

export default GnTPreview;