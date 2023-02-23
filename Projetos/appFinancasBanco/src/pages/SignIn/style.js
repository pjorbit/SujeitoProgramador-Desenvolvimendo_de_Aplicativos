import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    margin-bottom: 25px;
`

export const AreaInput = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
`

export const Input = styled.TextInput`
    background-color: #fff;
    height: 45px;
    width: 90%;
    border-radius: 12px;
    color: #252525;
    padding: 10px;
    font-size: 16px;
`

export const SubmitButtom = styled.TouchableOpacity`
    background-color: #3b3dbf;
    height: 45px;
    width: 90%;
    border-radius: 12px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`

export const SubmitText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`

export const Link = styled.TouchableWithoutFeedback`
    align-items: center;
    justify-content: center;
`

export const LinkText = styled.Text`
    font-weight: bold;
    color: #252525;
`