// 이미지 부분
import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View``;

const CastContainer = Styled.View``;

const CastImage = Styled.Image``;

const LabelName = Styled.Text`
    text-align: center;
`;

interface Props{
    cast: Array<ICast>;
}

const CastList = ({cast}: Props) => {
    return (
        <Container>
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={cast}
                keyExtractor={(item, index) =>{
                    return `castList==${index}`;
                }}
                renderItem={({item,index}) => (
                    <CastContainer>
                        <CastImage
                            source={{ uri: (item as ICast).url_small_image}}
                            style={{width:Dimensions.get('window').width, height: 300}}
                        />
                        <LabelName>{(item as ICast).name}</LabelName>
                    </CastContainer>
                )}
            />
        </Container>
    );
};

export default CastList;