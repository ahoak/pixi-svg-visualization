import { IDropdownOption } from '@fluentui/react'

export enum FilterOptions {
	age = 'age',
	posted = 'posted',
}

export const DropdownXOptions: IDropdownOption[] = [
	{
		key: FilterOptions.age,
		text: FilterOptions.age,
	},
	{
		key: FilterOptions.posted,
		text: 'date posted on petFinder',
	},
]

export enum FilterYOptions {
	coat = 'coat',
	gender = 'gender',
	size = 'size',
}

export const DropdownYOptions: IDropdownOption[] = [
	{
		key: FilterYOptions.coat,
		text: FilterYOptions.coat,
	},
	{
		key: FilterYOptions.gender,
		text: FilterYOptions.gender,
	},
	{
		key: FilterYOptions.size,
		text: FilterYOptions.size,
	},
]

export enum DogAge {
	Senior = 'Senior',
	Adult = 'Adult',
	Young = 'Young',
	Baby = 'Baby',
}

export enum DogCoat {
	Curly = 'Curly',
	Long = 'Long',
	Medium = 'Medium',
	Short = 'Short',
	Wire = 'Wire',
	Hairless = 'Hairless',
	Unknown = 'Unknown',
}

export enum DogGender {
	Male = 'Male',
	Female = 'Female',
	Unknown = 'Unknown',
}
export enum DogSize {
	Small = 'Small',
	Medium = 'Medium',
	Large = 'Large',
	ExtraLarge = 'Extra Large',
}

export const CoatYRange = [
	DogCoat.Curly,
	DogCoat.Long,
	DogCoat.Medium,
	DogCoat.Short,
	DogCoat.Wire,
	DogCoat.Hairless,
	DogCoat.Unknown,
]

export const GenderYRange = [
	DogGender.Male,
	DogGender.Female,
	DogGender.Unknown,
]

export const SizeYRange = [
	DogSize.Small,
	DogSize.Medium,
	DogSize.Large,
	DogSize.ExtraLarge,
]
// export interface DogDescriptionItem {
// 	petId: number
// 	posted: Date
// 	age: number
// 	gender: DogGender
// 	size: DogSize
// 	state: string
// 	coat: DogCoat
// 	name: string
// 	adoptable: boolean
// 	imgSrc: string
// }
export interface XYCoordinates {
	x: number
	y: number
	color: string
	hex: number
	yFilter: FilterYOptions
}
export interface DogDescriptionItem {
	pos: XYCoordinates[]
	id: string
}
export interface ChartData {
	id: number
	xValue: number
	yValue: string
	name: string
}

export interface DogDetails {
	posted: string
	age: number
	gender: DogGender
	state: string
	imgSrc: string
	name: string
}

export interface DogMap {
	[key: string]: DogDetails
}
