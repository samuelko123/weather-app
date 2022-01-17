import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const RightArrowIcon = styled(AntDesign).attrs(props => ({
	color: props.theme.color.onPrimary,
	name: 'right',
	size: props.theme.base.fontSize * 1.5,
}))``