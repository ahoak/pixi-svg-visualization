import { useEffect, useCallback } from 'react'
import { useSelectionOnNode } from '../../hooks/useSelectionOnNode'
import { Selection, select } from 'd3-selection'
import { transition } from 'd3-transition'
import { useHoverEvents } from './events'
import {
	DogDescriptionItem,
	FilterYOptions,
	FilterOptions,
} from '../../../../types/data'
import { ScaleProps } from '../../types'

const t: any = transition().duration(1000)
const defaultRadius = 2

interface DrawCircles {
	element: SVGGElement | null
	data: DogDescriptionItem[]
	tooltip: HTMLDivElement | null
	scales: ScaleProps
	yAxisFilter: FilterYOptions
	xAxisFilter: FilterOptions
}
export function useCircleDrawing({
	element,
	data,
	tooltip,
	scales,
	yAxisFilter,
	xAxisFilter,
}: DrawCircles) {
	const elementSelection = useSelectionOnNode<SVGGElement>(element)
	const { xScale, yScale, colorScale } = scales

	const [onCircleMouseover, onCircleMouseout] = useHoverEvents(tooltip)
	const getXValue = useCallback(
		(d: DogDescriptionItem) => xScale(d[xAxisFilter]),
		[xAxisFilter, xScale],
	)
	const getYValue = useCallback(
		(d: DogDescriptionItem) =>
			(yScale(d[yAxisFilter]) || 0) + yScale.bandwidth() / 2,
		[yScale, yAxisFilter],
	)

	const getColor = useCallback(
		(d: DogDescriptionItem) => {
			return colorScale ? colorScale(d[yAxisFilter]) : 'white'
		},
		[colorScale, yAxisFilter],
	)

	useEffect(() => {
		if (elementSelection !== null && data.length > 0) {
			elementSelection
				.selectAll('.dog-nodes')
				.data(data, (d: DogDescriptionItem) => d.petId)
				.join(
					(enter: Selection<any, any, any, any>) =>
						enter
							.append('circle')
							.attr('class', 'dog-nodes')
							.attr('cx', (d: DogDescriptionItem) => getXValue(d))
							.attr('cy', 0)
							.call((e: any) =>
								e
									.interrupt()
									.transition(t as any)
									.attr('cy', (d: DogDescriptionItem) => getYValue(d))
									.attr('r', defaultRadius)
									.style('fill', (d: DogDescriptionItem) => getColor(d))
									.style('opacity', 0.8)
									.style('stroke-width', 1)
									.style('stroke', (d: DogDescriptionItem) => getColor(d))
									.attr('stroke-opacity', 1),
							),
					(update: Selection<any, any, any, any>) =>
						update.call((e: any) =>
							e
								.interrupt()
								.transition(t as any)
								.style('fill', (d: DogDescriptionItem) => getColor(d))
								.attr('cx', (d: DogDescriptionItem) => getXValue(d))
								.attr('cy', (d: DogDescriptionItem) => getYValue(d))
								.style('stroke-width', 1)
								.style('stroke', (d: DogDescriptionItem) => getColor(d))
								.style('stroke-opacity', 1),
						),

					(exit: Selection<any, any, any, any>) =>
						exit.call((e: any) => e.remove()),
				)
				.on('mouseover', function (d: DogDescriptionItem) {
					// @ts-ignore
					select(this).attr('r', defaultRadius * 2)
					const x: number = getXValue(d)
					const y: number = getYValue(d)
					const coords = [x, y] as [number, number]
					// show tooltip
					onCircleMouseover(d, coords)
				})
				.on('mouseout', function () {
					// @ts-ignore
					select(this).attr('r', defaultRadius)
					onCircleMouseout()
				})
		}
	}, [
		elementSelection,
		data,
		tooltip,
		onCircleMouseout,
		onCircleMouseover,
		getXValue,
		getYValue,
		getColor,
	])
}
