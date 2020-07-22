import { useMemo } from 'react'

const colors = [
	'#80acf7',
	'#35c456',
	'#f88c8d',
	'#3dbcbc',
	'#c2ab37',
	'#f67eed',
	'#40b6d8',
	'#95b439',
	'#f683ba',
	'#3fbc9b',
]

export function useColorizer(yRange: string[]): (item: string) => string {
	const idNumberMap = useMemo((): Record<string, number> => {
		return yRange.reduce((idMap, key: string, idx: number) => {
			idMap[key] = idx
			return idMap
		}, {} as Record<string, number>)
	}, [yRange])

	const nominalColorScale = useMemo((): ((item: string) => string) => {
		const scale = (i: number) => colors[i % colors.length]
		return (id: string): string => scale(idNumberMap[id])
	}, [idNumberMap])

	return nominalColorScale
}
