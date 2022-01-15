import styled from 'styled-components/native'

export const TextField = styled.TextInput.attrs(props => ({
	placeholderTextColor: props.theme.color.placeholder,
	selectionColor: props.theme.color.brandText,
}))`
	font-size: ${props => props.theme.fontSize.textField}px;
	padding: ${props => props.theme.padding.textField}px;
	color: ${props => props.theme.color.brandText};
    border-color: ${props => props.theme.color.brandText};
	border-bottom-width: ${props => props.theme.borderWidth.textField}px;
`