import React from 'react';
import { Value } from 'react-native-reanimated';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 100%;
    height:40px;
    background-color: #FAFAFA;
    border-width: 1px;
    border-color: #D3D3D3;
`;

const InputField = Styled.TextInput`
    flex: 1;
    color: #292929;
`;

interface Props {
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' ;
    secureTextEntry?: boolean;
    style?: Object;
    clearMode?: boolean;
    onChangeText?: void | ((coin: number) => void);
    value ?: string
}

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText,
    value,
}: Props) => {
    return (
        <Container style={style}>
            <InputField
                value={value}
                selectionColor="black"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ? keyboardType : 'default'}
                autoCapitalize="none"
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor="gray"
                placeholder={placeholder}
                clearButtonMode={clearMode ? 'while-editing' : 'never'}
                onChangeText={onChangeText}
                textAlign='center'
            />
        </Container>
    );
};

export default Input;