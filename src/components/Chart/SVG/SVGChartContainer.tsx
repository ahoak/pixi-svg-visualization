import React, { memo, useRef } from 'react'
import {
	FilterYOptions,
	FilterOptions,
	DogDescriptionItem,
} from '../../../types/data'
import { BeeSwarmContainer } from './BeeSwarmSVG'
import styled from 'styled-components'
import { ScaleProps } from '../types'

export interface SVGContainerProps {
	data: DogDescriptionItem[]
	width: number
	height: number
	vpHeight: number
	vpWidth: number
	yAxisFilter: FilterYOptions
	xAxisFilter: FilterOptions
	scales: ScaleProps
}

export const SVGBeeSwarm: React.FC<SVGContainerProps> = memo(
	function SVGBeeSwarm({
		data,
		width,
		height,
		vpHeight,
		vpWidth,
		yAxisFilter,
		xAxisFilter,
		scales,
	}: SVGContainerProps) {
		const tooltip = useRef<HTMLDivElement | null>(null)
		return (
			<ChartStyle>
				<BeeSwarmContainer
					width={width}
					height={height}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					data={data}
					yAxisFilter={yAxisFilter}
					xAxisFilter={xAxisFilter}
					tooltip={tooltip.current}
					scales={scales}
				/>
				<ToolTip ref={tooltip} className="tooltip-svg-ref" />
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
`
