import {
	useEffect,
	useState,
} from 'react'
import axios from 'axios'

export const useSevenDayForecast = (lat, lon) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])
	const [errorMsg, setErrorMsg] = useState(null)

	const fetchData = async () => {
		try {
			setIsLoading(true)
			const url = `https://weather-api-samuelko.vercel.app/api/seven-day-forecast?lat=${lat}&lon=${lon}`
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
	}, [lat, lon])

	return [isLoading, data, errorMsg]
}