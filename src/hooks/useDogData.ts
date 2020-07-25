import { useMemo, useState } from 'react'
import { DogDescriptionItem, DogMap } from '../types/data'
// import { generateRandomAge, generateImgSrc } from '../utils'
// Data Gathered from
// https://github.com/the-pudding/data/tree/master/dog-shelters
// under MIT license

const postionFile = process.env.PUBLIC_URL + '/dog-data.json'
const detailsFile = process.env.PUBLIC_URL + '/dog-map.json'

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

// const url =
// 	'https://raw.githubusercontent.com/ahoak/data/master/dog-shelters/allDogDescriptions.csv'

// export function useDogData(): DogDescriptionItem[] | undefined {
// 	const [aggregatedDogData, setAggregatedDogData] = useState<
// 		DogDescriptionItem[] | undefined
// 	>()

// 	useMemo(async () => {
// 		if (!aggregatedDogData) {
// 			const parseData = await csv(url).then(function (data: any) {
// 				const dogDescriptions = data.map((d: any) => {
// 					return {
// 						petId: +d.id,
// 						posted: new Date(d.posted),
// 						age: generateRandomAge(d.age),
// 						gender: d.sex,
// 						size: d.size,
// 						state: d['contact_state'],
// 						coat: d.coat || 'Unknown',
// 						name: d.name,
// 						adoptable: d.status === 'adoptable',
// 						imgSrc: generateImgSrc(),
// 					}
// 				})
// 				return dogDescriptions
// 			})
// 			setAggregatedDogData(parseData)
// 		}
// 	}, [aggregatedDogData])
// 	return aggregatedDogData
// }
