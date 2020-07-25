import { useEffect } from 'react'
import { Renderers } from '../../../Controls/RendererControls'
import PixiRenderer from '../PixiRenderer'
import { Data } from '../../types'

interface UpdateProps {
	data: Data[]
	pixiInstance: PixiRenderer | undefined
	renderer: Renderers
}
export function useUpdatedData({ data, pixiInstance, renderer }: UpdateProps) {
	useEffect(() => {
		if (pixiInstance && pixiInstance.getRendererType() === renderer) {
			pixiInstance.updateChart(data)
		}
	}, [data, pixiInstance, renderer])
}
