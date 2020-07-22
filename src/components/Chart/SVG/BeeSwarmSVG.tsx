import React, { memo } from 'react'
import { useCallbackRef } from '../hooks/useCallbackRef'
import { correctedMargins } from '../constants'
import { useResizeHandling } from '../hooks/useResizeHandling'
import {
	FilterYOptions,
	FilterOptions,
	DogDescriptionItem,
} from '../../../types/data'
import { useCircleDrawing } from './hooks/draw'
import { ScaleProps } from '../types'
import { useXAxisTheming, useYAxisTheming } from '../hooks/axis'

export interface BeeSwarmContainerProps {
	data: DogDescriptionItem[]
	width: number
	height: number
	vpHeight: number
	vpWidth: number
	yAxisFilter: FilterYOptions
	xAxisFilter: FilterOptions
	tooltip: HTMLDivElement | null
	scales: ScaleProps
}

export const BeeSwarmContainer: React.FC<BeeSwarmContainerProps> = memo(
	function BeeSwarmContainer({
		data,
		width,
		height,
		tooltip,
		scales,
		vpHeight,
		vpWidth,
		yAxisFilter,
		xAxisFilter,
	}: BeeSwarmContainerProps) {
		// Get Refs for SVG Elements
		const [setSvgEl, svgElementRef] = useCallbackRef<SVGSVGElement>()
		const [setXAxisElement, xAxisElement] = useCallbackRef<SVGGElement>()
		const [setYAxisElement, yAxisElement] = useCallbackRef<SVGGElement>()
		const [
			setBeeSwarmContainerElement,
			BeeSwarmContainerElement,
		] = useCallbackRef<SVGGElement>()

		const { xScale, yScale } = scales

		// Optional: Apply thematic D3 themes
		useResizeHandling(svgElementRef, width, height)

		// Append Axis
		useXAxisTheming(xAxisElement, vpHeight, xScale)
		useYAxisTheming(yAxisElement, yScale)

		useCircleDrawing({
			element: BeeSwarmContainerElement,
			data,
			tooltip,
			scales,
			yAxisFilter,
			xAxisFilter,
		})

		// === without animation ====
		// const circles = useMemo(() => {
		// 	return data.map(d => {
		// 		return (
		// 			<circle
		// 				cx={xScale(d[xAxisFilter])}
		// 				cy={(yScale(d[yAxisFilter]) || 0) + yScale.bandwidth() / 2}
		// 				fill={colorScale(d[yAxisFilter]).hex()}
		// 				r={2}
		// 				key={d.id}
		// 			/>
		// 		)
		// 	})
		// }, [data, xScale, yScale, colorScale])

		return (
			<div style={{ position: 'absolute', zIndex: 1 }}>
				<svg ref={setSvgEl} width={width} height={height}>
					<g
						className="viewport"
						transform={`translate(${correctedMargins.left},${correctedMargins.top})`}
					>
						<g className="yscale" ref={setYAxisElement}></g>
						<g className="xscale" ref={setXAxisElement}></g>
						<g className="plotarea" width={vpWidth} height={vpHeight}>
							{/* {circles} */}
							<g ref={setBeeSwarmContainerElement} className="beeswarm"></g>
						</g>
					</g>
				</svg>
			</div>
		)
	},
)
