import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #f0f3ff;
    margin-left: 10px;
    margin-bottom: 14px;
    border-radius: 8px;
`;

export const Tipo = styled.View`
    flex-direction: row;
    padding: 0 0 5px 0;
`;

export const TipoText = styled.Text`
    font-size: 15px;
    color: #fff;
    font-style: italic;
`;

export const IconView = styled.View`
    background-color: ${ props => props.tipo === 'despesa' ? '#c62c36' : '#049301' };
    flex-direction: row;
    align-items: center;
    padding: 6px 8px 6px 6px;
    border-radius: 8px;
    margin-bottom: 5px;
`;

export const ValorText = styled.Text`
    padding: 0 0 10px 10px;
    color: #101010;
    font-size: 22px;
`;