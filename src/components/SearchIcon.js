import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const SearchIcon = styled(AntDesign).attrs(props => ({
	name: 'search1',
	color: props.theme.color.brandText,
	size: props.theme.fontSize.icon,
	accessibilityLabel: 'Search',
}))``