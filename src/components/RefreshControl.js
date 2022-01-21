import styled from 'styled-components/native'

export const RefreshControl = styled.RefreshControl.attrs(props => ({
	colors: props.theme.color.iconOnBackground,
	tintColor: props.theme.color.iconOnBackground,
}))``