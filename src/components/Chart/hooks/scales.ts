import { useMemo } from 'react'
import {
	scaleLinear,
	ScaleLinear,
	ScaleBand,
	scaleBand,
	scaleTime,
	ScaleTime,
} from 'd3-scale'
import { correctedMargins } from '../constants'

export function useXScale(
	[min, max]: [number | Date, number | Date],
	vpWidth: number,
): ScaleLinear<number, number> | ScaleTime<number, number> {
	return useMemo(() => {
		if (typeof min === 'number' && typeof max === 'number') {
			return scaleLinear().domain([min, max]).range([0, vpWidth])
		}
		return scaleTime().domain([min, max]).range([0, vpWidth])
	}, [min, max, vpWidth])
}

export function useYScale(
	yRange: string[],
	vpHeight: number,
): ScaleBand<string> {
	return useMemo(() => {
		const yScale = scaleBand()
			.domain(yRange)
			.range([vpHeight, correctedMargins.top])
		return yScale
	}, [vpHeight, yRange])
}
