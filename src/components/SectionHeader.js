import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const SectionHeader = styled(BaseText)`
	font-weight: bold;
	text-transform: uppercase;
	margin-top: ${props => props.theme.base.spacing * 1.5}px;
	margin-bottom: ${props => props.theme.base.spacing * 0.5}px;
`