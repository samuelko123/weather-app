import styled from 'styled-components/native'

export const Spinner = styled.ActivityIndicator.attrs(props => ({
	color: props.theme.color.iconOnBackground,
	size: 'large',
}))`
	margin: ${props => props.theme.base.spacing}px;
`