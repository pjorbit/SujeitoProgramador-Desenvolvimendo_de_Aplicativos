import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
`;

export const ListBalance = styled.FlatList`
    max-height: 120px;
`;

export const Area = styled.View`
    flex-direction: row;
    background-color: #fff;
    margin-top: 5px;
    margin-left: 14px;
    padding: 10px;
    align-items: center;
    border-top-left-radius: 15px;
`;

export const Title = styled.Text`
    color: #101010;
    font-weight: bold;
    font-size: 18px;
    margin-left: 5px;
`;

export const List = styled.FlatList`
    flex: 1;
    margin-left: 14px;
    background-color: #fff;
`;