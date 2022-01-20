import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const CheckIcon = styled(MaterialCommunityIcons).attrs(props => ({
	accessibilityLabel: 'Selected',
	color: props.theme.color.iconOnSurface,
	name: 'check',
	size: props.theme.base.fontSize * 1.5,
}))``