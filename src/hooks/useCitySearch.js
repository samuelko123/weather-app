import {
	useEffect,
	useMemo,
	useState,
} from 'react'
import { debounce } from 'lodash'
import axios from 'axios'

export const useCitySearch = (namePrefix) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])
	const [errorMsg, setErrorMsg] = useState(null)

	const fetchData = async () => {
		try {
			setIsLoading(true)
			if (!namePrefix) {
				setData([])
			} else {
				const url = `https://weather-api-samuelko.vercel.app/api/cities/au?namePrefix=${namePrefix}`
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
		[namePrefix]
	)

	useEffect(() => {
		fetchDataDebounced()
		return () => {
			fetchDataDebounced.cancel()
		}
	}, [namePrefix])

	return [isLoading, data, errorMsg]
}