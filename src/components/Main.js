import styled from 'styled-components/native'

export const Main = styled.View`
    background-color: ${props => props.theme.color.background};
    padding: ${props => props.theme.base.spacing * 2}px;
	flex: 1;
`