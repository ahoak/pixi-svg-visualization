import { useMemo, useState } from 'react'
import { DogDescriptionItem, DogMap } from '../types/data'
// Data Gathered from
// https://github.com/the-pudding/data/tree/master/dog-shelters
// under MIT license

const postionFile =
	'https://raw.githubusercontent.com/ahoak/pixi-svg-visualization/main/data/dog-data.json'
const detailsFile =
	'https://raw.githubusercontent.com/ahoak/pixi-svg-visualization/main/data/dog-map.json'

export function useDogData(): [
	DogDescriptionItem[] | undefined,
	DogMap | undefined,
] {
	const [aggregatedDogData, setAggregatedDogData] = useState<
		DogDescriptionItem[] | undefined
	>()
	const [mapDogData, setMapDogData] = useState<DogMap | undefined>()

	useMemo(async () => {
		if (!aggregatedDogData) {
			const parseData = await (await fetch(postionFile)).json()
			console.log(parseData)
			setAggregatedDogData(parseData)
		}
	}, [aggregatedDogData])

	useMemo(async () => {
		if (!mapDogData) {
			const parseData = await (await fetch(detailsFile)).json()
			setMapDogData(parseData)
		}
	}, [mapDogData])
	return [aggregatedDogData, mapDogData]
}
