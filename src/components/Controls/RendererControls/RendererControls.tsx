import * as React from 'react'
import { memo, FormEvent } from 'react'
import { IChoiceGroupOption, ChoiceGroup } from '@fluentui/react'
import styled from 'styled-components'

export enum Renderers {
	SVG = 'SVG',
	Canvas = 'Canvas',
	WebGL = 'WebGL',
}

export const RendererOptions: IChoiceGroupOption[] = [
	{
		key: Renderers.SVG,
		text: Renderers.SVG,
		imageSrc: '/cocker-sp-outline.svg',
		selectedImageSrc: '/cocker-sp.svg',
		imageSize: { width: 32, height: 32 },
	},
	{
		key: Renderers.Canvas,
		text: Renderers.Canvas,
		imageSrc: '/cocker-sp-outline.svg',
		selectedImageSrc: '/cocker-sp.svg',
		imageSize: { width: 32, height: 32 },
	},
	{
		key: Renderers.WebGL,
		text: Renderers.WebGL,
		imageSrc: '/cocker-sp-outline.svg',
		selectedImageSrc: '/cocker-sp.svg',
		imageSize: { width: 32, height: 32 },
	},
]

interface RendererControlsProps {
	selectedRender: string
	onChange: (
		ev: FormEvent<HTMLElement | HTMLInputElement> | undefined,
		option?: IChoiceGroupOption,
	) => void
}
export const RendererControls: React.FC<RendererControlsProps> = memo(
	function RendererControls({ selectedRender, onChange }) {
		return (
			<Spacer>
				<ChoiceGroup
					selectedKey={selectedRender}
					options={RendererOptions}
					onChange={onChange}
					label="Renderer"
				/>
			</Spacer>
		)
	},
)

const Spacer = styled.div`
	margin-left: 10px;
	display: inline-table;
`
