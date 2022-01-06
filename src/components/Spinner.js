import styled from 'styled-components/native'
import { theme } from '../styles'

export const Spinner = styled.ActivityIndicator.attrs(() => ({
	color: theme.brand,
	size: 'large',
	accessibilityLabel: 'Loading...',
}))`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`