import React, { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'

import { setSuburb } from '../redux/slices'
import { useSuburbSearch } from '../hooks'
import {
	BaseText,
	Button,
	ErrorAlert,
	Header,
	List,
	Main,
	Row,
	SectionHeader,
	Spinner,
	Surface,
	TextField,
} from '../components'

export const SuburbScreen = (props) => {
	const { navigation } = props
	const [keyword, setKeyword] = useState('')
	const [isLoading, data, errorMsg] = useSuburbSearch(keyword)
	const dispatch = useDispatch()
	const theme = useTheme()

	const handleChange = (text) => setKeyword(text)
	const handlePress = (item) => {
		dispatch(setSuburb(item))
		navigation.navigate('Home')
	}

	return (
		<>
			<Header>
				<TextField
					value={keyword}
					onChangeText={handleChange}
					autoFocus={true}
					placeholder='Search postcode/suburb'
					accessibilityRole='search'
				/>
				<Button
					onPress={() => navigation.navigate('Home')}
					hitSlop={theme.base.spacing * 2}
					ml={2}
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
			<Main
				keyboardDismissMode='on-drag'
				keyboardShouldPersistTaps='handled'
			>
				{
					errorMsg &&
					<ErrorAlert>{errorMsg}</ErrorAlert>
				}
				{
					isLoading &&
					<Spinner />
				}
				{
					!errorMsg && !isLoading && (!data || data.length === 0) &&
					<BaseText mt={1}>
						No results found
					</BaseText>
				}
				{
					!errorMsg && !isLoading && !!data && data.length > 0 &&
					<>
						<SectionHeader>
							Locations
						</SectionHeader>
						<Surface>
							<List
								data={data}
								renderItem={(item, index) => (
									<Button
										key={index}
										onPress={() => {
											handlePress(item)
										}}
									>
										<Row>
											<View>
												<BaseText
													color={theme.color.textOnSurface}
												>
													{item.name}
												</BaseText>
												<BaseText
													color={theme.color.textOnSurface}
													size={theme.base.fontSize * 0.75}
												>
													{`${item.postcode}, ${item.state}`}
												</BaseText>
											</View>
											<AntDesign
												name='right'
												color={theme.color.iconOnSurface}
												size={theme.base.iconSize}
											/>
										</Row>
									</Button>
								)}
							/>
						</Surface>
					</>
				}
			</Main>
		</>
	)
}