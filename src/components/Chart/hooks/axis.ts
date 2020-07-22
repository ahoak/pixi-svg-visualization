import { useEffect } from 'react'
import { select } from 'd3-selection'
import { axisBottom, axisLeft } from 'd3-axis'
import { ScaleLinear, ScaleBand, ScaleTime } from 'd3-scale'
export function useXAxisTheming(
	element: SVGGElement | null,
	height: number,
	xScale: ScaleLinear<number, number> | ScaleTime<number, number>,
): void {
	useEffect(() => {
		if (element && element !== null) {
			select(element)
				.call(axisBottom(xScale))
				.attr('transform', `translate(0, ${height})`)
				.selectAll('text')
				.style('font-family', "'Gaegu', cursive")
				.style('font-size', '20px')
		}
	}, [element, height, xScale])
}

export function useYAxisTheming(
	element: SVGGElement | null,
	yScale: ScaleBand<string>,
): void {
	useEffect(() => {
		if (element && element !== null) {
			select(element)
				.call(axisLeft(yScale))
				.selectAll('text')
				.style('font-family', "'Gaegu', cursive")
				.style('font-size', '20px')
		}
	}, [element, yScale])
}
