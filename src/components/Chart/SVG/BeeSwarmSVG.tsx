import React, { memo } from 'react'
import { useCallbackRef } from '../hooks/useCallbackRef'
import { correctedMargins } from '../constants'
import { useResizeHandling } from '../hooks/useResizeHandling'
import { DogMap } from '../../../types/data'
import { useCircleDrawing } from './hooks/draw'
import { useXAxisTheming, useYAxisTheming } from '../hooks/axis'
import { ScaleBand, ScaleLinear } from 'd3-scale'
import { Data } from '../types'

export interface BeeSwarmContainerProps {
	data: Data[]
	width: number
	height: number
	vpHeight: number
	vpWidth: number
	tooltip?: HTMLDivElement | null
	yScale: ScaleBand<string>
	xScale: ScaleLinear<number, number>
	showData: boolean
	details?: DogMap
}

export const BeeSwarmContainer: React.FC<BeeSwarmContainerProps> = memo(
	function BeeSwarmContainer({
		data,
		width,
		height,
		tooltip,
		vpHeight,
		vpWidth,
		yScale,
		xScale,
		showData,
		details,
	}: BeeSwarmContainerProps) {
		// Get Refs for SVG Elements
		const [setSvgEl, svgElementRef] = useCallbackRef<SVGSVGElement>()
		const [setXAxisElement, xAxisElement] = useCallbackRef<SVGGElement>()
		const [setYAxisElement, yAxisElement] = useCallbackRef<SVGGElement>()
		const [
			setBeeSwarmContainerElement,
			BeeSwarmContainerElement,
		] = useCallbackRef<SVGGElement>()

		// Optional: Apply thematic D3 themes
		useResizeHandling(svgElementRef, width, height)

		// Append Axis
		useXAxisTheming(xAxisElement, vpHeight, xScale)
		useYAxisTheming(yAxisElement, yScale)

		useCircleDrawing({
			element: BeeSwarmContainerElement,
			data,
			tooltip,
			details,
			showData,
		})

		return (
			<div style={{ position: 'absolute', zIndex: 1 }}>
				<svg ref={setSvgEl} width={width} height={height} role="img">
					<title> Dog Posts on Petfinder API</title>
					<desc id="desc">
						{' '}
						Show increasing number of dog post based on user selection on one
						given day
					</desc>
					<g
						className="viewport"
						transform={`translate(${correctedMargins.left},${correctedMargins.top})`}
					>
						<g className="yscale" ref={setYAxisElement} aria-label="yscale"></g>
						<g className="xscale" ref={setXAxisElement} aria-label="xscale"></g>
						<g
							className="plotarea"
							width={vpWidth}
							height={vpHeight}
							aria-label="plotarea"
						>
							<g ref={setBeeSwarmContainerElement} className="beeswarm"></g>
						</g>
					</g>
				</svg>
			</div>
		)
	},
)
