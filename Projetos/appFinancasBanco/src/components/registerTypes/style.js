import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    background-color: ${ props => props.checked ? '#fff' : '#e7e7e7'};
    border-color: ${ props => props.checked ? '#3b3dbf' : 'transparent'};
    border-radius: 8px;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    width: 45%;
    flex-direction: row;
    height: 50px;
    margin-bottom: 14px;

`;

export const RegisterLabel = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #595959;
    margin-left: 8px;
`;