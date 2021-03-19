import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import axios from "axios";
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '~/Components/Button';

const Container = Styled.View`
  margin:5px 10px;
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
const DropDownContainer = Styled.View`
  flex-direction:row;
`;
const CatalogContainer = Styled.SafeAreaView`
`;

const CatalogImageContainer = Styled.TouchableOpacity`
  padding: 6px 6px;
`;
const CatalogImage = Styled.Image`
`;

interface Props {
    title: string;
    onPress: (id: number) => void;
  }

const ProductList = ({title, onPress}: Props) => {
    const [dataList, setDataList] = useState<Array<IMovie>>([]);
    const [category, setCategory] = useState<string>('');

    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&sort_by=year&order_by=dec&limit=10&genre=${category}`);
            setDataList(result.data.data.movies)
        } 
        fetchData()
    }, [category])

    return (
        <Container>
            <InfoContainer>
                <Title>{title}</Title>
            </InfoContainer>
            <DropDownContainer>
                <DropDownPicker
                    items={[
                    {label: '전체', value:''},
                    {label: '드라마', value:'Drama'},
                    {label: '코메디', value:'Comedy'},
                    ]}
                    placeholder="장르"
                    containerStyle={{height: 30, width: 100, justifyContent: 'flex-end'}}
                    itemStyle={{justifyContent: 'flex-start'}}
                    labelStyle={{fontSize: 16, color: '#000'}}
                    showArrow={true}
                    dropDownStyle={{backgroundColor: '#eeeeee'}}
                    onChangeItem={(items) => setCategory(items.value)}
                />
                <DropDownPicker
                    items={[
                    {label: '전체', value:''},
                    {label: '드라마', value:'Drama'},
                    {label: '코메디', value:'Comedy'},
                    ]}
                    placeholder="장르"
                    containerStyle={{height: 30, width: 100, justifyContent: 'flex-end'}}
                    itemStyle={{justifyContent: 'flex-start'}}
                    labelStyle={{fontSize: 16, color: '#000'}}
                    showArrow={true}
                    dropDownStyle={{backgroundColor: '#eeeeee'}}
                    onChangeItem={(items) => setCategory(items.value)}
                />
                <Button
                    label="보기방식"
                    style={{
                        backgroundColor: '#FEFFFF',
                        height: 32,
                        width:60,
                        marginLeft:'auto'
                    }}
                    color="#292929"
                    onPress={()=> {} } />
            </DropDownContainer>
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

export default ProductList;