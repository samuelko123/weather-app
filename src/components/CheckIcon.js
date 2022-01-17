import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const CheckIcon = styled(AntDesign).attrs(props => ({
	accessibilityLabel: 'Selected',
	color: props.theme.color.onSurface,
	name: 'check',
	size: props.theme.base.fontSize,
}))``