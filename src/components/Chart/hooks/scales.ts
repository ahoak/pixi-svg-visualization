import { useMemo } from 'react'
import { scaleLinear, ScaleLinear, ScaleBand, scaleBand } from 'd3-scale'
import { correctedMargins } from '../constants'

export function useXScale(
	[min, max]: [number, number],
	vpWidth: number,
): ScaleLinear<number, number> {
	return useMemo(() => {
		return scaleLinear().domain([min, max]).range([0, vpWidth])
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
