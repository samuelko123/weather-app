import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const SectionHeader = styled(BaseText)`
	font-weight: bold;
	margin-top: ${props => props.theme.base.spacing * 2}px;
	margin-bottom: ${props => props.theme.base.spacing}px;
`