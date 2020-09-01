import { ScaleBand } from 'd3-scale'
import { useMemo } from 'react'
import { FilterYOptions, DogDescriptionItem } from '../../../types/data'
import { Data } from '../types'
const radius = 2
interface TransformedDataProps {
	vpWidth: number
	vpHeight: number
	data: DogDescriptionItem[]
	yAxisFilter: FilterYOptions
	yScale: ScaleBand<string>
	selectedMax: number
}
export function useTransformedData({
	data,
	yScale,
	vpHeight,
	vpWidth,
	yAxisFilter,
	selectedMax,
}: TransformedDataProps): Data[] {
	const mappedData = useMemo((): Data[] => {
		return data.reduce((acc, d) => {
			const coords = d.pos
			const found = coords.find(o => o.yFilter === yAxisFilter)
			if (found) {
				const y = found.y * vpHeight + yScale.bandwidth() / 2
				const x = found.x * vpWidth
				acc.push(
					Object.assign(
						{},
						{
							x,
							y,
							color: found.color,
							hex: found.hex,
							id: d.id,
							yFilter: found.yFilter,
						},
					),
				)
			}
			return acc
		}, [] as Data[])
	}, [vpWidth, vpHeight, data, yAxisFilter, yScale])
	const heightData = useMemo((): Data[] => {
		return mapHeight(mappedData, radius, yScale.bandwidth())
	}, [mappedData, yScale])
	return useMemo(() => heightData.slice(0, selectedMax), [
		heightData,
		selectedMax,
	])
}

interface HMap {
	[key: number]: Data[]
}

function mapHeight(data: Data[], radius: number, maxBandwidth: number) {
	const hMap: HMap = {}
	let rFactor = 0
	const xOffset = radius * 2
	let yHeight = 0
	let positive = true

	for (const d of data) {
		rFactor = Math.floor(d.x / xOffset)
		if (!hMap[rFactor]) {
			hMap[rFactor] = []
		}
		hMap[rFactor].push(d)
	}
	const output: any[] = []
	for (const k in hMap) {
		const arr = hMap[k]
		yHeight = 0
		let yHeightDown = 0
		let maxX = 0
		positive = true
		for (const node of arr) {
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
