import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #${props => props.bg};
    margin-left: 14px;
    margin-right: 14px;
    margin-bottom: 14px;
    border-radius: 8px;
    align-items: flex-start;
    justify-content: center;
    width: 300px;
    padding-left: 14px;

`;

export const Label = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #101010;
`;

export const Balance = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-top: 5px;
`;