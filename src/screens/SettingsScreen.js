import React from 'react'
import styled from 'styled-components/native'
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
	List,
	Main,
	Row,
	SectionHeader,
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
				<SectionHeader>Theme</SectionHeader>
				<List
					data={data}
					renderItem={(item, index) => (
						<Button
							key={index}
							onPress={() => handlePress(item)}
						>
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
				/>
			</Main>
		</>
	)
}