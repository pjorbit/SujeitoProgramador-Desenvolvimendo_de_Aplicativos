import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
    align-items: center;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
    color: #101010;
`;

export const Name = styled.Text`
    font-size: 24px;
    margin-bottom: 14px;
    margin-top: 8px;
    padding: 0 14px;
    color: #101010;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    margin-bottom: 14px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

`;

export const NewText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const LogoutButtom = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-radius: 8px;
    border-color: #c62c36;
`;

export const LogoutText = styled.Text`
    color: #c62c63;
    font-size: 18px;
    font-weight: bold;
`;
