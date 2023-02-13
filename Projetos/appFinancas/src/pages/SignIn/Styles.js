import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-bottom: 35px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 85%;
    border-radius: 12px;
    padding: 10px;
    font-size: 15px;
    color: #121212;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 85%;
    background-color: #3b3bbf;
    padding: 10px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const SubmitText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const Link = styled.TouchableOpacity`

`;

export const LinkText = styled.Text`
    font-weight: bold;
`;