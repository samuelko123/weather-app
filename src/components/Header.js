import styled from 'styled-components/native'

export const Header = styled.View`
    background-color: ${props => props.theme.color.header};
    height: ${props => props.theme.height.header}px;
	flex-direction: row;
    justify-content: space-between;
	align-items: center;
`