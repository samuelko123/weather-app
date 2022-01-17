import styled from 'styled-components/native'

export const Row = styled.View`
    padding-top: ${props => props.theme.base.spacing}px;
    padding-bottom: ${props => props.theme.base.spacing}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`