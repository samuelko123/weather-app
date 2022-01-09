import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const RightArrowIcon = styled(AntDesign).attrs(props => ({
	name: 'right',
	color: props.theme.color.brand,
	size: props.theme.fontSize.icon,
}))``