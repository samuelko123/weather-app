import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const CloseIcon = styled(AntDesign).attrs(props => ({
	accessibilityLabel: 'Close',
	color: props.theme.color.onPrimary,
	name: 'close',
	size: props.theme.base.fontSize * 1.5,
}))``