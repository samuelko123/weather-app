import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const CloseIcon = styled(AntDesign).attrs(props => ({
	name: 'close',
	color: props.theme.color.brandText,
	size: props.theme.fontSize.icon,
	accessibilityLabel: 'Close',
}))``