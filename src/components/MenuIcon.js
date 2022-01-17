import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const MenuIcon = styled(MaterialIcons).attrs(props => ({
	accessibilityLabel: 'Menu Button',
	color: props.theme.color.onPrimary,
	name: 'menu',
	size: props.theme.base.fontSize * 1.5,
}))``