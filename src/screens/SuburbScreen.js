import React, { useState } from 'react'
import styled from 'styled-components/native'
import {
	FlatList,
	Keyboard,
	Pressable,
	View,
} from 'react-native'
import { useDispatch } from 'react-redux'

import { setSuburb } from '../redux/slices'
import { useSuburbSearch } from '../hooks'
import {
	BaseText,
	Button,
	CloseIcon,
	ErrorAlert,
	Header,
	Main,
	RightArrowIcon,
	Row,
	Separator,
	Spinner,
	TextField,
} from '../components'

const StyledTextField = styled(TextField)`
	margin-left: ${props => props.theme.padding.header}px;
	flex: 1;
`

const StyledCloseIcon = styled(CloseIcon)`
	padding-left: ${props => props.theme.margin.icon}px;
	padding-right: ${props => props.theme.padding.header}px;
`

const SmallText = styled(BaseText)`
	font-size: 12px;
`

export const SuburbScreen = (props) => {
	const { navigation } = props
	const [keyword, setKeyword] = useState('')
	const [isLoading, data, errorMsg] = useSuburbSearch(keyword)
	const dispatch = useDispatch()

	const handleChange = (text) => setKeyword(text)
	const handlePress = (item) => {
		dispatch(setSuburb(item))
		navigation.navigate('Home')
	}

	return (
		<>
			<Header>
				<StyledTextField
					value={keyword}
					onChangeText={handleChange}
					autoFocus={true}
					placeholder='Search postcode/suburb'
					accessibilityRole='search'
				/>
				<Button onPress={() => navigation.navigate('Home')}>
					<StyledCloseIcon />
				</Button>
			</Header>
			<Main onPress={() => { Keyboard.dismiss() }}>
				{
					errorMsg &&
					<ErrorAlert>{errorMsg}</ErrorAlert>
				}
				{
					isLoading &&
					<Spinner />
				}
				{
					!errorMsg && !isLoading && (data.length === 0) &&
					<BaseText>
						No results found
					</BaseText>
				}
				{
					!errorMsg && !isLoading && (data.length > 0) &&
					<FlatList
						data={data}
						keyExtractor={(item, index) => index}
						renderItem={({ item }) => (
							<Pressable
								onPress={() => handlePress(item)}
							>
								<Row>
									<View>
										<BaseText>
											{item.name}
										</BaseText>
										<SmallText>
											{`${item.postcode}, ${item.state}`}
										</SmallText>
									</View>
									<RightArrowIcon />
								</Row>
							</Pressable>
						)}
						ItemSeparatorComponent={() => (
							<Separator />
						)}
					/>
				}
			</Main>
		</>
	)
}