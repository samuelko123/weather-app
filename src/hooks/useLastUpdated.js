import React from 'react'
import moment from 'moment'

export const useLastUpdated = (dt) => {
	const [desc, setDesc] = React.useState(0)

	React.useEffect(() => {
		const timer = setInterval(() => {
			setDesc(moment.unix(dt).fromNow())
		}, 1000)

		return () => clearInterval(timer)
	}, [dt])

	return [desc]
}