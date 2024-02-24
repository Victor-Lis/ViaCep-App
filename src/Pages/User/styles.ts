import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFF;
`;

export const Logo = styled.Text`
    font-size: 28px;
    font-weight: bold;
`

export const Input = styled.TextInput`
    color: #121212;
    background-color: #EBEBEB;
    width: 90%;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 0 8px;
    height: 50px;
`

export const ButtonLogin = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 6px;
    background: #F53745;
`

export const ButtonLoginText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 19px;
`