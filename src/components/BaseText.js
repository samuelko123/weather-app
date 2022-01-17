import styled from 'styled-components/native'

export const BaseText = styled.Text`
    font-size: ${props => props.theme.base.fontSize}px;
    color: ${props => props.theme.color.onBackground};
`