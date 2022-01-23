import { css } from 'styled-components/native'

export const marginStyle = css`
    ${props => props.mt && `margin-top: ${props.mt * props.theme.base.spacing}px;`}
    ${props => props.mb && `margin-bottom: ${props.mb * props.theme.base.spacing}px;`}
    ${props => props.ml && `margin-left: ${props.ml * props.theme.base.spacing}px;`}
    ${props => props.mr && `margin-right: ${props.mr * props.theme.base.spacing}px;`}
`