import styled from 'styled-components/native'

export const Spinner = styled.ActivityIndicator.attrs(props => ({
	accessibilityLabel: 'Loading...',
	color: props.theme.color.onBackground,
	size: 'large',
}))`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
`