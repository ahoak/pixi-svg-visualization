import { DogAge, DogDescriptionItem, FilterOptions } from '../types/data'

function generateRandomNumber(min: number, max: number): number {
	return Math.random() * (max - min) + min
}
// This data file was last updated: September 29, 2019
const DataPullDate = new Date('2019-09-29T12:00:00Z')

export function calculateDays(datestring: string): number {
	const datePosted = new Date(datestring)
	return Math.round(
		Math.abs(
			(datePosted.getTime() - DataPullDate.getTime()) / (1000 * 3600 * 24),
		),
	)
}

export function generateRandomAge(ageLabel: DogAge): number {
	switch (ageLabel) {
		case DogAge.Senior:
			return generateRandomNumber(10, 15)
		case DogAge.Adult:
			return generateRandomNumber(5, 10)
		case DogAge.Young:
			return generateRandomNumber(1, 5)
		case DogAge.Baby:
			return generateRandomNumber(0, 1)
		default:
			return 0
	}
}

export function generateImgSrc(): string {
	return `/images/${Math.round(generateRandomNumber(1, 10))}-dog.svg`
}

export function parseColors(colorstring: string): string[] {
	const split = colorstring.split('/')
	return split.map(color => color.trim().toLowerCase())
}

function handleComparison(
	item: DogDescriptionItem,
	xFilter: FilterOptions,
	max: number | Date,
) {
	let localMax
	if (typeof max === 'number') {
		const comparison = item[xFilter] as number
		if (comparison > max) {
			localMax = comparison
		}
	} else {
		const comparison = item[xFilter] as Date
		if (comparison > max) {
			localMax = comparison
		}
	}
	return localMax
}

function handleMinComparison(
	item: DogDescriptionItem,
	xFilter: FilterOptions,
	min: number | Date,
) {
	let localMin
	if (typeof min === 'number') {
		const comparison = item[xFilter] as number
		if (comparison < min) {
			localMin = comparison
		}
	} else {
		const comparison = item[xFilter] as Date
		if (comparison < min) {
			localMin = comparison
		}
	}
	return localMin
}

export function getSlicedData(
	upperbound: number,
	dataRef: DogDescriptionItem[],
	xFilter: FilterOptions,
): [DogDescriptionItem[], Date | number, Date | number] {
	let dataContainer: DogDescriptionItem[] = []
	let maxXComputed = dataRef[0][xFilter]
	let minXComputed = dataRef[0][xFilter]
	for (let i = 0; i < upperbound; i++) {
		const selectedItem = dataRef[i]
		const newMax = handleComparison(selectedItem, xFilter, maxXComputed)
		maxXComputed = newMax ? newMax : maxXComputed
		const newMin = handleMinComparison(selectedItem, xFilter, minXComputed)
		minXComputed = newMin ? newMin : minXComputed
		dataContainer.push(selectedItem)
	}
	return [dataContainer, maxXComputed, minXComputed]
}

export function getTooltipHtml(data: DogDescriptionItem): string {
	return `
	<h2>${data.name.toUpperCase()}</h2>
	<img src=${data.imgSrc} style="width: 100px;"> </img>
	Age: ${Math.round(data.age)}<br />Posted: ${data.posted.toDateString()}
	<br /> Adoptable: ${data.adoptable}
	<br /> State: ${data.state}
	`
}
