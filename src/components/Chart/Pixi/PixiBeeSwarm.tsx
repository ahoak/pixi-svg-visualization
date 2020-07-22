import React, { memo, useRef } from 'react'
import { usePixiInstance } from './hooks/usePixiInstance'
import { useUpdatedData } from './hooks/useUpdatedData'
import { BeeSwarmSVG } from './BeeSwarmSVG'
import styled from 'styled-components'
import { ScaleProps } from '../types'
import { Renderers } from '../../Controls/RendererControls'
import { useCallbackRef } from '../hooks/useCallbackRef'
import {
	DogDescriptionItem,
	FilterYOptions,
	FilterOptions,
} from '../../../types/data'

export interface PixiBeeSwarmProps {
	data: DogDescriptionItem[]
	width: number
	height: number
	vpHeight: number
	vpWidth: number
	scales: ScaleProps
	renderer: Renderers
	yAxisFilter: FilterYOptions
	xAxisFilter: FilterOptions
}

export const PixiBeeSwarm: React.FC<PixiBeeSwarmProps> = memo(
	function PixiBeeSwarm({
		data,
		width,
		height,
		vpWidth,
		vpHeight,
		scales,
		renderer,
		yAxisFilter,
		xAxisFilter,
	}: PixiBeeSwarmProps) {
		const tooltip = useRef<HTMLDivElement | null>(null)
		const [setCanvasElement, canvasElement] = useCallbackRef<HTMLDivElement>()
		const { xScale, yScale } = scales

		// setup pixi instance
		const pixiInstance = usePixiInstance({
			width,
			height,
			toolTipElement: tooltip.current,
			containerElement: canvasElement,
			renderer,
			yAxisFilter,
			xAxisFilter,
			scales,
		})
		// update sprites with new data
		useUpdatedData({ data, pixiInstance, yAxisFilter, xAxisFilter, renderer })

		return (
			<ChartStyle>
				<BeeSwarmSVG
					width={width}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					height={height}
					scales={{ xScale, yScale }}
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
