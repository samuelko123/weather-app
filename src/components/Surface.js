import styled from 'styled-components/native'
import { spacing } from '../styles'

export const Surface = styled.View`
    background-color: ${props => props.theme.color.surface};
    border-radius: ${props => props.theme.base.borderRadius}px;
    ${spacing}
`