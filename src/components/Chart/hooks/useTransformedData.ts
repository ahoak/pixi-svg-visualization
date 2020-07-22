import { ScaleLinear, ScaleBand, ScaleTime } from 'd3-scale'
import { useMemo, useCallback } from 'react'
import {
	DogDescriptionItem,
	FilterOptions,
	FilterYOptions,
} from '../../../types/data'
import { DataMap, PixiData } from '../types'
const radius = 2
interface TransformedDataProps {
	data: DogDescriptionItem[]
	visibleIDS: Set<string>
	xAxisFilter: FilterOptions
	yAxisFilter: FilterYOptions
	xScale: ScaleLinear<number, number> | ScaleTime<number, number>
	yScale: ScaleBand<string>
	colorScale: (item: string) => string
}
export function useTransformedData({
	data,
	visibleIDS,
	xAxisFilter,
	yAxisFilter,
	xScale,
	yScale,
	colorScale,
}: TransformedDataProps): DataMap {
	const getNodeColor = useCallback(
		(d: DogDescriptionItem): string => {
			return colorScale(d[yAxisFilter]).replace('#', '')
		},
		[colorScale, yAxisFilter],
	)

	const parseColor = (color: string) => {
		const clean = color.replace('#', '')
		return parseInt(clean, 16)
	}

	const getXValue = useCallback(
		(d: DogDescriptionItem) => {
			return xScale(d[xAxisFilter]) || 0
		},
		[xAxisFilter, xScale],
	)
	const getYValue = useCallback(
		(d: DogDescriptionItem) => {
			return (yScale(d[yAxisFilter]) || 0) + yScale.bandwidth() / 2
		},
		[yAxisFilter, xScale],
	)

	return useMemo((): DataMap => {
		const dataByBand: DataBand = {}
		const mapData = data.reduce((acc, d) => {
			const hex = getNodeColor(d)
			const value = {
				x: getXValue(d),
				y: getYValue(d),
				color: parseColor(hex),
				hex,
				r: visibleIDS.has(`${d.petId}`) ? radius : 0,
				id: `${d.petId}`,
				visible: visibleIDS.has(`${d.petId}`),
				data: d,
			} as PixiData
			acc[value.id] = value
			if (dataByBand[d[yAxisFilter]]) {
				dataByBand[d[yAxisFilter]].push(value)
			} else {
				dataByBand[d[yAxisFilter]] = [value]
			}

			return acc
		}, {} as DataMap)
		// modify y value to "jiggle" up or down value
		// Object.keys(dataByBand).map(key => {
		// 	return mapHeight(dataByBand[key], radius, yScale.bandwidth())
		// })
		return mapData
	}, [data, getXValue, getYValue, getNodeColor, yAxisFilter, yScale])
}
interface DataBand {
	[key: string]: PixiData[]
}
interface HMap {
	[key: number]: PixiData[]
}

function mapHeight(data: PixiData[], radius: number, maxBandwidth: number) {
	let hMap: HMap = {}
	let rFactor = 0
	let xOffset = radius * 2
	let yHeight = 0
	let positive = true

	for (let d of data) {
		rFactor = Math.floor(d.x / xOffset)
		if (!hMap[rFactor]) {
			hMap[rFactor] = []
		}
		hMap[rFactor].push(d)
	}
	let output: any[] = []
	for (let k in hMap) {
		const arr = hMap[k]
		yHeight = 0
		let yHeightDown = 0
		let maxX = 0
		positive = true
		for (let node of arr) {
			maxX = Math.max(maxX, node.x)
			if (positive) {
				yHeight += yHeight === 0 ? 0 : radius
				yHeight = Math.min(yHeight, maxBandwidth / 2)
				node.y = node.y - yHeight
				yHeight += radius
				yHeightDown = yHeightDown === 0 ? radius : yHeightDown
				positive = false
			} else {
				yHeightDown += radius
				yHeightDown = Math.min(yHeightDown, maxBandwidth / 2)
				node.y = node.y + yHeightDown
				yHeightDown += radius
				positive = true
			}
			output.push(node)
		}
	}
	return output
}
