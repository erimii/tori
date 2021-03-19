import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import axios from "axios";
import Styled from 'styled-components/native';

const NotificationContainer = Styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
  background:#ffffff;
`;

const LabelName = Styled.Text`
  font-weight: bold;
  font-size:15px;
`;
const Message = Styled.Text`
  flex: 1;
  padding:0 10px;
`;
const PostImage = Styled.Image``;

interface Props {
  onPress: (id: number) => void;
}

const NotificationList = ({onPress}: Props) => {
    const [dataList, setDataList] = useState<Array<IMovie>>([]);

    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get(`https://yts.mx/api/v2/list_movies.json?&sort_by=year&order_by=dec&limit=6`);
            setDataList(result.data.data.movies)
        } 
        fetchData()
    }, [])

  return (
    <FlatList
      data={dataList}
      keyExtractor={(item, index) => {
        return `notification-${item.id}-${index}`;
      }}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      renderItem={({item, index}) => (
        <NotificationContainer
        activeOpacity={0.7}
          onPress={() => {
            onPress((item as IMovie).id);
          }}>
          <Message numberOfLines={2}>
            <LabelName>{item.title}</LabelName> 호롤롤로롤로 모금 완료!
          </Message>
          <PostImage
            source={{uri: item.large_cover_image}}
            style={{width: 54, height: 54}}
          />
        </NotificationContainer>
      )}
    />
  );
};

export default NotificationList;