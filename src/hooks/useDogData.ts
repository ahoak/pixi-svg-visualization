import { useMemo, useState } from 'react'
import { csv } from 'd3-fetch'
import { DogDescriptionItem } from '../types/data'
import { generateRandomAge, generateImgSrc } from '../utils'
// Data Gathered from
// https://github.com/the-pudding/data/tree/master/dog-shelters
// under MIT license
const url =
	'https://raw.githubusercontent.com/ahoak/data/master/dog-shelters/allDogDescriptions.csv'

export function useDogData(): DogDescriptionItem[] | undefined {
	const [aggregatedDogData, setAggregatedDogData] = useState<
		DogDescriptionItem[] | undefined
	>()

	useMemo(async () => {
		if (!aggregatedDogData) {
			const parseData = await csv(url).then(function (data: any) {
				const dogDescriptions = data.map((d: any) => {
					return {
						petId: +d.id,
						posted: new Date(d.posted),
						age: generateRandomAge(d.age),
						gender: d.sex,
						size: d.size,
						state: d['contact_state'],
						coat: d.coat || 'Unknown',
						name: d.name,
						adoptable: d.status === 'adoptable',
						imgSrc: generateImgSrc(),
					}
				})
				return dogDescriptions
			})
			setAggregatedDogData(parseData)
		}
	}, [aggregatedDogData])
	return aggregatedDogData
}
