import { useMemo } from 'react'
import {
	CoatYRange,
	GenderYRange,
	SizeYRange,
	FilterYOptions,
	DogMap,
} from '../../../types/data'

// Get X Extent
export function useXRange(dogMap?: DogMap): [number, number] {
	return useMemo(() => {
		if (dogMap) {
			const maxAge = Object.keys(dogMap).reduce((acc, id) => {
				const details = dogMap[id]
				if (details.age > acc) {
					acc = details.age
				}
				return acc
			}, 0 as number)
			return [0, maxAge]
		}
		return [0, 0]
	}, [dogMap])
}

// Get Y Bands
export function useYRange(yFilter: FilterYOptions): string[] {
	return useMemo(() => {
		// we could iterate over the data and get a set of all y values
		// but instead this is precomputed in types
		switch (yFilter) {
			case FilterYOptions.coat:
				return CoatYRange
			case FilterYOptions.gender:
				return GenderYRange
			case FilterYOptions.size:
				return SizeYRange
			default:
				return []
		}
	}, [yFilter])
}
