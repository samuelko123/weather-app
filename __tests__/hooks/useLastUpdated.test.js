import {
	act,
	renderHook,
} from '@testing-library/react-hooks'
import { useLastUpdated } from '../../src/hooks'

describe('happy path', () => {
	beforeEach(() => {
		jest.useFakeTimers()
	})

	it('returns an intervalled time stamp', () => {
		const now = 946684800
		const { result } = renderHook(() => useLastUpdated(now))
		act(() => {
			const spy = jest.spyOn(Date, 'now').mockImplementation(() => new Date((now + 60) * 1000))
			jest.runOnlyPendingTimers()
			spy.mockRestore()
		})

		expect(result.current[0]).toEqual('a minute ago')
	})
})