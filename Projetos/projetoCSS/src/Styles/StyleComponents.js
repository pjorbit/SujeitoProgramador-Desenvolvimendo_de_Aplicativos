import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #BFBFBF;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin: 30px;
    color: #10403B;
`;

export const AreaBtn = styled.TouchableOpacity`
    height: 50px;
    width: 40%;
    border: 3px solid #10403B;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    background-color: #8AA6A3;
    elevation: 10;
`;

export const AreaText = styled.Text`
    font-size: 22px;
    color: #10403B;
    font-weight: bold
`;