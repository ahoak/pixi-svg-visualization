import { DogDescriptionItem, FilterOptions } from '../types/data'
import { useMemo, useState, useCallback, useEffect } from 'react'
// import { getSlicedData } from '../utils'
export interface SliderSettings {
	min: number
	max: number
}
interface DataBounds {
	chartData: DogDescriptionItem[]
	selectedMax: number
	sliderSettings: SliderSettings
	onSliderChange: (value: number) => void
	maxX: number | Date
	minX: number | Date
}
const defaultMax = 1000

export function useDataBounds(
	data: DogDescriptionItem[],
	xFilter: FilterOptions,
): void {
	// const [selectedMax, setSelectedMax] = useState<number>(defaultMax)
	// const [maxX, setMaxX] = useState<number | Date>(0)
	// const [minX, setMinX] = useState<number | Date>(0)
	// const [chartData, setchartData] = useState<DogDescriptionItem[]>([])
	// const sliderSettings = useMemo(() => {
	// 	return { min: 500, max: data.length }
	// }, [data])
	// // slice the data according to slider value
	// const getChartData = useCallback(
	// 	(newMax?: number) => {
	// 		const max = newMax ? newMax : selectedMax
	// 		const [cData, maxComputed, minComputed] = getSlicedData(
	// 			max,
	// 			data,
	// 			xFilter,
	// 		)
	// 		setMaxX(maxComputed)
	// 		setMinX(minComputed)
	// 		setchartData(cData)
	// 		setSelectedMax(max)
	// 	},
	// 	[data, xFilter, selectedMax],
	// )
	// useEffect(() => {
	// 	getChartData()
	// }, [xFilter, getChartData])
	// const onSliderChange = useCallback(
	// 	(value: number) => {
	// 		getChartData(value)
	// 	},
	// 	[getChartData],
	// )
	// return {
	// 	chartData,
	// 	selectedMax,
	// 	sliderSettings,
	// 	onSliderChange,
	// 	maxX,
	// 	minX,
	// }
}
