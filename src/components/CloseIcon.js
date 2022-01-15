import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const CloseIcon = styled(AntDesign).attrs(props => ({
	accessibilityLabel: 'Close',
	color: props.theme.color.brandText,
	name: 'close',
	size: props.theme.fontSize.icon,
}))``