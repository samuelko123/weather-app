import React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import {
	shallowEqual,
	useDispatch,
	useSelector,
} from 'react-redux'

import { setTheme } from '../redux/slices'
import {
	BaseText,
	Button,
	CheckIcon,
	CloseIcon,
	Header,
	ListContainer,
	Main,
	Row,
	Separator,
	Title,
} from '../components'

const StyledTitle = styled(Title)`
	margin-left: ${props => props.theme.base.spacing * 2}px;
	flex: 1;
`

const StyledCloseIcon = styled(CloseIcon)`
	padding-left: ${props => props.theme.base.spacing * 0.5}px;
	padding-right: ${props => props.theme.base.spacing * 2}px;
`

const StyledSectionHeader = styled(BaseText)`
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: ${props => props.theme.base.spacing}px;
`

const StyledText = styled(BaseText)`
	color: ${props => props.theme.color.onSurface};
`

export const SettingsScreen = (props) => {
	const { navigation } = props
	const currentTheme = useSelector(state => state.theme, shallowEqual)
	const dispatch = useDispatch()
	const data = ['Light', 'Dark']

	const handlePress = (item) => {
		dispatch(setTheme(item.toLowerCase()))
	}

	return (
		<>
			<Header>
				<StyledTitle>Settings</StyledTitle>
				<Button onPress={() => navigation.navigate('Home')}>
					<StyledCloseIcon />
				</Button>
			</Header>
			<Main>
				<StyledSectionHeader>Theme</StyledSectionHeader>
				<ListContainer>
					<FlatList
						data={data}
						keyExtractor={(item) => item}
						scrollEnabled={false}
						renderItem={({ item }) => (
							<Button onPress={() => handlePress(item)}>
								<Row>
									<StyledText>
										{item}
									</StyledText>
									{
										item.toLowerCase() === currentTheme.name &&
										<CheckIcon />
									}
								</Row>
							</Button>
						)}
						ItemSeparatorComponent={() => (
							<Separator />
						)}
					/>
				</ListContainer>
			</Main>
		</>
	)
}