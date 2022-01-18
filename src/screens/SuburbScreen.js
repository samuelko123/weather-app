import React, { useState } from 'react'
import styled from 'styled-components/native'
import {
	FlatList,
	Keyboard,
	TouchableWithoutFeedback,
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
	ListContainer,
	Main,
	RightArrowIcon,
	Row,
	Separator,
	Spinner,
	TextField,
} from '../components'

const StyledTextField = styled(TextField)`
	margin-left: ${props => props.theme.base.spacing * 2}px;
	flex: 1;
`

const StyledCloseIcon = styled(CloseIcon)`
	padding-left: ${props => props.theme.base.spacing * 0.5}px;
	padding-right: ${props => props.theme.base.spacing * 2}px;
`

const SmallText = styled(BaseText)`
	font-size: ${props => props.theme.base.fontSize / 1.5}px;
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
			<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
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
						<ListContainer>
							<FlatList
								data={data}
								keyExtractor={(item, index) => index}
								renderItem={({ item }) => (
									<Button
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
									</Button>
								)}
								ItemSeparatorComponent={() => (
									<Separator />
								)}
							/>
						</ListContainer>
					}
				</Main>
			</TouchableWithoutFeedback>
		</>
	)
}