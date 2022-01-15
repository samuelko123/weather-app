import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const RightArrowIcon = styled(AntDesign).attrs(props => ({
	color: props.theme.color.brand,
	name: 'right',
	size: props.theme.fontSize.icon,
}))``