import styled from 'styled-components/native'

export const Separator = styled.View`
	border-bottom-color: ${props => props.theme.color.separator};
	border-bottom-width: ${props => props.theme.borderWidth.separator}px;
`