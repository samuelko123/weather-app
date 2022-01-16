import styled from 'styled-components/native'

export const Main = styled.Pressable`
    background-color: ${props => props.theme.color.background};
    padding: ${props => props.theme.padding.main}px;
	flex: 1;
`