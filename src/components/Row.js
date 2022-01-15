import styled from 'styled-components/native'

export const Row = styled.View`
	height: ${props => props.theme.height.row}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`