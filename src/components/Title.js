import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const Title = styled(BaseText)`
    color: ${props => props.theme.color.onPrimary};
	font-size: ${props => props.theme.base.fontSize}px;
    font-weight: bold;
`