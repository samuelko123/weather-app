import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const SectionHeader = styled(BaseText)`
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: ${props => props.theme.base.spacing * 0.5}px;
`