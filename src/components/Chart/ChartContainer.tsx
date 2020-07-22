import React, { memo, useMemo } from 'react'
import {
	FilterYOptions,
	DogDescriptionItem,
	FilterOptions,
} from '../../types/data'
import styled from 'styled-components'
import { useXRange, useYRange } from './hooks/range'
import { useXScale, useYScale } from './hooks/scales'
import { useViewportDimensions } from './hooks/useViewportDimensions'
import { useColorizer } from './hooks/color'
import { PixiBeeSwarm } from './Pixi'
import { SVGBeeSwarm } from './SVG'
import { Renderers } from '../Controls/RendererControls/RendererControls'

export interface ChartContainerProps {
	data: DogDescriptionItem[]
	width: number
	height: number
	yAxisFilter: FilterYOptions
	xAxisFilter: FilterOptions
	maxXComputed: Date | number
	minXComputed: Date | number
	renderer: Renderers
}

export const ChartContainer: React.FC<ChartContainerProps> = memo(
	function ChartContainer({
		data,
		width,
		height,
		yAxisFilter,
		xAxisFilter,
		maxXComputed,
		minXComputed,
		renderer,
	}: ChartContainerProps) {
		// Move scale setup here to use for both SVG/WebGL implementation
		const [vpWidth, vpHeight] = useViewportDimensions(width, height)
		const [minX, maxX] = useXRange(maxXComputed, minXComputed)
		const yRange = useYRange(yAxisFilter)
		const xScale = useXScale([minX, maxX], vpWidth)
		const yScale = useYScale(yRange, vpHeight)
		const colorScale = useColorizer(yRange)

		const chart = useMemo(() => {
			return renderer === Renderers.SVG ? (
				<SVGBeeSwarm
					width={width}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					height={height}
					scales={{ xScale, yScale, colorScale }}
					data={data}
					xAxisFilter={xAxisFilter}
					yAxisFilter={yAxisFilter}
				/>
			) : (
				<PixiBeeSwarm
					width={width}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					height={height}
					scales={{ xScale, yScale, colorScale }}
					data={data}
					renderer={renderer}
					xAxisFilter={xAxisFilter}
					yAxisFilter={yAxisFilter}
				/>
			)
		}, [
			width,
			height,
			vpHeight,
			vpWidth,
			xScale,
			yScale,
			colorScale,
			data,
			renderer,
			xAxisFilter,
			yAxisFilter,
		])
		return <ChartStyle>{chart}</ChartStyle>
	},
)

const ChartStyle = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: inline-flex;
`
