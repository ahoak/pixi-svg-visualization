import * as PIXI from 'pixi.js'
import { ScaleLinear, ScaleBand, ScaleTime } from 'd3-scale'
import {
	FilterOptions,
	FilterYOptions,
	DogDescriptionItem,
} from '../../../types/data'

export interface SpriteInternalCoords {
	x: number
	y: number
	hex?: string
	node: DogDescriptionItem
}
export interface SpriteData {
	sprite: PIXI.Sprite
	_data: SpriteInternalCoords
}

export interface SpriteMap {
	[key: string]: SpriteData
}

export interface Filters {
	x: FilterOptions
	y: FilterYOptions
}
export interface ScaleProps {
	xScale: ScaleLinear<number, number> | ScaleTime<number, number>
	yScale: ScaleBand<string>
	colorScale?: (item: string) => string
}

export interface PixiData {
	x: number
	y: number
	visible: boolean
	color: number
	hex: string
	r: number
	id: string
	data: DogDescriptionItem
}

export interface DataMap {
	[id: string]: PixiData
}

export interface FilterMap {
	y: FilterYOptions
	x: FilterOptions
}
