import React, { memo, useMemo } from 'react'
import { FilterYOptions, DogDescriptionItem, DogMap } from '../../types/data'
import styled from 'styled-components'
import { useViewportDimensions } from './hooks/useViewportDimensions'
import { SVGBeeSwarm } from './SVG'
import { useYRange, useXRange } from './hooks/range'
import { useYScale, useXScale } from './hooks/scales'
import { useTransformedData } from './hooks/useTransformedData'
import { PixiBeeSwarm } from './Pixi'
import { Renderers } from '../Controls/RendererControls/constants'

export interface ChartContainerProps {
	data: DogDescriptionItem[]
	width: number
	height: number
	yAxisFilter: FilterYOptions
	renderer: Renderers
	selectedMax: number
	details?: DogMap
}

export const ChartContainer: React.FC<ChartContainerProps> = memo(
	function ChartContainer({
		data,
		width,
		height,
		yAxisFilter,
		renderer,
		selectedMax,
		details,
	}: ChartContainerProps) {
		// Move scale setup here to use for both SVG/WebGL implementation
		const [vpWidth, vpHeight] = useViewportDimensions(width, height)
		const yRange = useYRange(yAxisFilter)
		const xRange = useXRange(details)
		const xScale = useXScale(xRange, vpWidth)
		const yScale = useYScale(yRange, vpHeight)
		const heightMapData = useTransformedData({
			data,
			yScale,
			vpHeight,
			vpWidth,
			yAxisFilter,
			selectedMax,
		})

		const chart = useMemo(() => {
			return renderer === Renderers.SVG ? (
				<SVGBeeSwarm
					width={width}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					height={height}
					data={heightMapData}
					yScale={yScale}
					xScale={xScale}
					details={details}
				/>
			) : (
				<PixiBeeSwarm
					width={width}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					height={height}
					data={heightMapData}
					renderer={renderer}
					yScale={yScale}
					xScale={xScale}
					details={details}
				/>
			)
		}, [
			width,
			height,
			vpHeight,
			vpWidth,
			heightMapData,
			renderer,
			yScale,
			details,
			xScale,
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
