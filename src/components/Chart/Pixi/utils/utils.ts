import { SpriteInternalCoords } from '../../types'

// maps datum props in "d3 style" to relevant pixi sprite props
export const circle = (
	spriteCoordinates: SpriteInternalCoords,
	radius: number,
) => ({
	x: spriteCoordinates.x,
	y: spriteCoordinates.y,
	width: radius * 2,
	height: radius * 2,
	alpha: 1.0,
	tint: spriteCoordinates.hex ? parseColor(spriteCoordinates.hex) : 0xffffff,
})

// maps a list of attr properties onto a sprite
// note, this can't use object assign because the PIXI.Container has the Sprite ref
export const attrs = (sprite: any, a: any) => {
	Object.keys(a).forEach(key => {
		sprite[key] = a[key]
	})
	return sprite
}

const parseColor = (color: string) => {
	const clean = color.replace('#', '')
	return parseInt(clean, 16)
}
