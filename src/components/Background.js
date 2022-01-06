import styled from 'styled-components/native'

export const BaseBackground = styled.View`
    background-color: ${props => props.theme.background};
    min-height: 100%;
`

export const IosBackground = styled.SafeAreaView`
    background-color: ${props => props.theme.background};
    min-height: 100%;
`