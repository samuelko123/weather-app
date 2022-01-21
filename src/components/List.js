import React from 'react'
import styled from 'styled-components/native'

const Separator = styled.View`
	opacity: 0.3;
	${props => !props.horizontal && `border-bottom-color: ${props.theme.color.iconOnSurface};`}
	${props => !props.horizontal && `border-bottom-width: ${props.theme.base.borderWidth}px;`}
	${props => props.horizontal && `border-right-color: ${props.theme.color.iconOnSurface};`}
	${props => props.horizontal && `border-right-width: ${props.theme.base.borderWidth}px;`}
`

export const List = (props) => {
	const {
		data,
		renderItem,
		horizontal,
	} = props

	const renderSeparator = (item, index) => (
		<Separator
			key={`sep-${index}`}
			horizontal={horizontal}
		/>
	)

	return (
		<>
			{
				!!data && data.length > 0 &&
				data
					.map((item, index) => [renderItem(item, index), renderSeparator(item, index)])
					.flat()
					.slice(0, -1)
			}
		</>
	)
}