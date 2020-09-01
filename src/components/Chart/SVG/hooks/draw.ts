import { useLayoutEffect } from 'react'
import { useSelectionOnNode } from '../../hooks/useSelectionOnNode'
import { Selection, select } from 'd3-selection'
import { transition } from 'd3-transition'
import { useHoverEvents } from './events'
import { DogMap } from '../../../../types/data'
import { Data } from '../../types'

const t: any = transition().duration(1000)
const defaultRadius = 2

interface DrawCircles {
	element: SVGGElement | null
	data: Data[]
	showData: boolean
	tooltip?: HTMLDivElement | null
	details?: DogMap
}
export function useCircleDrawing({
	element,
	data,
	showData,
	tooltip,
	details,
}: DrawCircles) {
	const elementSelection = useSelectionOnNode<SVGGElement>(element)

	const [onCircleMouseover, onCircleMouseout] = useHoverEvents(tooltip, details)

	useLayoutEffect(() => {
		if (elementSelection !== null && data.length > 0 && showData) {
			elementSelection
				.selectAll('.dog-nodes')
				.data(data, (d: Data) => d.id)
				.join(
					(enter: Selection<any, any, any, any>) =>
						enter
							.append('circle')
							.attr('class', 'dog-nodes')
							.attr('cx', (d: Data) => d.x)
							.attr('cy', 0)
							.attr('r', defaultRadius)
							.attr('aria-label', (d: Data) => `${d.yFilter}-${d.x}`)
							.call((e: any) =>
								e
									.interrupt()
									.transition(t as any)
									.attr('cy', (d: Data) => d.y),
							)
							.style('fill', (d: Data) => d.color)
							.style('opacity', 0.8)
							.style('stroke-width', 1)
							.style('stroke', (d: Data) => d.color)
							.attr('stroke-opacity', 1),

					(update: Selection<any, any, any, any>) =>
						update.call((e: any) =>
							e
								.interrupt()
								.transition(t as any)
								.style('fill', (d: Data) => d.color)
								.attr('cx', (d: Data) => d.x)
								.attr('cy', (d: Data) => d.y)
								.style('stroke-width', 1)
								.style('stroke', (d: Data) => d.color)
								.style('stroke-opacity', 1),
						),

					(exit: Selection<any, any, any, any>) =>
						exit.call((e: any) => e.remove()),
				)
				.on('mouseover', function (d: Data) {
					// @ts-ignore
					select(this).attr('r', defaultRadius * 2)
					// show tooltip
					onCircleMouseover(d.id, [d.x, d.y])
				})
				.on('mouseout', function (d: Data) {
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
		details,
		showData,
	])
}
