import { DogDescriptionItem } from '../types/data'
import { useMemo, useState, useCallback } from 'react'
export interface SliderSettings {
	min: number
	max: number
}
interface DataBounds {
	selectedMax: number
	sliderSettings: SliderSettings
	onSliderChange: (value: number) => void
}

export function useSliderSettings(data: DogDescriptionItem[]): DataBounds {
	const [selectedMax, setSelectedMax] = useState<number>(data.length)

	const sliderSettings = useMemo(() => {
		return { min: 500, max: data.length }
	}, [data])
	// slice the data according to slider value

	const onSliderChange = useCallback(
		(value: number) => {
			setSelectedMax(value)
		},
		[setSelectedMax],
	)
	return {
		selectedMax,
		sliderSettings,
		onSliderChange,
	}
}
