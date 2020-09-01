import React, { memo, useRef } from 'react'
import { usePixiInstance } from './hooks/usePixiInstance'
import { useUpdatedData } from './hooks/useUpdatedData'
import styled from 'styled-components'
import { useCallbackRef } from '../hooks/useCallbackRef'
import { DogMap } from '../../../types/data'
import { ScaleBand, ScaleLinear } from 'd3-scale'
import { BeeSwarmContainer } from '../SVG/BeeSwarmSVG'
import { Data } from '../types'
import { Renderers } from '../../Controls/RendererControls/constants'

export interface PixiBeeSwarmProps {
	data: Data[]
	width: number
	height: number
	vpHeight: number
	vpWidth: number
	renderer: Renderers
	yScale: ScaleBand<string>
	xScale: ScaleLinear<number, number>
	details?: DogMap
}

export const PixiBeeSwarm: React.FC<PixiBeeSwarmProps> = memo(
	function PixiBeeSwarm({
		data,
		width,
		height,
		vpWidth,
		vpHeight,
		renderer,
		xScale,
		yScale,
		details,
	}: PixiBeeSwarmProps) {
		const tooltip = useRef<HTMLDivElement | null>(null)
		const [setCanvasElement, canvasElement] = useCallbackRef<HTMLDivElement>()

		// setup pixi instance
		const pixiInstance = usePixiInstance({
			width,
			height,
			toolTipElement: tooltip.current,
			containerElement: canvasElement,
			renderer,
			details,
		})
		// update sprites with new data
		useUpdatedData({ data, pixiInstance, renderer })

		// reuse BeeSwarmContainer with Pixi version and only draw axis
		return (
			<ChartStyle>
				<BeeSwarmContainer
					data={[]}
					width={width}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					height={height}
					xScale={xScale}
					yScale={yScale}
					showData={false}
				/>
				<PixiElement ref={setCanvasElement} className="canvas-ref" />
				<ToolTip ref={tooltip} className="tooltip-ref" />
			</ChartStyle>
		)
	},
)

const ChartStyle = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`

const ToolTip = styled.div`
	z-index: 3;
	position: absolute;
	visibility: hidden;
	max-width: 100px;
`
const PixiElement = styled.div`
	z-index: 2;
	position: absolute;
`
