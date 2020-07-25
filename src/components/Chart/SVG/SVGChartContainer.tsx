import React, { memo } from 'react'
import { DogMap } from '../../../types/data'
import { BeeSwarmContainer } from './BeeSwarmSVG'
import styled from 'styled-components'
import { ScaleBand, ScaleLinear } from 'd3-scale'
import { useCallbackRef } from '../hooks/useCallbackRef'
import { Data } from '../types'

export interface SVGContainerProps {
	data: Data[]
	width: number
	height: number
	vpHeight: number
	vpWidth: number
	yScale: ScaleBand<string>
	xScale: ScaleLinear<number, number>
	details?: DogMap
}

export const SVGBeeSwarm: React.FC<SVGContainerProps> = memo(
	function SVGBeeSwarm({
		data,
		width,
		height,
		vpHeight,
		vpWidth,
		yScale,
		xScale,
		details,
	}: SVGContainerProps) {
		const [setTooltip, tooltip] = useCallbackRef<HTMLDivElement | null>()
		return (
			<ChartStyle>
				<BeeSwarmContainer
					width={width}
					height={height}
					vpHeight={vpHeight}
					vpWidth={vpWidth}
					data={data}
					tooltip={tooltip}
					yScale={yScale}
					xScale={xScale}
					details={details}
					showData={true}
				/>
				<ToolTip ref={setTooltip} className="tooltip-svg-ref" />
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
