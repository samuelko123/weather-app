import styled from 'styled-components/native'

export const Header = styled.View`
    background-color: ${props => props.theme.color.brand};
    height: ${props => props.theme.height.header}px;
	padding: 0 ${props => props.theme.padding.header}px;
	flex-direction: row;
    justify-content: space-between;
	align-items: center;
`