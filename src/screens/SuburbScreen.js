import React, { useState } from 'react'
import styled from 'styled-components/native'
import {
	FlatList,
	Keyboard,
	Pressable,
} from 'react-native'
import { useDispatch } from 'react-redux'

import { setSuburb } from '../redux/slices'
import { useSuburbSearch } from '../hooks'
import {
	BaseText,
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
	flex: 1;
`

const StyledCloseIcon = styled(CloseIcon)`
	margin-left: ${props => props.theme.margin.icon}px;
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
					placeholder='Search'
				/>
				<Pressable onPress={() => navigation.navigate('Home')}>
					<StyledCloseIcon />
				</Pressable>
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
									<BaseText>
										{item.name}
									</BaseText>
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