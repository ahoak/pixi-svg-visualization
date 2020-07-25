import { IChoiceGroupOption } from '@fluentui/react'

export enum Renderers {
	SVG = 'SVG',
	Canvas = 'Canvas',
	WebGL = 'WebGL',
}

const imageSize = { width: 32, height: 32 }
const imageSrc = `${process.env.PUBLIC_URL}/cocker-sp-outline.svg`
const selectedImageSrc = `${process.env.PUBLIC_URL}/cocker-sp.svg`

export const RendererOptions: IChoiceGroupOption[] = [
	{
		key: Renderers.SVG,
		text: Renderers.SVG,
		imageSrc,
		selectedImageSrc,
		imageSize,
	},
	{
		key: Renderers.Canvas,
		text: Renderers.Canvas,
		imageSrc,
		selectedImageSrc,
		imageSize,
	},
	{
		key: Renderers.WebGL,
		text: Renderers.WebGL,
		imageSrc,
		selectedImageSrc,
		imageSize,
	},
]
