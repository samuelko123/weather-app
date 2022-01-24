import styled from 'styled-components/native'
import { spacing } from '../styles'

export const Col = styled.View`
    flex-direction: column;
    ${props => props.center && 'align-items: center'}
    ${props => props.flex && `flex: ${props.flex};`}
    ${spacing}
`