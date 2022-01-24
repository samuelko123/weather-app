import styled from 'styled-components/native'
import { spacing } from '../styles'

export const BaseText = styled.Text`
    font-size: ${props => (props.size || 1) * props.theme.base.fontSize}px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    color: ${props => props.color || props.theme.color.textOnBackground};
    ${props => props.flex && `flex: ${props.flex};`}
    ${props => props.textAlign && `text-align: ${props.textAlign};`}
    ${spacing}
`