import styled from 'styled-components/native'

export const Row = styled.View`
	height: ${props => props.theme.height.row}px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`