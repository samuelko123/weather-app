import {
	useEffect,
	useState,
} from 'react'
import axios from 'axios'

export const useSevenDayForecast = (city) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState(null)
	const [errorMsg, setErrorMsg] = useState(null)

	const fetchData = async () => {
		try {
			setIsLoading(true)
			const url = `https://weather-api-samuelko.vercel.app/api/seven-day-forecast/${city}`
			const res = await axios.get(url)
			setData(res.data)
		} catch (err) {
			setErrorMsg(err.toString())
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [city])

	return [isLoading, data, errorMsg]
}