import styled from 'styled-components/native'

export const TextField = styled.TextInput.attrs(props => ({
	placeholderTextColor: props.theme.color.onPrimary,
	selectionColor: props.theme.color.onPrimary,
}))`
	font-size: ${props => props.theme.base.fontSize}px;
	padding: ${props => props.theme.base.spacing * 0.5}px;
	color: ${props => props.theme.color.onPrimary};
    border-color: ${props => props.theme.color.onPrimary};
	border-bottom-width: ${props => props.theme.base.borderWidth}px;
`