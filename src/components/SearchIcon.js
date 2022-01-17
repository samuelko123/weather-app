import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const SearchIcon = styled(AntDesign).attrs(props => ({
	accessibilityLabel: 'Search',
	color: props.theme.color.onPrimary,
	name: 'search1',
	size: props.theme.base.fontSize * 1.5,
}))``