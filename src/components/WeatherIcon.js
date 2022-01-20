import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const WeatherIcon = styled(MaterialCommunityIcons).attrs(props => ({
	color: props.theme.color.iconOnSurface,
	name: props.name,
	size: props.theme.base.fontSize * 2,
}))``