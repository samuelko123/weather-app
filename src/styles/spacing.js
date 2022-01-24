import { css } from 'styled-components/native'

export const spacing = css`
    ${props => props.m && `margin: ${props.m * props.theme.base.spacing}px;`}
    ${props => props.mx && `
        margin-left: ${props.mx * props.theme.base.spacing}px;
        margin-right: ${props.mx * props.theme.base.spacing}px;
    `}
    ${props => props.my && `
        margin-top: ${props.my * props.theme.base.spacing}px;
        margin-bottom: ${props.my * props.theme.base.spacing}px;
    `}
    ${props => props.my && `margin: ${props.m * props.theme.base.spacing}px;`}
    ${props => props.mt && `margin-top: ${props.mt * props.theme.base.spacing}px;`}
    ${props => props.mb && `margin-bottom: ${props.mb * props.theme.base.spacing}px;`}
    ${props => props.ml && `margin-left: ${props.ml * props.theme.base.spacing}px;`}
    ${props => props.mr && `margin-right: ${props.mr * props.theme.base.spacing}px;`}

    ${props => props.p && `padding: ${props.p * props.theme.base.spacing}px;`}
    ${props => props.px && `
        padding-left: ${props.px * props.theme.base.spacing}px;
        padding-right: ${props.px * props.theme.base.spacing}px;
    `}
    ${props => props.py && `
        padding-top: ${props.py * props.theme.base.spacing}px;
        padding-bottom: ${props.py * props.theme.base.spacing}px;
    `}
    ${props => props.pt && `padding-top: ${props.pt * props.theme.base.spacing}px;`}
    ${props => props.pb && `padding-bottom: ${props.pb * props.theme.base.spacing}px;`}
    ${props => props.pl && `padding-left: ${props.pl * props.theme.base.spacing}px;`}
    ${props => props.pr && `padding-right: ${props.pr * props.theme.base.spacing}px;`}
`