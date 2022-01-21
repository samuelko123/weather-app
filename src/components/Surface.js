import styled from 'styled-components/native'

export const Surface = styled.View`
    background-color: ${props => props.theme.color.surface};
    border-radius: ${props => props.theme.base.borderRadius}px;
`