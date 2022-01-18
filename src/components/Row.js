import styled from 'styled-components/native'

export const Row = styled.View`
    padding: ${props => props.theme.base.spacing}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`