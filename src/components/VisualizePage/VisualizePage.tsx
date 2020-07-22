import React, { memo, useCallback, useState } from 'react'
import { Page } from '../../common/styled'
import styled from 'styled-components'
import { useStateSelection } from '../../hooks/useStateSelection'
import { DogDescriptionItem } from '../../types/data'
import { useDataBounds } from '../../hooks/useDataBounds'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Controls } from '../Controls/Controls'
import { SizedToParent } from '../../utils/SizedToParent'
import { Dimensions } from '../../utils/types'
import { ChartContainer } from '../Chart'
import { useRendererSelection } from '../../hooks/UseRendererSelection'
const sizeStyles = { overflowY: 'hidden' } as React.CSSProperties

export interface VisualizePageProps {
	data: DogDescriptionItem[]
}
export const VisualizePage: React.FC<VisualizePageProps> = memo(
	function VisualizePage({ data }) {
		// get dimensions from ref
		const [chartDimensions, setChartDimensions] = useState<
			Dimensions | undefined
		>(undefined)

		const handleResize = useCallback(
			({ width, height }) => {
				setChartDimensions({ width, height })
			},
			[setChartDimensions],
		)

		const [selectedRenderer, onRendererChange] = useRendererSelection()
		// handle events and selection for dropdown
		const [
			xAxisFilter,
			onXDropDrownChange,
			yAxisFilter,
			onYDropDrownChange,
		] = useStateSelection()
		// Map selected data values based on selections and get data bounds
		const {
			chartData,
			selectedMax,
			sliderSettings,
			onSliderChange,
			maxX,
			minX,
		} = useDataBounds(data, xAxisFilter)
		return (
			<Container>
				<Selections>
					<Header />
					<Controls
						xAxisFilter={xAxisFilter}
						yAxisFilter={yAxisFilter}
						onSliderChange={onSliderChange}
						selectedMax={selectedMax}
						sliderSettings={sliderSettings}
						onXDropDrownChange={onXDropDrownChange}
						onYDropDrownChange={onYDropDrownChange}
						selectedRender={selectedRenderer}
						onRendererChange={onRendererChange}
					/>
				</Selections>
				<Chart>
					<SizedToParent style={sizeStyles} onResize={handleResize}>
						{chartDimensions ? (
							<ChartContainer
								width={chartDimensions.width}
								height={chartDimensions.height}
								data={chartData}
								yAxisFilter={yAxisFilter}
								xAxisFilter={xAxisFilter}
								maxXComputed={maxX}
								minXComputed={minX}
								renderer={selectedRenderer}
							/>
						) : (
							<></>
						)}
					</SizedToParent>
				</Chart>
				<Footer />
			</Container>
		)
	},
)

const Container = styled(Page)`
	margin: 0;
	padding: 0;
	position: relative;
	max-height: 100%;
	max-width: 100%;
	min-height: 400px;
`
const Chart = styled.div`
	position: relative;
	flex: 1;
`
const Selections = styled.div`
	height: 200px;
	position: relative;
`
