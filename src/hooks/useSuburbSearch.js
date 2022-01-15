import {
	useEffect,
	useMemo,
	useState,
} from 'react'
import { debounce } from 'lodash'
import axios from 'axios'

export const useSuburbSearch = (keyword) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])
	const [errorMsg, setErrorMsg] = useState(null)

	const fetchData = async () => {
		try {
			setIsLoading(true)
			setErrorMsg(null)
			if (!keyword) {
				setData([])
			} else {
				const url = `https://weather-api-samuelko.vercel.app/api/suburbs/${keyword}`
				const res = await axios.get(url)
				setData(res.data)
			}
		} catch (err) {
			setErrorMsg(err.toString())
		} finally {
			setIsLoading(false)
		}
	}

	const fetchDataDebounced = useMemo(
		() => debounce(fetchData, 500),
		[keyword]
	)

	useEffect(() => {
		fetchDataDebounced()
		return () => {
			fetchDataDebounced.cancel()
		}
	}, [keyword])

	return [isLoading, data, errorMsg]
}