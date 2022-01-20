import styled from 'styled-components/native'

export const Card = styled.View`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.surface};
    margin-right: ${props => props.theme.base.spacing * 0.25}px;
    padding: ${props => props.theme.base.spacing * 0.5}px;
`