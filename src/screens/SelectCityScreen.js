import React, { useState } from 'react'
import styled from 'styled-components/native'
import {
	FlatList,
	Pressable,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { setCity } from '../redux/slices'
import { useCitySearch } from '../hooks'
import {
	BaseText,
	CloseIcon,
	ErrorAlert,
	Header,
	Main,
	RightArrowIcon,
	Row,
	Spinner,
} from '../components'

const SearchBar = styled.TextInput`
	margin-right: 12px;
	flex: 1;
	font-size: 18px;
	padding: 6px;
	color: ${props => props.theme.color.brandText};
	border-bottom-width: 1px;
    border-radius: ${props => props.theme.borderRadius.textField}px;
    border-color: ${props => props.theme.color.brandText};
`

const Separator = styled.View`
	border-bottom-color: ${props => props.theme.color.separator};
	border-bottom-width: ${props => props.theme.border.separator}px;
`

const CityRow = styled(Row)`
	justify-content: space-between;
`

export const SelectCityScreen = (props) => {
	const { navigation } = props
	const [keyword, setKeyword] = useState('')
	const [isLoading, data, errorMsg] = useCitySearch(keyword)
	const dispatch = useDispatch()

	const handleChange = (text) => setKeyword(text)
	const handlePress = (item) => {
		dispatch(setCity(item))
		navigation.navigate('Home')
	}

	return (
		<>
			<Header>
				<SearchBar
					value={keyword}
					onChangeText={handleChange}
					autoFocus={true}
					placeholder='Search'
				/>
				<Pressable onPress={() => navigation.navigate('Home')}>
					<CloseIcon />
				</Pressable>
			</Header>
			<Main>
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
								<CityRow>
									<BaseText>
										{item.name}
									</BaseText>
									<RightArrowIcon />
								</CityRow>
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