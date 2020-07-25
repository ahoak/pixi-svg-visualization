import * as PIXI from 'pixi.js'
import { XYCoordinates } from '../../../types/data'

export interface SpriteInternalCoords {
	x: number
	y: number
	hex: number
	node: Data
}
export interface SpriteData {
	sprite: PIXI.Sprite
	_data: SpriteInternalCoords
}

export interface SpriteMap {
	[key: string]: SpriteData
}
export interface Data extends XYCoordinates {
	id: string
}
