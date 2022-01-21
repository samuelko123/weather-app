import styled from 'styled-components/native'

export const Header = styled.View`
    background-color: ${props => props.theme.color.primary};
    height: ${props => props.theme.base.spacing * 6}px;
    padding-left: ${props => props.theme.base.spacing * 2}px;
    padding-right: ${props => props.theme.base.spacing * 2}px;
	flex-direction: row;
    justify-content: space-between;
	align-items: center;
`