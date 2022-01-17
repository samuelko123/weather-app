import styled from 'styled-components/native'

export const Separator = styled.View`
	border-bottom-color: ${props => props.theme.color.onBackground};
	border-bottom-width: ${props => props.theme.base.borderWidth}px;
	opacity: 0.3;
`