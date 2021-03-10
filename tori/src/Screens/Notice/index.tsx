import React, {useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Button from '~/Components/Button';

const Container = Styled.View`
    margin-top:8px;
`;

const Explain = Styled.Text`
    font-size:50px;
`;

type NoticeRouteProp = RouteProp <GiveNTakeNaviParamList, 'Notice'>;
type NavigationProp = StackNavigationProp <HomeTabParamList, 'Home'>;
interface Props{
    route: NoticeRouteProp;
    navigation: NavigationProp;
}

const Notice = ({route, navigation}: Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    label="모두 확인"
                    style={{
                        borderRadius: 4,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#D3D3D3',
                        height: 32,
                        width:70,
                        marginLeft: 'auto'
                    }}
                    color='black'
                    onPress={()=> {}}
                />
            ),
        });
        }, []);
    return(
        <Container>
            <Explain>Notice</Explain>
        </Container>
    );
};

export default Notice;