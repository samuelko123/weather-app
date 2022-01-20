import React from 'react'
import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const ListContainer = styled.View`
	background-color: ${props => props.theme.color.surface};
	border-radius: ${props => props.theme.base.borderRadius}px;
`

const Separator = styled.View`
	border-bottom-color: ${props => props.theme.color.onBackground};
	border-bottom-width: ${props => props.theme.base.borderWidth * 0.5}px;
	opacity: 0.3;
`

export const List = (props) => {
	const {
		data,
		renderItem,
	} = props

	const renderSeparator = (item, index) => (
		<Separator key={`sep-${index}`} />
	)

	const listEmptyComponent = (
		<BaseText>
			No results found
		</BaseText>
	)

	return (
		<>
			{
				(!data || data.length === 0) &&
				listEmptyComponent
			}
			{
				!!data && data.length > 0 &&
				<ListContainer>
					{
						data
							.map((item, index) => [renderItem(item, index), renderSeparator(item, index)])
							.flat()
							.slice(0, -1)
					}
				</ListContainer>
			}
		</>
	)
}