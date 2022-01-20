import styled from 'styled-components/native'

export const Main = styled.ScrollView.attrs((props) => ({
	contentContainerStyle: {
		flexGrow: 1,
		paddingBottom: props.theme.base.spacing * 4,
	},
}))`
    background-color: ${props => props.theme.color.background};
    padding-left: ${props => props.theme.base.spacing * 2}px;
    padding-right: ${props => props.theme.base.spacing * 2}px;
`