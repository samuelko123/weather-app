import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const Title = styled(BaseText)`
    color: ${props => props.theme.color.brandText};
	font-size: ${props => props.theme.fontSize.title}px;
    font-weight: bold;
`