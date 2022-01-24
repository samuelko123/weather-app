import React from 'react'
import { useTheme } from 'styled-components/native'
import {
	shallowEqual,
	useDispatch,
	useSelector,
} from 'react-redux'
import {
	AntDesign,
	MaterialCommunityIcons,
} from '@expo/vector-icons'

import { setTheme } from '../redux/slices'
import {
	BaseText,
	Button,
	Header,
	List,
	Main,
	Row,
	SectionHeader,
	Surface,
	Title,
} from '../components'

export const SettingsScreen = (props) => {
	const { navigation } = props
	const currentTheme = useSelector(state => state.theme, shallowEqual)
	const dispatch = useDispatch()
	const theme = useTheme()
	const data = ['Light', 'Dark']

	const handlePress = (item) => {
		dispatch(setTheme(item.toLowerCase()))
	}

	return (
		<>
			<Header>
				<Title>Settings</Title>
				<Button
					onPress={() => navigation.navigate('Home')}
					hitSlop={theme.base.spacing * 2}
					accessible={true}
					accessibilityLabel='Go back'
					accessibilityHint='Navigates to the home screen'
				>
					<AntDesign
						name='close'
						color={theme.color.onPrimary}
						size={theme.base.iconSize}
					/>
				</Button>
			</Header>
			<Main>
				<SectionHeader>
					Theme
				</SectionHeader>
				<Surface>
					<List
						data={data}
						renderItem={(item, index) => (
							<Button
								key={index}
								onPress={() => handlePress(item)}
							>
								<Row p={1}>
									<BaseText
										color={theme.color.textOnSurface}
										flex={1}
									>
										{item}
									</BaseText>
									{
										item.toLowerCase() === currentTheme.name &&
										<MaterialCommunityIcons
											name='check'
											color={theme.color.iconOnSurface}
											size={theme.base.iconSize}
										/>
									}
								</Row>
							</Button>
						)}
					/>
				</Surface>
			</Main>
		</>
	)
}