import { useMemo } from 'react'
import {
	CoatYRange,
	GenderYRange,
	SizeYRange,
	FilterYOptions,
} from '../../../types/data'

// Get X Extent
export function useXRange(
	maxXComputed: number | Date,
	minXComputed: number | Date,
): [number | Date, number | Date] {
	return useMemo(() => {
		if (typeof minXComputed === 'number') {
			// start at zero for numerical axis
			return [0, maxXComputed as number]
		}
		return [minXComputed, maxXComputed]
	}, [maxXComputed, minXComputed])
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
