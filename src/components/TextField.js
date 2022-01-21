import styled from 'styled-components/native'

export const TextField = styled.TextInput.attrs(props => ({
	placeholderTextColor: props.theme.color.placeholderOnPrimary,
	selectionColor: props.theme.color.placeholderOnPrimary,
}))`
	font-size: ${props => props.theme.base.fontSize}px;
	padding: ${props => props.theme.base.spacing * 0.5}px;
	color: ${props => props.theme.color.onPrimary};
    border-color: ${props => props.theme.color.onPrimary};
	border-bottom-width: ${props => props.theme.base.borderWidth}px;
	flex: 1;
`