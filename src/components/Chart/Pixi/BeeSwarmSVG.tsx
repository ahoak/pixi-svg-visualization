import React, { memo } from 'react'
import { useCallbackRef } from '../hooks/useCallbackRef'
import { useResizeHandling } from '../hooks/useResizeHandling'
import { useXAxisTheming, useYAxisTheming } from '../hooks/axis'
import { ScaleProps } from '../types'
import { correctedMargins } from '../constants'

export interface BeeSwarmSVGProps {
	width: number
	vpWidth: number
	vpHeight: number
	height: number
	scales: ScaleProps
}

export const BeeSwarmSVG: React.FC<BeeSwarmSVGProps> = memo(
	function BeeSwarmSVG({
		width,
		height,
		scales,
		vpHeight,
		vpWidth,
	}: BeeSwarmSVGProps) {
		// Get Refs for SVG Elements
		const [setSvgEl, svgElementRef] = useCallbackRef<SVGSVGElement>()
		const [setXAxisElement, xAxisElement] = useCallbackRef<SVGGElement>()
		const [setYAxisElement, yAxisElement] = useCallbackRef<SVGGElement>()

		// Optional: Apply thematic D3 themes
		useResizeHandling(svgElementRef, width, height) // modify to have transparent background

		// Append Axis
		useXAxisTheming(xAxisElement, vpHeight, scales.xScale)
		useYAxisTheming(yAxisElement, scales.yScale)

		return (
			<div style={{ position: 'absolute', zIndex: 1 }}>
				<svg ref={setSvgEl} width={width} height={height}>
					<g
						className="viewport"
						transform={`translate(${correctedMargins.left},${correctedMargins.top})`}
					>
						<g className="yscale" ref={setYAxisElement}></g>
						<g className="xscale" ref={setXAxisElement}></g>
						<g className="plotarea" width={vpWidth} height={vpHeight}></g>
					</g>
				</svg>
			</div>
		)
	},
)
